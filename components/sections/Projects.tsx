"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, User, Users } from "lucide-react";
import Image from "next/image";

const projects = [
  { 
    name: "IT-JOB", 
    category: "RECRUITMENT PLATFORM",
    desc: "IT recruitment website with smart search and application management system",
    tech: ["Next.js", "ExpressJs", "PostgreSQL", "TailwindCSS"],
    image: "/projects/itjob.png",
    demo: "https://it-job-ndv.vercel.app/",
    type: "Personal Project"
  },
  { 
    name: "SmartPOS", 
    category: "RETAIL SYSTEM",
    desc: "Cloud-based point-of-sale system with real-time inventory management",
    tech: ["Next.js", "ExpressJs", "MongoDB", "Socket.io"],
    image: "/projects/smartpos.png",
    demo: "https://smart-pos-roan.vercel.app/",
    type: "Personal Project"
  },
  { 
    name: "Trello Clone", 
    category: "PROJECT MANAGEMENT",
    desc: "Task management app with drag & drop and real-time collaboration",
    tech: ["React", "ExpressJs", "MongoDB", "DnD Kit"],
    image: "/projects/trello.png",
    demo: "https://trello-web-ivory.vercel.app/",
    type: "Personal Project"
  },
  { 
    name: "ShopACVN", 
    category: "GAME ACCOUNT SHOP",
    desc: "A professional marketplace for Arena of Valor (AOV) game accounts with secure transactions.",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    image: "/projects/shopaccvn.png",
    demo: "https://shopacvn.com/",
    type: "Team Project"
  },
  { 
    name: "Movie Tickets", 
    category: "FRONTEND UI",
    desc: "Modern frontend interface for booking movie, music, and concert tickets with seamless user flow.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/movieticket.png",
    demo: "https://movietickets-hvlt.vercel.app/",
    type: "Team Project"
  },
  { 
    name: "Best Game Account", 
    category: "GAME ACCOUNT SHOP",
    desc: "A featured e-commerce platform dedicated to high-quality game account trading.",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    image: "/projects/bestgameaccount.png",
    demo: "https://www.palyio.com/en",
    type: "Team Project"
  },    
  { 
    name: "Star Systemsable", 
    category: "MANAGEMENT SYSTEM",
    desc: "A gamified child management system using task creation and star rewards to encourage positive behavior.",
    tech: ["Next.js", "ExpressJs", "MongoDB", "Mapbox"],
    image: "/projects/startracker.png",
    demo: "https://star.systemsable.app/en",
    type: "Team Project"
  }
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
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {projects.map((project, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative h-[320px] overflow-hidden rounded-md border border-zinc-800 cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <Image 
                src={project.image} 
                alt={project.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
               />
               {/* Dark Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20 z-10" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
              {/* Top Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-400 tracking-wider uppercase px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 bg-black/40 px-2 py-1 rounded-sm text-[10px] backdrop-blur-sm border border-white/5">
                    {project.type === "Personal Project" ? <User size={10} /> : <Users size={10} />}
                    {project.type}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-900 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-300 text-xs leading-relaxed max-w-md line-clamp-2">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] px-2 py-0.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Demo Button */}
                <div className="h-10">
                   <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-xs font-semibold transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-indigo-500/5 border border-indigo-500/10  p-8 text-center rounded-md"
      >
        <p className="text-zinc-400 text-sm mb-4">
          And many more projects in development... 
        </p>
        <div className="flex justify-center">
            <div className="h-10 w-40 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-zinc-500 text-xs italic">
                More projects coming soon
            </div>
        </div>
      </motion.div>
    </div>
  );
}
