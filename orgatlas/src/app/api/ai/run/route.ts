import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const prompt: string | undefined = body?.prompt;

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  const summary = `### Opportunity breakdown\n\n- **Prompt received:** ${prompt}\n- **Signals:** ICP fit, active hiring, exec sponsor identified\n- **Next actions:** Prioritize outreach with a tailored intro and attach relevant case study.`;

  return NextResponse.json({
    id: `ai-${Date.now()}`,
    prompt,
    output: summary,
    createdAt: new Date().toISOString(),
  });
}
