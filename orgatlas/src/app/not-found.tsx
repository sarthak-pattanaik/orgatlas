import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        404
      </span>
      <h1 className="text-4xl font-semibold tracking-tight">This page is still being mapped.</h1>
      <p className="max-w-xl text-base text-muted-foreground">
        The route you were looking for isn’t available yet. Head back to the marketing site or jump into the app if you are
        already signed in.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
          Go home
        </Link>
        <Link href="/app/discover" className="rounded-md border border-border px-4 py-2 text-sm font-semibold">
          Open the app
        </Link>
      </div>
    </div>
  );
}
