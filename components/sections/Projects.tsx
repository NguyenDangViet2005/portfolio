export default function Projects() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight text-white">Projects</h1>
      <p className="text-zinc-400 max-w-2xl text-lg">
        A collection of my real-world systems, including IT-JOB, SmartPOS, and more.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "IT-JOB", desc: "A website for recruiting IT jobs with smart search and applications." },
          { name: "SmartPOS", desc: "Cloud-based point-of-sale platform to streamline retail operations." },
          { name: "Trello(clone)", desc: "A board UI allowing users to reorder columns and move tasks." }
        ].map((item, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
