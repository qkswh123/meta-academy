import Link from "next/link";
import { teachers } from "@/lib/data";
import FadeIn from "./FadeIn";
import TeacherPhoto from "./TeacherPhoto";

export default function TeacherSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <FadeIn className="text-center">
          <p className="eyebrow">TEACHERS</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-green-deep">
            함께 배우고 성장하는 선생님
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {teachers.map((teacher, i) => (
            <FadeIn key={teacher.id} delay={i * 80}>
              <TeacherPhoto subject={teacher.subject} />
              <p className="mt-4 text-xs tracking-wider text-gold">
                {teacher.subject}
              </p>
              <p className="mt-1 text-base font-medium text-green-deep">
                {teacher.name}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{teacher.role}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-deep"
          >
            선생님 전체 보기
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
