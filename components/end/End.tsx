"use client";

import { FiMail, FiGithub, FiLinkedin, FiFacebook, FiInstagram, FiPhone, FiDownload } from "react-icons/fi";
import ShinyText from "@/components/ShinyText";

export default function Contact() {
  return (
    <section id="inquiries" className="bg-[#0f0e0c]/60 px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-sunset-300/20 bg-gradient-to-br from-sky-dark/50 to-sky-storm/40 backdrop-blur-sm px-6 py-12 sm:px-10 sm:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em]">Inquiries</p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium">
              <ShinyText>Let's build your next product system</ShinyText>
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl">
              Available for freelance builds, system architecture roles, and long-term collaborations.
            </p>
          </div>
          <div className="space-y-3 text-sm sm:text-base flex flex-col items-start">
            <a
              className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors"
              href="mailto:vietnguyen.1022005@gmail.com"
            >
              <FiMail className="h-4 w-4" /> vietnguyen.1022005@gmail.com
            </a>
            <a
              className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors"
              href="tel:+84905507622"
            >
              <FiPhone className="h-4 w-4" /> (+84) 905 507 622
            </a>
            <a
              className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors"
              href="https://github.com/NguyenDangViet2005"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="h-4 w-4" /> github.com/NguyenDangViet2005
            </a>
            <a
              className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="h-4 w-4" /> linkedin.com/in/dang-viet-82a881292
            </a>
            
            <div className="flex items-center gap-4 pt-1 pb-1">
              <a
                className="text-primary/70 hover:text-primary transition-colors"
                href="https://www.facebook.com/dangvietdzday"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <FiFacebook className="h-4 w-4" />
              </a>
              <a
                className="text-primary/70 hover:text-primary transition-colors"
                href="https://www.instagram.com/dangviet102/"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-2">
              <a 
                href="/cv.pdf"
                download="NguyenDangViet_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 font-medium rounded-full hover:bg-primary/20 transition-colors text-sm"
              >
                <FiDownload className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
