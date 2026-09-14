import Link from "next/link";
import { newsItems } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function NewsSection() {
  return (
    <section className="bg-bg-alt">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <FadeIn className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">NEWS</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-navy-deep">
              메타인지학원 소식
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-medium text-navy-deep"
          >
            전체 보기 →
          </Link>
        </FadeIn>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {newsItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 60}>
              <Link
                href="/news"
                className="flex flex-col gap-2 py-6 transition-colors hover:bg-white/60 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-2"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium tracking-wide text-gold">
                    {item.category}
                  </span>
                  <span className="text-[0.95rem] text-ink">{item.title}</span>
                </div>
                <span className="text-sm text-ink-soft/70">{item.date}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
