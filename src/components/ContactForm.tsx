"use client";

import { useState } from "react";
import { subjects } from "@/lib/data";

const grades = [
  "초등 저학년",
  "초등 고학년",
  "중등 1학년",
  "중등 2학년",
  "중등 3학년",
  "고등 1학년",
  "고등 2학년",
  "고등 3학년",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: 백엔드 연동 후 실제 상담 신청 데이터 전송 로직을 이 위치에 연결합니다.
    // 현재는 서버로 데이터를 전송하거나 저장하지 않습니다.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white px-8 py-16 text-center">
        <p className="text-xl font-semibold text-green-deep">
          상담 신청이 접수되었습니다.
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
          입력하신 내용은 확인 후 순차적으로 연락드리겠습니다.
          {/* TODO: 백엔드 연동 후 안내 문구를 실제 처리 방식에 맞게 수정 */}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-8 sm:p-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <Field label="학생 이름" htmlFor="studentName">
          <input
            id="studentName"
            name="studentName"
            type="text"
            required
            className="input"
            placeholder="학생 이름을 입력해 주세요"
          />
        </Field>

        <Field label="학년" htmlFor="grade">
          <select id="grade" name="grade" required defaultValue="" className="input">
            <option value="" disabled>
              학년 선택
            </option>
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </Field>

        <Field label="상담 과목" htmlFor="subject">
          <select id="subject" name="subject" required defaultValue="" className="input">
            <option value="" disabled>
              과목 선택
            </option>
            {subjects.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="전체/기타">전체 / 기타</option>
          </select>
        </Field>

        <Field label="보호자 연락처" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="input"
            placeholder="010-0000-0000"
          />
        </Field>

        <Field label="문의 내용" htmlFor="message" full>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="input resize-none"
            placeholder="상담을 원하시는 내용을 자유롭게 남겨주세요"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-sm bg-green-deep px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-green sm:w-auto"
      >
        상담 신청
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft/70">
        입력하신 개인정보는 상담 목적 외에는 사용되지 않습니다.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  full,
  children,
}: {
  label: string;
  htmlFor: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "lg:col-span-2" : ""}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-green-deep">
        {label}
      </label>
      {children}
    </div>
  );
}
