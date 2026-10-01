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
  const description = `Portfolio của Nguyễn Đăng Việt (Nguyen Dang Viet) - Full-Stack Software Engineer với ${projectCount}+ dự án thực tế và ${years} năm kinh nghiệm phát triển kiến trúc web bằng Next.js, React, Node.js.`;

  return {
    title,
    description,
    keywords: [
      "Nguyễn Đăng Việt",
      "Nguyen Dang Viet",
      "Đăng Việt",
      "Nguyen Dang Viet portfolio",
      "Nguyen Dang Viet developer",
      "Full-stack developer Da Nang",
      "Lập trình viên Nguyễn Đăng Việt",
      "Next.js Developer",
      "React Developer",
      "Node.js Developer",
      "Software Engineer Vietnam",
    ],
    authors: [
      {
        name: "Nguyễn Đăng Việt (Nguyen Dang Viet)",
        url: site.url,
      },
    ],
    creator: "Nguyễn Đăng Việt",
    publisher: "Nguyễn Đăng Việt",
    alternates: {
      canonical: site.url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: site.url,
      siteName: "Nguyễn Đăng Việt | Portfolio",
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: "Nguyễn Đăng Việt (Nguyen Dang Viet) - Full-Stack Software Engineer",
        },
      ],
      locale: site.locale,
      type: "profile",
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
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: site.alternateNames,
        jobTitle: site.role,
        url: site.url,
        image: `${site.url}/icon-512.png`,
        email: site.email,
        telephone: site.phone,
        sameAs: site.socials,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Da Nang",
          addressCountry: "VN",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Technology and Education - The University of Danang",
          alternateName: "Trường Đại học Sư phạm Kỹ thuật - Đại học Đà Nẵng",
          url: "https://ute.udn.vn/",
        },
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "MongoDB",
          "TailwindCSS",
          "Full-stack Web Development",
          "System Architecture",
        ],
        workExample: projects.map((project) => ({
          "@type": "CreativeWork",
          name: project.name,
          description: project.desc,
          url: project.demo,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Nguyen Dang Viet Portfolio",
        alternateName: "Portfolio Nguyễn Đăng Việt",
        description: site.description,
        inLanguage: ["vi", "en"],
        author: {
          "@id": `${site.url}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        isPartOf: {
          "@id": `${site.url}/#website`,
        },
        about: {
          "@id": `${site.url}/#person`,
        },
        mainEntity: {
          "@id": `${site.url}/#person`,
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      <HomePage />
    </>
  );
}
