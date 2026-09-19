import Link from "next/link";
import { subjects } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function SubjectSection() {
  return (
    <section className="bg-bg-alt">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <FadeIn className="text-center">
          <p className="eyebrow">SUBJECT</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-green-deep">
            국어 · 영어 · 수학 · 과학
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, i) => (
            <FadeIn key={subject.slug} delay={i * 80}>
              <Link
                href={`/subjects/${subject.slug}`}
                className="group flex h-full flex-col justify-between bg-white p-8 transition-colors hover:bg-green-deep"
              >
                <span className="font-display text-sm text-gold">
                  {subject.no}
                </span>
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-green-deep transition-colors group-hover:text-white">
                    {subject.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-white/70">
                    {subject.tagline}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-medium text-green-deep transition-colors group-hover:text-gold">
                  자세히 보기
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
