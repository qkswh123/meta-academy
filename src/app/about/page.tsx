import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "학원소개 | 메타인지학원",
  description: "학생을 이해하고, 배움의 과정을 함께하는 교육 — 메타인지학원을 소개합니다.",
};

const values = [
  {
    title: "이해에서 시작하는 수업",
    body: "학생이 무엇을 어려워하는지 먼저 파악하고, 그에 맞는 설명과 속도로 수업을 진행합니다.",
  },
  {
    title: "스스로 생각하는 힘",
    body: "정답을 빠르게 알려주기보다, 학생이 스스로 근거를 찾고 풀어내는 과정을 중요하게 여깁니다.",
  },
  {
    title: "꾸준함을 만드는 관리",
    body: "일시적인 성과보다 꾸준히 쌓아가는 학습 습관과 과정을 함께 살펴봅니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT META"
        title={
          <>
            학생을 이해하고,
            <br />
            배움의 과정을 함께하는 교육
          </>
        }
        description="메타인지학원은 국어, 영어, 수학, 과학을 중심으로 학생 한 명 한 명의 학습 과정과 성장을 중요하게 생각합니다."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">교육 방향</p>
            <h2 className="mt-5 text-2xl font-semibold leading-snug text-green-deep">
              많이 푸는 공부보다,
              <br />
              이해하고 자신의 것으로 만드는 공부
            </h2>
            <p className="mt-6 text-[1.05rem] leading-loose text-ink-soft">
              단순히 많은 문제를 풀게 하는 교육보다 학생이 배운 내용을 이해하고
              자신의 것으로 만들어갈 수 있도록 곁에서 함께하는 교육을
              지향합니다. 과목별 개념의 원리를 이해하는 과정을 충분히 거친
              뒤, 이를 문제 해결과 서술로 연결할 수 있도록 지도합니다.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <FadeIn>
            <p className="eyebrow">우리가 중요하게 생각하는 것</p>
          </FadeIn>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80} className="bg-white p-8">
                <h3 className="text-lg font-semibold text-green-deep">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {v.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow">학원 공간</p>
            <h2 className="mt-5 text-2xl font-semibold leading-snug text-green-deep">
              차분하게 집중할 수 있는 공간
            </h2>
            <p className="mt-6 text-[1.05rem] leading-loose text-ink-soft">
              학원 내부와 학습 공간 사진은 준비되는 대로 이 영역에 추가할
              예정입니다.
            </p>
          </FadeIn>
          <FadeIn delay={100} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex aspect-[4/3] items-center justify-center border border-line bg-bg-alt text-xs tracking-wide text-ink-soft/60"
              >
                학원 공간 사진 {n}
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p className="text-lg font-medium text-green-deep">
            메타인지학원이 궁금하신가요?
          </p>
          <Link
            href="/contact"
            className="rounded-sm bg-green-deep px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-green"
          >
            상담 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
