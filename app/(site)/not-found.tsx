import Link from "next/link";
import { PageHero } from "@/components/Blocks";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found" intro="The page you are looking for has moved or does not exist." />
      <section className="section">
        <div className="container center-block">
          <Link href="/" className="btn btn--gold">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
