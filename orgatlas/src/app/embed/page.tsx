"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function EmbedPage() {
  const ref = React.useRef<HTMLDivElement>(null);

  const exportPng = async () => {
    if (!ref.current) return;
    const { toPng } = await import("html-to-image");
    const dataUrl = await toPng(ref.current);
    const link = document.createElement("a");
    link.download = "orgatlas.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Embed & Export</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Use the button below to export a DOM section to PNG. In production, this would target the org chart.
      </p>
      <div ref={ref} className="mt-6 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div className="text-sm">Embeddable card placeholder</div>
        <div className="text-3xl font-extrabold mt-2">OrgAtlas</div>
      </div>
      <div className="mt-4">
        <Button onClick={exportPng} className="bg-red-500 hover:bg-red-600">Export PNG</Button>
      </div>
      <div className="mt-10">
        <h2 className="font-semibold">Embed snippet</h2>
        <pre className="mt-2 text-xs p-3 rounded bg-neutral-100 dark:bg-neutral-900 overflow-auto">{`<iframe src="https://orgatlas.example.com/org/microsoft" width="100%" height="600" style="border:0"></iframe>`}</pre>
      </div>
    </div>
  );
}
