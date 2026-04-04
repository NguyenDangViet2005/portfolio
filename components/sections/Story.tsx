export default function Story() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight text-white">My Story</h1>
      <p className="text-zinc-400 max-w-2xl text-lg">
        The journey from a student to a professional Fullstack Developer.
      </p>
      <div className="border-l-2 border-zinc-800 ml-4 pl-8 space-y-8 py-4 relative">
         <div className="relative">
            <div className="absolute w-4 h-4 rounded-full bg-indigo-500 -left-[41px] top-1 border-4 border-zinc-950"></div>
            <h3 className="text-xl font-bold">10/2025 – Present</h3>
            <p className="text-zinc-400 mt-2">Freelance Web Developer. Delivered end-to-end outsourced projects, managing full lifecycle from requirements to deployment.</p>
         </div>
         <div className="relative">
            <div className="absolute w-4 h-4 rounded-full bg-zinc-700 -left-[41px] top-1 border-4 border-zinc-950"></div>
            <h3 className="text-xl font-bold opacity-70">2023 – 2025</h3>
            <p className="text-zinc-500 mt-2">University of Technology and Education. Maintained a 3.9/4.0 GPA.</p>
         </div>
      </div>
    </div>
  );
}
