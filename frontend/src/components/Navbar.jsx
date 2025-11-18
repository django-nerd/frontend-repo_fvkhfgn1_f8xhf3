import { Menu, BookOpen, Lightbulb, Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-sky-950/40 bg-sky-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-sky-300 to-blue-500 shadow-inner shadow-white/30" />
          <span className="text-sky-50 font-semibold text-lg tracking-wide">BlueChess</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sky-100/90">
          <a href="#home" className="flex items-center gap-2 hover:text-white transition-colors"><Home size={18}/> Home</a>
          <a href="#openings" className="flex items-center gap-2 hover:text-white transition-colors"><BookOpen size={18}/> Openings</a>
          <a href="#tactics" className="flex items-center gap-2 hover:text-white transition-colors"><Lightbulb size={18}/> Tactics</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-white/10 text-sky-50" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}
