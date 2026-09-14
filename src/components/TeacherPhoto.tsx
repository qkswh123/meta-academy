export default function TeacherPhoto({ subject }: { subject: string }) {
  return (
    <div className="flex aspect-[4/5] w-full items-center justify-center border border-line bg-bg-alt">
      <div className="flex flex-col items-center gap-2 text-ink-soft/60">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.3" />
          <path
            d="M4.8 19.2c1.1-3.4 4-5.3 7.2-5.3s6.1 1.9 7.2 5.3"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[0.7rem] tracking-wide">{subject} 선생님 사진</span>
      </div>
    </div>
  );
}
