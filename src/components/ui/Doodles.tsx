/* Simple hand-drawn style SVG doodles, stroke-based, theme colored. */

type D = { className?: string };

export function Sparkle({ className = "" }: D) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2c.6 4.8 2.2 7.4 8 8-5.8.6-7.4 3.2-8 8-.6-4.8-2.2-7.4-8-8 5.8-.6 7.4-3.2 8-8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Orbit({ className = "" }: D) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5" />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="7"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-28 20 20)"
      />
      <circle cx="37" cy="13" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Squiggle({ className = "" }: D) {
  return (
    <svg viewBox="0 0 60 16" fill="none" className={className} aria-hidden>
      <path
        d="M1 8c6-8 12 8 18 0s12-8 18 0 12 8 18 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Asterisk({ className = "" }: D) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" />
      </g>
    </svg>
  );
}

export function Arrow({ className = "" }: D) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Scribble({ className = "" }: D) {
  return (
    <svg viewBox="0 0 70 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 18C14 2 20 2 28 12s14 10 24-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
