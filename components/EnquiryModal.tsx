"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LeadForm, { type Kind } from "./LeadForm";

// Opens the investor / creator form in a pop-up. Any link on the site pointing
// at "#invest" or "#pitch" (e.g. "/invest#invest") opens it instead of navigating,
// except on a page that already shows the form inline.
export default function EnquiryModal() {
  const ref = useRef<HTMLDialogElement>(null);
  const [kind, setKind] = useState<Kind | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      const k: Kind | null = url.hash === "#invest" ? "investor" : url.hash === "#pitch" ? "creator" : null;
      if (!k) return;
      // The Invest page has the form on the page itself; let it handle the anchor.
      if (document.querySelector("#enquire") && url.pathname === location.pathname) return;
      // Capture phase + stopPropagation so Next's <Link> doesn't also navigate.
      e.preventDefault();
      e.stopPropagation();
      setKind(k);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (kind && !d.open) d.showModal();
    if (!kind && d.open) d.close();
  }, [kind]);

  useEffect(() => setKind(null), [pathname]);

  return (
    <dialog
      ref={ref}
      className="enquiry-modal"
      aria-label="Enquiry form"
      onClose={() => setKind(null)}
      onClick={(e) => {
        // Click on the backdrop closes the pop-up.
        if (e.target === ref.current) setKind(null);
      }}
    >
      {kind && (
        <div className="enquiry-modal__body">
          <button type="button" className="enquiry-modal__close" aria-label="Close" onClick={() => setKind(null)}>
            ×
          </button>
          <LeadForm key={kind} initialKind={kind} inline={false} />
        </div>
      )}
    </dialog>
  );
}
