import { existsSync } from "fs";
import path from "path";

// Video slot: renders only when the file exists under /public (e.g. /videos/careers.mp4).
export default function Video({ src, poster, title }: { src: string; poster?: string; title: string }) {
  if (!existsSync(path.join(process.cwd(), "public", src))) return null;
  const hasPoster = poster && existsSync(path.join(process.cwd(), "public", poster));
  return (
    <video className="video" controls preload="metadata" playsInline poster={hasPoster ? poster : undefined} aria-label={title}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
