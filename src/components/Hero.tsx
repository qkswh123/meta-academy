import Link from "next/link";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">META ACADEMY</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.25] tracking-tight text-navy-deep sm:text-5xl">
            배움을 넘어,
            <br />
            스스로 생각하는 아이로.
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">
            국어 · 영어 · 수학 · 과학
            <br />
            학생의 가능성과 성장을 함께 고민하는{" "}
            <br className="hidden sm:block" />
            메타인지학원입니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-sm border border-navy-deep px-7 py-3.5 text-sm font-medium text-navy-deep transition-colors hover:bg-navy-deep hover:text-white"
            >
              학원 알아보기
            </Link>
            <Link
              href="/contact"
              className="rounded-sm bg-navy-deep px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-navy"
            >
              상담 문의
            </Link>
          </div>
        </div>

        <div className="mx-auto hidden aspect-square w-full max-w-[380px] lg:block">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}
