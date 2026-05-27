import { cache } from "react";

import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { stats } from "@/data/stats";
import { passions, timeline } from "@/data/story";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const getSiteConfig = cache(() => ({
  url: siteUrl,
  name: "Nguyen Dang Viet",
  title: "Nguyen Dang Viet Portfolio | Full-stack web developer",
  description:
    "Full-stack portfolio showcasing Next.js, React, and scalable web apps with real projects, case studies, and contact details.",
  ogImage: `${siteUrl}/ndv.png`,
  locale: "en_US",
  role: "Full-stack Developer",
}));

export const getProjects = cache(() => projects);
export const getExperiences = cache(() => experiences);
export const getStats = cache(() => stats);
export const getStory = cache(() => ({ timeline, passions }));
