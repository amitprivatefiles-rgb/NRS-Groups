import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NRS Group | Hospitality, Food & Dining, Real Estate",
    template: "%s | NRS Group",
  },
  description:
    "NRS Group, Kolkata: hotels, restaurants, construction, real estate, manufacturing and leisure. Invest in our upcoming Tarapith and Sundarban projects or pitch your idea.",
  openGraph: {
    title: "NRS Group",
    description: "Hospitality, food & dining, real estate, manufacturing and leisure. Invest with NRS Group.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/brand/nrs-emblem.png", width: 600, height: 292, alt: "NRS Group" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1b2d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS will reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
