import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { subjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "과목소개 | 메타인지학원",
  description: "국어·영어·수학·과학 과목별 수업 내용을 소개합니다.",
};

export default function SubjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="SUBJECT"
        title="국어 · 영어 · 수학 · 과학"
        description="각 과목의 수업 내용과 학습 방향을 확인해 보세요."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {subjects.map((subject, i) => (
              <FadeIn key={subject.slug} delay={i * 80}>
                <Link
                  href={`/subjects/${subject.slug}`}
                  className="group flex h-full flex-col justify-between bg-white p-10 transition-colors hover:bg-green-deep"
                >
                  <div>
                    <span className="font-display text-sm text-gold">
                      {subject.no}
                    </span>
                    <h2 className="mt-6 text-2xl font-semibold text-green-deep transition-colors group-hover:text-white">
                      {subject.name}
                    </h2>
                    <p className="mt-1 text-sm text-ink-soft/70 transition-colors group-hover:text-white/50">
                      {subject.nameEn}
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft transition-colors group-hover:text-white/70">
                      {subject.description}
                    </p>
                  </div>
                  <span className="mt-10 inline-flex items-center gap-1.5 text-xs font-medium text-green-deep transition-colors group-hover:text-gold">
                    자세히 보기
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
