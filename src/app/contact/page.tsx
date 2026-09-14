import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "상담문의 | 메타인지학원",
  description: "메타인지학원 학습 상담 및 수업 문의를 남겨주세요.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="상담 / 오시는 길"
        description="학습 상담 및 수업 문의는 아래 양식으로 편하게 남겨주세요."
      />

      <section className="bg-bg">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.3fr] md:px-8">
          <FadeIn>
            <div className="space-y-8">
              <div>
                <p className="eyebrow">전화 문의</p>
                {/* TODO: 실제 전화번호 입력 */}
                <p className="mt-3 text-lg text-navy-deep">000-0000-0000</p>
              </div>
              <div>
                <p className="eyebrow">카카오톡 문의</p>
                {/* TODO: 실제 카카오톡 채널 링크 또는 아이디 입력 */}
                <p className="mt-3 text-lg text-navy-deep">카카오톡 채널 준비 중</p>
              </div>
              <div>
                <p className="eyebrow">오시는 길</p>
                {/* TODO: 실제 주소 및 지도 입력 */}
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">
                  주소를 입력해 주세요
                </p>
                <div className="mt-4 flex aspect-video items-center justify-center border border-line bg-bg-alt text-xs text-ink-soft/60">
                  지도 영역 (주소 입력 후 연결)
                </div>
              </div>
              <div>
                <p className="eyebrow">운영시간</p>
                {/* TODO: 실제 운영시간 입력 */}
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">
                  평일 00:00 – 00:00
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
