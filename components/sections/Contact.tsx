export default function Contact() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight text-white">Contact</h1>
      <p className="text-zinc-400 max-w-2xl text-lg">
        Reach out to me for opportunities or collaborations.
      </p>
      <form className="max-w-md space-y-4">
         <input type="text" placeholder="Your Name" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 transition-colors" />
         <input type="email" placeholder="Your Email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 transition-colors" />
         <textarea placeholder="Message..." rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 transition-colors"></textarea>
         <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors">Send Message</button>
      </form>
    </div>
  );
}
