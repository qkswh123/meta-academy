"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg transition-shadow ${
        scrolled ? "border-b border-line shadow-[0_1px_0_0_rgba(6,58,91,0.05)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Logo size={38} />

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[0.92rem] transition-colors ${
                  active ? "text-navy-deep font-medium" : "text-ink-soft hover:text-navy-deep"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-sm bg-navy-deep px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            상담 문의
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-navy-deep transition-transform ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span className={`h-px w-6 bg-navy-deep transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-navy-deep transition-transform ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 origin-top overflow-y-auto border-t border-line bg-bg px-6 py-8 transition-all duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-3.5 text-base text-ink border-b border-line last:border-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="mt-6 flex w-full items-center justify-center rounded-sm bg-navy-deep px-5 py-3.5 text-sm font-medium text-white"
        >
          상담 문의
        </Link>
      </div>
    </header>
  );
}
