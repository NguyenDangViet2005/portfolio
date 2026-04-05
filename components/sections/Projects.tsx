"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  { 
    name: "IT-JOB", 
    category: "RECRUITMENT PLATFORM",
    desc: "IT recruitment website with smart search and application management system",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TailwindCSS"],
    image: "/projects/itjob.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://itjob-demo.vercel.app"
  },
  { 
    name: "SmartPOS", 
    category: "RETAIL SYSTEM",
    desc: "Cloud-based point-of-sale system with real-time inventory management",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    image: "/projects/smartpos.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://smartpos-demo.vercel.app"
  },
  { 
    name: "Trello Clone", 
    category: "PROJECT MANAGEMENT",
    desc: "Task management app with drag & drop and real-time collaboration",
    tech: ["Next.js", "Node.js", "MySQL", "DnD Kit"],
    image: "/projects/trello.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://trello-clone-demo.vercel.app"
  },
  { 
    name: "E-Commerce Platform", 
    category: "ONLINE STORE",
    desc: "Full-stack e-commerce with payment gateway and admin dashboard",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://ecommerce-demo.vercel.app"
  },
  { 
    name: "Social Media Dashboard", 
    category: "ANALYTICS TOOL",
    desc: "Unified dashboard for managing multiple social media accounts",
    tech: ["React", "Express", "MongoDB", "Chart.js"],
    image: "/projects/social.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://social-dashboard-demo.vercel.app"
  },
  { 
    name: "Learning Management System", 
    category: "EDUCATION PLATFORM",
    desc: "Online education platform with course management and video streaming",
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS S3"],
    image: "/projects/lms.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://lms-demo.vercel.app"
  },
  { 
    name: "Real Estate Portal", 
    category: "PROPERTY LISTING",
    desc: "Modern real estate platform with advanced search and virtual tours",
    tech: ["Next.js", "Express", "MongoDB", "Mapbox"],
    image: "/projects/realestate.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://realestate-demo.vercel.app"
  },
  { 
    name: "Healthcare Booking", 
    category: "MEDICAL SYSTEM",
    desc: "Medical appointment scheduling with telemedicine integration",
    tech: ["React", "NestJS", "PostgreSQL", "WebRTC"],
    image: "/projects/healthcare.jpg",
    github: "https://github.com/NguyenDangViet2005",
    demo: "https://healthcare-demo.vercel.app"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Sparkles className="text-indigo-400" />
          Featured Projects
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Real-world projects I've built — from requirements analysis, architecture design, to deployment and maintenance.
        </p>
      </motion.div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {projects.map((project, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative h-[280px] overflow-hidden cursor-pointer"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-zinc-900/60">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              {/* Top Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-indigo-300 tracking-wider">
                    {project.category}
                  </span>
                  <ExternalLink className="w-3 h-3 text-indigo-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-md">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Section - Tech Stack & Links */}
              <div className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - Show on hover */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-sm text-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 backdrop-blur-md rounded-lg text-sm text-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20  p-8 text-center"
      >
        <p className="text-zinc-400 mb-4">
          And many more projects in development... 🚀
        </p>
        <a 
          href="https://github.com/NguyenDangViet2005" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
        >
          <SiGithub className="w-5 h-5" />
          View All on GitHub
        </a>
      </motion.div>
    </div>
  );
}

