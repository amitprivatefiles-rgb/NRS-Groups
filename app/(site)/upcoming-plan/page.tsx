import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Upcoming Plan",
  description: "The upcoming plan by NRS Group: new hotels, resorts and ventures.",
};

// Placeholder page, intentionally left for content from the client meeting.
export default function UpcomingPlan() {
  return (
    <>
      <PageHero
        eyebrow="NRS Group"
        title="Upcoming plan by NRS Group"
        intro="We are finalising the next phase of NRS Group's growth. Details of new projects will be published here soon."
        crumbs={[{ href: "/upcoming-plan", label: "Upcoming Plan" }]}
        image="/images/projects/hero.jpg"
        art="compass"
      />
      <section className="section">
        <div className="container narrow">
          <div className="placeholder">Coming soon</div>
          <p className="center">
            <Link href="/invest#invest" className="btn btn--gold">
              Register your interest
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
