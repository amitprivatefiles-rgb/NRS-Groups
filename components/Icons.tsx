import type { VerticalKey } from "@/lib/content";

const paths: Record<VerticalKey, React.ReactNode> = {
  hospitality: (
    <>
      <path d="M3 21h18M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-4h6v4M9 10h1M14 10h1M9 13.5h1M14 13.5h1" />
    </>
  ),
  food: (
    <>
      <path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5" />
      <path d="M17 21V3c-2 1.5-3 4-3 7s1 4 3 4" />
    </>
  ),
  construction: (
    <>
      <path d="M4 21h16M8 21V4M8 4h12M8 4 4 7M16 4v5" />
      <rect x="14" y="9" width="4" height="3" />
    </>
  ),
  realestate: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v11h14V10M10 21v-6h4v6" />
    </>
  ),
  manufacturing: (
    <>
      <path d="M3 21h18M4 21V11l5 3v-3l5 3v-3l5 3V5h-3v6" />
      <path d="M7 17h2M11 17h2M15 17h2" />
    </>
  ),
  leisure: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="M12 4v12M6 10h12M7.8 5.8l8.4 8.4M16.2 5.8l-8.4 8.4M9 21l3-5 3 5M7 21h10" />
    </>
  ),
  business: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
};

export function VerticalIcon({ kind }: { kind: VerticalKey }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function External() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" />
    </svg>
  );
}
