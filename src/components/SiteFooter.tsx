import Link from "next/link";
import { navItems } from "@/site/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-center">
        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#54595F]"
          aria-label="Footer"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#7A7A7A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
