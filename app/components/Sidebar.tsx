"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { href: "/", label: "صفحه ۱" },
  { href: "/page2", label: "صفحه ۲" },
  { href: "/page3", label: "صفحه ۳" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile: top navbar */}
      <nav
        dir="rtl"
        className="md:hidden fixed top-0 left-0 right-0 h-14 bg-black/80 backdrop-blur-lg border-b border-white/5 flex items-center justify-center gap-3 z-50 font-nastaliq px-3"
      >
        {pages.map((page) => {
          const isActive = pathname === page.href;
          return (
            <Link
              key={page.href}
              href={page.href}
              className={`px-4 py-1.5 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-rose-600/15 text-rose-300 border border-rose-500/25"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              {page.label}
            </Link>
          );
        })}
      </nav>

      {/* Desktop: left sidebar */}
      <aside
        dir="rtl"
        className="hidden md:flex fixed top-0 left-0 h-full w-28 bg-black/60 backdrop-blur-xl border-r border-white/5 flex-col items-center py-10 gap-5 z-50 font-nastaliq"
      >
        <div className="text-xs text-zinc-600 font-semibold tracking-[0.2em] mb-2">
          صفحات
        </div>
        {pages.map((page) => {
          const isActive = pathname === page.href;
          return (
            <Link
              key={page.href}
              href={page.href}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-rose-600/15 text-rose-300 border border-rose-500/25 shadow-lg shadow-rose-900/10"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40 border border-transparent"
              }`}
            >
              {page.label}
            </Link>
          );
        })}
      </aside>
    </>
  );
}
