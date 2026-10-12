import type { ArtKind } from "@/lib/content";

// Line illustrations used in place of photography until NRS supplies real
// property photos. Each is drawn in gold on the navy `.art` background.

function Palace() {
  const floors = [140, 162, 184];
  return (
    <>
      <circle cx="318" cy="64" r="20" opacity="0.5" />
      <path d="M100 130 Q120 92 140 130 M170 130 Q200 66 230 130 M260 130 Q280 92 300 130" />
      <path d="M200 74 V56 M120 96 V84 M280 96 V84" />
      <circle cx="200" cy="52" r="3" />
      <rect x="90" y="130" width="220" height="80" />
      {floors.map((y) =>
        Array.from({ length: 9 }).map((_, i) => (
          <path key={`${y}-${i}`} d={`M${101 + i * 23} ${y + 14} v-8 a5 5 0 0 1 10 0 v8`} opacity="0.8" />
        )),
      )}
      <path d="M40 222 Q60 216 80 222 T120 222 T160 222 T200 222 T240 222 T280 222 T320 222 T360 222" opacity="0.7" />
      <path d="M20 236 Q40 230 60 236 T100 236 T140 236 T180 236 T220 236 T260 236 T300 236 T340 236 T380 236" opacity="0.45" />
    </>
  );
}

function Glass() {
  return (
    <>
      <path d="M150 70 H250 L200 138 Z" />
      <path d="M162 86 H238" opacity="0.6" />
      <path d="M200 138 V198 M168 202 H232" />
      <circle cx="218" cy="96" r="7" />
      <path d="M218 89 L232 58" />
      <path d="M296 70 v32 M296 70 l18 -6 v30" />
      <ellipse cx="290" cy="103" rx="7" ry="5" />
      <ellipse cx="308" cy="95" rx="7" ry="5" />
      <path d="M108 104 v30" />
      <ellipse cx="102" cy="135" rx="7" ry="5" />
      <circle cx="130" cy="70" r="3" opacity="0.6" />
      <circle cx="270" cy="150" r="4" opacity="0.6" />
      <circle cx="120" cy="170" r="2" opacity="0.6" />
      <path d="M60 222 H340" opacity="0.5" />
    </>
  );
}

function Lantern() {
  return (
    <>
      <path d="M200 16 V52" />
      <rect x="176" y="52" width="48" height="10" rx="2" />
      <ellipse cx="200" cy="120" rx="56" ry="60" />
      <ellipse cx="200" cy="120" rx="30" ry="60" opacity="0.7" />
      <path d="M200 60 V180" opacity="0.7" />
      <path d="M146 100 H254 M146 140 H254" opacity="0.45" />
      <rect x="182" y="178" width="36" height="10" rx="2" />
      <path d="M192 188 V226 M200 188 V232 M208 188 V226" />
      <path d="M88 150 q-10 -16 0 -30 t0 -30 M318 150 q-10 -16 0 -30 t0 -30" opacity="0.5" />
    </>
  );
}

function Tower() {
  const floors = Array.from({ length: 14 }, (_, i) => 52 + i * 12);
  return (
    <>
      <path d="M40 220 H360" />
      <rect x="160" y="44" width="80" height="176" />
      {floors.map((y, i) => (
        <path key={y} d={`M160 ${y} H240`} strokeDasharray={i < 3 ? "4 5" : undefined} opacity={i < 3 ? 0.6 : 0.5} />
      ))}
      <path d="M180 44 V220 M200 44 V220 M220 44 V220" opacity="0.25" />
      <path d="M290 220 V30 M150 34 H346 M290 30 L330 34 M290 30 L250 34" />
      <path d="M296 220 V30" opacity="0.5" />
      <path d="M190 34 V58" />
      <rect x="183" y="58" width="14" height="8" />
      <rect x="320" y="34" width="22" height="14" opacity="0.7" />
      <path d="M70 220 V176 H120 V220 M80 186 h10 M100 186 h10 M80 200 h10 M100 200 h10" opacity="0.5" />
    </>
  );
}

function Mangrove() {
  return (
    <>
      <circle cx="200" cy="100" r="40" />
      <circle cx="162" cy="122" r="28" />
      <circle cx="238" cy="122" r="28" />
      <path d="M200 140 V160 M200 158 Q168 182 156 212 M200 158 Q232 182 244 212 M200 158 Q196 186 200 212 M200 158 Q182 186 176 212 M200 158 Q218 186 224 212" />
      <circle cx="94" cy="140" r="20" opacity="0.6" />
      <path d="M94 160 V170 M94 168 Q80 188 74 212 M94 168 Q108 188 114 212" opacity="0.6" />
      <path d="M286 212 H340 L330 224 H296 Z" />
      <path d="M313 212 V188 L330 206" />
      <path d="M30 214 H380" opacity="0.6" />
      <path d="M50 228 Q70 222 90 228 T130 228 T170 228 T210 228 T250 228 T290 228 T330 228 T370 228" opacity="0.45" />
      <path d="M300 60 q8 -6 16 0 q8 -6 16 0" opacity="0.6" />
    </>
  );
}

function Skyline() {
  const blocks = [
    [40, 150, 40],
    [86, 110, 36],
    [128, 70, 46],
    [180, 40, 40],
    [226, 90, 50],
    [282, 120, 34],
    [322, 140, 38],
  ];
  return (
    <>
      {blocks.map(([x, y, w]) => (
        <rect key={x} x={x} y={y} width={w} height={210 - y} />
      ))}
      <path d="M200 40 V20" />
      <path d="M20 210 H380" />
      {blocks.map(([x, y, w]) =>
        Array.from({ length: Math.floor((200 - y) / 20) }).map((_, i) => (
          <path key={`${x}-${i}`} d={`M${x + 8} ${y + 14 + i * 20} H${x + w - 8}`} opacity="0.35" />
        )),
      )}
    </>
  );
}

function Compass() {
  return (
    <>
      <circle cx="200" cy="124" r="64" />
      <circle cx="200" cy="124" r="52" opacity="0.4" />
      <path d="M200 52 L214 124 L200 196 L186 124 Z" />
      <path d="M128 124 L200 110 L272 124 L200 138 Z" opacity="0.6" />
      <circle cx="200" cy="124" r="4" />
      <path d="M200 40 V52 M200 196 V208 M116 124 H128 M272 124 H284" />
    </>
  );
}

const drawings: Record<ArtKind, () => React.ReactElement> = {
  palace: Palace,
  glass: Glass,
  lantern: Lantern,
  tower: Tower,
  mangrove: Mangrove,
  skyline: Skyline,
  compass: Compass,
};

export default function Art({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  const Drawing = drawings[kind];
  return (
    <div className={`art ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <Drawing />
      </svg>
    </div>
  );
}
