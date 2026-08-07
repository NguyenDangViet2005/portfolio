import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GsapCursorSpotlight from "@/components/GsapCursorSpotlight";
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
    <html lang="en" className="h-full antialiased scroll-smooth dark" suppressHydrationWarning>
      <head>
        <StructuredData data={jsonLd} />
      </head>

      <body className="min-h-full flex flex-col bg-[var(--bg-color)] text-[var(--text-main)] selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-black overflow-x-hidden transition-colors duration-200">
        <ThemeProvider>
          <SmoothScrollProvider>
            <GsapCursorSpotlight />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}



