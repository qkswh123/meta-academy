import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import TeacherPhoto from "@/components/TeacherPhoto";
import { teachers } from "@/lib/data";

export const metadata: Metadata = {
  title: "선생님 | 메타인지학원",
  description: "과목별 담당 선생님을 소개합니다.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="TEACHERS"
        title="함께 배우고 성장하는 선생님"
        description="과목별 선생님의 소개와 교육 경력은 준비되는 대로 업데이트됩니다."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher, i) => (
              <FadeIn key={teacher.id} delay={i * 80}>
                <TeacherPhoto subject={teacher.subject} />
                <p className="mt-5 text-xs tracking-wider text-gold">
                  {teacher.subject}
                </p>
                <p className="mt-1.5 text-lg font-medium text-navy-deep">
                  {teacher.name}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{teacher.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">
                  {teacher.bio}
                </p>
                {/* TODO: 교육 경력 등 상세 프로필 정보 추가 */}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
