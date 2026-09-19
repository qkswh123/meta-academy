import Link from "next/link";

export function Emblem({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="META 로고"
    >
      <circle cx="32" cy="32" r="31" fill="var(--color-green-deep)" />
      <circle
        cx="32"
        cy="32"
        r="27.5"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1"
      />
      {/* light bulb motif */}
      <g fill="none" stroke="#f8f7f4" strokeWidth="1.6" strokeLinecap="round">
        <path d="M32 16.5c-6.2 0-10.6 4.6-10.6 10.2 0 3.9 2 6.4 4 8.6 1.3 1.5 2 2.6 2.2 4.2h8.8c.2-1.6.9-2.7 2.2-4.2 2-2.2 4-4.7 4-8.6 0-5.6-4.4-10.2-10.6-10.2Z" />
        <line x1="27.8" y1="43.4" x2="36.2" y2="43.4" />
        <line x1="28.6" y1="46.6" x2="35.4" y2="46.6" />
        <line x1="30" y1="49.4" x2="34" y2="49.4" />
      </g>
      <path
        d="M32 22.3c-3 0-5.4 2.2-5.4 5.4"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ tight = false }: { tight?: boolean }) {
  return (
    <span className={`flex flex-col ${tight ? "gap-0" : "gap-0.5"}`}>
      <span
        className="font-display text-[1.05rem] font-semibold tracking-[0.06em] text-green-deep leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        META
      </span>
      <span className="text-[0.68rem] tracking-[0.01em] text-ink-soft leading-none">
        메타인지학원
      </span>
    </span>
  );
}

export default function Logo({
  className = "",
  size = 40,
  showWordmark = true,
}: {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="메타인지학원 홈으로 이동"
    >
      <Emblem size={size} />
      {showWordmark && <Wordmark />}
    </Link>
  );
}
