import Link from "next/link";
import FadeIn from "./FadeIn";

export default function ContactCTA() {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8">
        <FadeIn>
          <p className="eyebrow">CONTACT</p>
          <h2 className="mt-5 text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl">
            우리 아이의 다음 공부를
            <br />
            함께 이야기해보세요.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-white/60">
            학습 상담 및 수업 문의는
            <br className="sm:hidden" /> 편하게 연락해주세요.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3.5 text-sm font-medium text-navy-deep transition-colors hover:bg-gold-soft"
          >
            상담 문의하기
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
