export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">{children}</div>
    </section>
  );
}
