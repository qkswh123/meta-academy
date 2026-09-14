import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { subjects, type SubjectSlug } from "@/lib/data";

export function generateStaticParams() {
  return subjects.map((s) => ({ slug: s.slug }));
}

async function getSubject(slug: string) {
  return subjects.find((s) => s.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: SubjectSlug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subject = await getSubject(slug);
  if (!subject) return {};
  return {
    title: `${subject.name} | 메타인지학원`,
    description: subject.description,
  };
}

export default async function SubjectDetailPage({
  params,
}: {
  params: Promise<{ slug: SubjectSlug }>;
}) {
  const { slug } = await params;
  const subject = await getSubject(slug);
  if (!subject) notFound();

  return (
    <>
      <PageHero
        eyebrow={`SUBJECT ${subject.no}`}
        title={subject.name}
        description={subject.description}
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <p className="eyebrow">대상 학년</p>
                  <p className="mt-3 text-lg text-navy-deep">{subject.grades}</p>
                </div>
                <div>
                  <p className="eyebrow">주요 학습 영역</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {subject.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-sm border border-line px-3 py-1.5 text-sm text-ink-soft"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-10">
              <FadeIn delay={80}>
                <p className="eyebrow">수업 내용</p>
                <ul className="mt-4 space-y-3">
                  {subject.curriculum.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={140}>
                <p className="eyebrow">수업 특징</p>
                <ul className="mt-4 space-y-3">
                  {subject.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={180} className="mt-16 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-medium text-navy-deep">
              {subject.name} 수업이 궁금하다면 상담을 받아보세요.
            </p>
            <Link
              href="/contact"
              className="rounded-sm bg-navy-deep px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-navy whitespace-nowrap"
            >
              상담 문의
            </Link>
          </FadeIn>
        </div>
      </section>

      <div className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 md:px-8">
          <Link href="/subjects" className="text-sm text-ink-soft hover:text-navy-deep">
            ← 과목소개 전체 보기
          </Link>
        </div>
      </div>
    </>
  );
}
