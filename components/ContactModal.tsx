"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Eye, Mail, Phone, MapPin, Handshake } from "lucide-react";
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [showCvPreview, setShowCvPreview] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
                  <Handshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">Let&apos;s Connect</h3>
                  <p className="text-xs text-zinc-500 font-mono">Get in touch or view my resume</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zinc-500 hover:text-black dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Contact Direct Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:vietnguyen.1022005@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-zinc-500 font-mono">Email Me</span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      vietnguyen.1022005@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+84905507622"
                  className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 font-mono">Call Me</span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      (+84) 905 507 622
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Links Grid */}
              <div>
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  Social Profiles
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: "GitHub", href: "https://github.com/NguyenDangViet2005", icon: FiGithub },
                    { name: "LinkedIn", href: "https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/", icon: FiLinkedin },
                    { name: "Facebook", href: "https://www.facebook.com/dangvietdzday", icon: FiFacebook },
                    { name: "Instagram", href: "https://www.instagram.com/dangviet102/", icon: FiInstagram },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all duration-200 text-xs font-medium"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          <span>{social.name}</span>
                        </div>
                        <ExternalLink className="w-3 h-3 text-zinc-400" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CV Section (View Directly & Download) */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-white">My CV</h4>
                    <p className="text-xs text-zinc-500">NguyenDangViet_cv.pdf</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="/NguyenDangViet_cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View CV</span>
                    </a>
                    <a
                      href="/NguyenDangViet_cv.pdf"
                      download="NguyenDangViet_cv.pdf"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 text-xs font-medium transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>


              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>Da Nang City, Vietnam</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
