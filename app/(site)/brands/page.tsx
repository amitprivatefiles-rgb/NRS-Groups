import type { Metadata } from "next";
import { BrandCard, CtaBand, PageHero, SectionHead } from "@/components/Blocks";
import { liveBrands } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Brands",
  description: "NRS Royal Palace, Bistro Y and HakkaLand: the hotels and restaurants of NRS Group.",
};

export default function BrandsPage() {
  const brands = liveBrands();
  const groups = [
    { title: "Hospitality", intro: "Hotels where the setting is memorable and the service more so.", items: brands.filter((b) => b.vertical === "Hospitality") },
    { title: "Food & Dining", intro: "Restaurants and bars Kolkata keeps coming back to.", items: brands.filter((b) => b.vertical === "Food & Dining") },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our brands"
        title="A portfolio of hotels and restaurants"
        intro="Every NRS brand is run to one standard: quality first, from the front desk to the kitchen."
        crumbs={[{ href: "/brands", label: "Our Brands" }]}
      />
      {groups.map((g, i) => (
        <section key={g.title} className={`section${i % 2 ? " section--alt" : ""}`}>
          <div className="container">
            <SectionHead eyebrow={g.title} title={g.intro} />
            <div className="brand-grid">
              {g.items.map((b) => (
                <BrandCard key={b.slug} brand={b} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
