import type { Metadata } from "next";
import "./globals.css";
import FloatingClouds from "@/components/FloatingClouds";
import StructuredData from "@/components/StructuredData";
import { getSiteConfig } from "@/lib/portfolio-data";
import { getSiteConfig as getSiteConfigForMetadata } from "@/lib/portfolio-data";

const siteUrl = getSiteConfigForMetadata().url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Nguyen Dang Viet",
    default: "Portfolio | Nguyen Dang Viet",
  },
  description:
    "Full-stack portfolio showcasing Next.js, React, and scalable web apps with real projects, case studies, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = getSiteConfig();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <StructuredData data={jsonLd} />
      </head>
      <body className="min-h-full flex flex-col text-[#E1E0CC] overflow-x-hidden">
        <FloatingClouds />
        {children}
      </body>
    </html>
  );
}
