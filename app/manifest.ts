import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nguyen Dang Viet (Nguyễn Đăng Việt) | Portfolio",
    short_name: "Nguyen Dang Viet",
    description:
      "Full-stack portfolio của Nguyễn Đăng Việt (Nguyen Dang Viet) - Kỹ sư phần mềm chuyên về Next.js, React, Node.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
