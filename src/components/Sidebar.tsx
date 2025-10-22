import { HelpCircle, MessageCircle } from "lucide-react";

export function Sidebar() {
  const navItems = Array(8).fill(null);

  return (
    <aside className="w-[200px] bg-[#265e99] min-h-screen sticky top-0 flex flex-col">
      <div className="px-4 pt-6 pb-8">
        <img src="/cg-logo.svg" alt="CG-Logo" className="w-full h-full" />
      </div>

      <nav className="flex-1 px-3 space-y-3">
        {navItems.map((_, i) => (
          <div
            key={i}
            className="h-10 bg-[#6B8EAF] rounded-full hover:bg-[#7A9DBF] transition-colors cursor-pointer"
          />
        ))}
      </nav>

      <div className="px-3 pb-4 space-y-2">
        <button className="w-full flex items-center gap-2 text-white text-xs py-2 px-3 rounded-full hover:bg-[#5A7B9F] transition-colors">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-[#426B8F]" />
          </div>
          <span className="text-sm">Help</span>
        </button>
        <button className="w-full flex items-center gap-2 text-white text-xs py-2 px-3 rounded-full hover:bg-[#5A7B9F] transition-colors">
          <div className="relative w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-[#426B8F]" fill="#426B8F" />
          </div>
          <span className="text-sm">Contact Us</span>
        </button>
      </div>
    </aside>
  );
}
