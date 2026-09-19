export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-snug tracking-tight text-green-deep sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
