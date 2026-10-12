import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Upcoming plan",
  description: "The upcoming plan by NRS Group: new hotels, resorts and ventures.",
};

// Placeholder page, intentionally left for content from the client meeting.
export default function UpcomingPlan() {
  return (
    <>
      <SiteHeader />
      <main className="section page-blank">
        <div className="container narrow">
          <p className="eyebrow">NRS Group</p>
          <h1>Upcoming plan by NRS Group</h1>
          <p className="lead">
            We are finalising the next phase of NRS Group&rsquo;s growth. Details of new projects will be published here soon.
          </p>
          <div className="placeholder">Coming soon</div>
          <a href="/#invest" className="btn btn--gold">
            Register your interest
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
