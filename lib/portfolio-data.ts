import { cache } from "react";

import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { stats } from "@/data/stats";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.nguyendangviet.me";
const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const getSiteConfig = cache(() => ({
  url: siteUrl,
  name: "Nguyen Dang Viet",
  alternateNames: ["Nguyễn Đăng Việt", "Đăng Việt", "Viet Nguyen"],
  title: "Nguyen Dang Viet (Nguyễn Đăng Việt) | Full-Stack Software Engineer",
  description:
    "Portfolio của Nguyễn Đăng Việt (Nguyen Dang Viet) - Full-Stack Developer chuyên xây dựng ứng dụng web hiện đại với Next.js, React, Node.js và hệ thống kiến trúc tối ưu.",
  ogImage: `${siteUrl}/og-image.png`,
  locale: "vi_VN",
  role: "Full-Stack Software Engineer",
  email: "vietnguyen.1022005@gmail.com",
  phone: "+84905507622",
  socials: [
    "https://github.com/NguyenDangViet2005",
    "https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/",
    "https://www.facebook.com/dangvietdzday",
    "https://www.instagram.com/dangviet102/",
  ],
}));

export const getProjects = cache(() => projects);
export const getExperiences = cache(() => experiences);
export const getStats = cache(() => stats);
