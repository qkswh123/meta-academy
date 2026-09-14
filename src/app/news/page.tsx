import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { newsItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "학원소식 | 메타인지학원",
  description: "메타인지학원의 공지사항과 수업 안내를 확인하세요.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="NEWS"
        title="메타인지학원 소식"
        description="공지사항, 수업 안내, 학원 소식을 전해드립니다."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8">
          {/* 아래 목록은 더미(예시) 데이터입니다. 추후 실제 게시글로 교체됩니다. */}
          <div className="divide-y divide-line border-y border-line">
            {newsItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 60}>
                <article className="flex flex-col gap-2 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 text-xs font-medium tracking-wide text-gold">
                      {item.category}
                    </span>
                    <h2 className="text-[1.02rem] text-ink">{item.title}</h2>
                  </div>
                  <time className="shrink-0 text-sm text-ink-soft/70">
                    {item.date}
                  </time>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
