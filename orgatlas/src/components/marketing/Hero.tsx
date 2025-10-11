import { Button } from "@/components/ui/button";

export function Hero({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary }: { eyebrow?: string; title: string; subtitle?: string; ctaPrimary?: { href: string; label: string }; ctaSecondary?: { href: string; label: string } }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow ? <div className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold">{eyebrow}</div> : null}
      <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">{title}</h1>
      {subtitle ? <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">{subtitle}</p> : null}
      <div className="mt-6 flex items-center justify-center gap-3">
        {ctaPrimary ? (
          <Button asChild className="bg-red-500 hover:bg-red-600"><a href={ctaPrimary.href}>{ctaPrimary.label}</a></Button>
        ) : null}
        {ctaSecondary ? (
          <Button asChild variant="outline"><a href={ctaSecondary.href}>{ctaSecondary.label}</a></Button>
        ) : null}
      </div>
    </div>
  );
}
