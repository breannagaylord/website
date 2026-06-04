import { SocialLinks } from "@/components/SocialLinks";
import { navItems } from "@/site/nav";
import { siteConfig } from "@/site/config";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] py-10 text-white md:py-12">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-medium md:justify-start">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <SocialLinks />
        </div>
        <div className="mt-8 border-t border-white/15 pt-6 text-center text-[13px] text-white/50 md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.title}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
