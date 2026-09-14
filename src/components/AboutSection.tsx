import Link from "next/link";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <FadeIn>
            <p className="eyebrow">ABOUT META</p>
            <h2 className="mt-5 text-3xl font-semibold leading-snug tracking-tight text-navy-deep">
              배움의 시작은
              <br />
              학생을 이해하는 것에서부터
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-[1.05rem] leading-loose text-ink-soft">
              메타인지학원은 국어, 영어, 수학, 과학을 중심으로 학생 한 명 한
              명의 학습 과정과 성장을 중요하게 생각합니다.
            </p>
            <p className="mt-5 text-[1.05rem] leading-loose text-ink-soft">
              단순히 많은 문제를 풀게 하는 교육보다 학생이 배운 내용을
              이해하고 자신의 것으로 만들어갈 수 있도록 곁에서 함께하는
              교육을 지향합니다.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-deep"
            >
              학원소개 자세히 보기
              <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
