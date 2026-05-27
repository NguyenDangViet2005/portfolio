import type { Metadata } from "next";

import HomePage from "@/app/home-page";
import StructuredData from "@/components/StructuredData";
import { getProjects, getSiteConfig, getStats } from "@/lib/portfolio-data";

export async function generateMetadata(): Promise<Metadata> {
  const site = getSiteConfig();
  const projects = getProjects();
  const stats = getStats();
  const projectCount = projects.length;
  const years =
    stats.find((stat) => stat.label === "Years Experience")?.value ?? "1+";

  const title = site.title;
  const description = `Full-stack portfolio by ${site.name} with ${projectCount}+ projects and ${years} years of experience, focused on modern Next.js and React builds.`;

  return {
    title,
    description,
    alternates: {
      canonical: site.url,
    },
    openGraph: {
      title,
      description,
      url: site.url,
      siteName: site.name,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
  };
}

export default function Page() {
  const site = getSiteConfig();
  const projects = getProjects();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
    ],
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      description: project.desc,
      url: project.demo,
    })),
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      <HomePage />
    </>
  );
}
