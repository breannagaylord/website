export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-2", label: "About" },
  { href: "/services-2", label: "Services" },
  { href: "/contact-2", label: "Contact" },
] as const;

export type NavItem = (typeof navItems)[number];
