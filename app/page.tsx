"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Overview from "@/components/sections/Overview";
import Projects from "@/components/sections/Projects";
import Playground from "@/components/sections/Playground";
import Story from "@/components/sections/Story";
import Contact from "@/components/sections/Contact";

export default function SinglePagePortfolio() {
  const scrollToDashboard = () => {
    const dashboardElement = document.getElementById("dashboard-layout");
    if (dashboardElement) {
      dashboardElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-indigo-500/30 font-sans">
      
      {/* 1. Welcome Section (100vh) */}
      <main className="flex h-screen items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 z-10 p-6"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40"></div>
            <div className="relative h-28 w-28 mx-auto rounded-full border-4 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-500 font-medium tracking-wider">NDV</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
            Nguyễn Đăng Việt
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto font-light">
            Fullstack Developer. I build real-world systems, not just interfaces.
          </p>
          
          <motion.button
            onClick={scrollToDashboard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ y: 5 }}
            className="mt-16 flex flex-col items-center gap-2 mx-auto text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-sm font-medium tracking-widest uppercase">Scroll to explore</span>
            <motion.div
               animate={{ y: [0, 8, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
            >
               <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </main>

      {/* 2. Dashboard Layout (Below Welcome Section) */}
      <div id="dashboard-layout" className="flex bg-zinc-950 text-white min-h-screen">
        <Sidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          <TopNav />
          
          <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full">
            <section id="overview" className="min-h-screen pt-24 -mt-24 pb-32">
              <Overview />
            </section>
            
            <section id="projects" className="min-h-screen pt-24 -mt-24 pb-32">
              <Projects />
            </section>
            
            <section id="playground" className="min-h-screen pt-24 -mt-24 pb-32">
              <Playground />
            </section>
            
            <section id="story" className="min-h-screen pt-24 -mt-24 pb-32">
              <Story />
            </section>
            
            <section id="contact" className="min-h-[80vh] pt-24 -mt-24 pb-32">
              <Contact />
            </section>
          </main>
        </div>
      </div>

    </div>
  );
}
