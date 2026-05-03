import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porfolio | Nguyễn Đăng Việt",
  description:
    "Prisma is a creative studio collective for visionary filmmakers, artists, and storytellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-black text-[#E1E0CC]">
        {children}
      </body>
    </html>
  );
}
