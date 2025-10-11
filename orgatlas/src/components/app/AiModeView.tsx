"use client";

import { useMemo, useState } from "react";
import { Loader2, Play, RotateCcw } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import type { AiRunResponse } from "@/types";

function MarkdownRenderer({ content }: { content: string }) {
  const elements = useMemo(() => {
    return content.split(/\n\n+/).map((block, index) => {
      if (block.startsWith("### ")) {
        return (
          <h3 key={index} className="text-lg font-semibold text-foreground">
            {block.replace(/^###\s*/, "")}
          </h3>
        );
      }
      if (block.includes("\n- ") || block.trim().startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((line) => line.trim().startsWith("- "))
          .map((line) => line.replace(/^[-*]\s*/, ""));
        return (
          <ul key={index} className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-sm text-muted-foreground">
          {block}
        </p>
      );
    });
  }, [content]);

  return <div className="space-y-3">{elements}</div>;
}

export function AiModeView() {
  const [prompt, setPrompt] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [response, setResponse] = useState<AiRunResponse | null>(null);
  const [history, setHistory] = useState<AiRunResponse[]>([]);

  const handleRun = async () => {
    if (!prompt.trim()) return;
    setIsRunning(true);
    try {
      const result = await apiClient.runAi(prompt.trim());
      setResponse(result);
      setHistory((current) => [result, ...current].slice(0, 5));
    } catch (error) {
      console.error(error);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setPrompt("");
    setResponse(null);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-semibold">AI Mode</h1>
          <p className="text-sm text-muted-foreground">
            Ask OrgAtlas AI to analyze signals, prep meetings, and generate outreach. History saves your last five prompts.
          </p>
        </div>
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Example: Summarize buying signals for Helios Grid and draft call prep for the VP of Growth"
          className="min-h-[240px] w-full rounded-2xl border bg-background p-4 text-sm"
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleRun}
            disabled={isRunning || !prompt.trim()}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isRunning ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
            Run
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Reset
          </button>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-base font-semibold text-foreground">History</h2>
          {history.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">Run a prompt to store it here for quick reference.</p>
          ) : (
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {history.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setPrompt(item.prompt);
                      setResponse(item);
                    }}
                    className="text-left text-primary underline-offset-2 hover:underline"
                  >
                    {item.prompt}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border bg-card p-6 shadow-lg">
          <h2 className="text-base font-semibold text-foreground">Response</h2>
          <div className="mt-4 min-h-[200px]">
            {isRunning ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Streaming insights…
              </div>
            ) : response ? (
              <MarkdownRenderer content={response.output} />
            ) : (
              <p className="text-sm text-muted-foreground">
                Run AI Mode to transform raw signals into talk tracks, opportunity summaries, and action plans.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
