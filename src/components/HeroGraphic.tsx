export default function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="210" cy="210" r="200" fill="none" stroke="var(--color-line)" strokeWidth="1" />
      <circle cx="210" cy="210" r="150" fill="none" stroke="var(--color-line)" strokeWidth="1" />
      <circle cx="210" cy="210" r="100" fill="var(--color-green-deep)" />
      <circle
        cx="210"
        cy="210"
        r="100"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.2"
      />

      {/* rays */}
      <g stroke="var(--color-gold)" strokeWidth="1" opacity="0.55">
        <line x1="210" y1="4" x2="210" y2="34" />
        <line x1="210" y1="386" x2="210" y2="416" />
        <line x1="4" y1="210" x2="34" y2="210" />
        <line x1="386" y1="210" x2="416" y2="210" />
      </g>

      {/* bulb motif, enlarged */}
      <g
        fill="none"
        stroke="#f8f7f4"
        strokeWidth="2.4"
        strokeLinecap="round"
        transform="translate(210 210)"
      >
        <path d="M0 -46c-19.3 0-33 14.3-33 31.7 0 12.1 6.2 19.9 12.4 26.7 4 4.4 6.2 8 6.8 13h27.6c.6-5 2.8-8.6 6.8-13 6.2-6.8 12.4-14.6 12.4-26.7C33-31.7 19.3-46 0-46Z" />
        <line x1="-13" y1="30" x2="13" y2="30" />
        <line x1="-10.5" y1="40" x2="10.5" y2="40" />
        <line x1="-6" y1="49" x2="6" y2="49" />
      </g>
      <path
        d="M0 -30.5c-9.4 0-17 6.9-17 16.9"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        transform="translate(210 210)"
      />
    </svg>
  );
}
