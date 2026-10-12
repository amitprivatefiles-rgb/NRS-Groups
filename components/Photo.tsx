import { existsSync } from "fs";
import path from "path";
import type { ArtKind } from "@/lib/content";
import Art from "./Art";

// Image slot. If the file exists under /public it is shown; otherwise a
// designed illustration fills the slot so layouts never look empty.
// Drop real photos at the same path (see public/images/README.md) and they
// appear on the next build.
export default function Photo({
  src,
  alt,
  art,
  className = "",
  priority,
}: {
  src: string;
  alt: string;
  art: ArtKind;
  className?: string;
  priority?: boolean;
}) {
  const exists = existsSync(path.join(process.cwd(), "public", src));
  return (
    <div className={`photo ${className}`}>
      {exists ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />
      ) : (
        <Art kind={art} />
      )}
    </div>
  );
}
