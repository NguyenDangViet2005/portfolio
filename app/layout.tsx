import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CinematicCursor from "@/components/CinematicCursor";
import CinematicOverlay from "@/components/CinematicOverlay";
import { getSiteConfig } from "@/lib/portfolio-data";

const siteConfig = getSiteConfig();
const siteUrl = siteConfig.url;

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Nguyen Dang Viet",
    default: "Nguyen Dang Viet (Nguyễn Đăng Việt) | Full-Stack Software Engineer",
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased scroll-smooth dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--bg-color)] text-[var(--text-main)] selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-black overflow-x-hidden transition-colors duration-200">
        <ThemeProvider>
          <SmoothScrollProvider>
            <CinematicOverlay />
            <CinematicCursor />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}



