"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/site/nav";
import { siteConfig } from "@/site/config";
import { IconClose, IconMenu } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-end gap-4 px-4 pt-6 md:justify-between md:pt-8">
        <nav
          className="hidden items-center gap-8 text-[15px] font-medium tracking-wide md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "border-b border-white pb-0.5"
                    : "border-b border-transparent pb-0.5 hover:border-white/70"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneTel}
            className="hidden rounded border border-white/40 px-4 py-2 text-[15px] font-medium hover:bg-white/10 md:inline-block"
          >
            {siteConfig.phoneDisplay}
          </a>
          <button
            type="button"
            className="rounded border border-white/40 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/20 bg-black/80 px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3 text-[15px] font-medium" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={siteConfig.phoneTel} className="py-1">
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
