export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/design", label: "Design" },
  { href: "/kitchens", label: "Kitchens" },
  { href: "/bathrooms", label: "Bathrooms" },
  { href: "/shop", label: "Shop My Favorite Things" },
  { href: "/baking", label: "Baking with Breanna" },
  { href: "/home-tour", label: "Gilbert Home Tour" },
  { href: "/subscribe", label: "Subscribe" },
] as const;

export type NavItem = (typeof navItems)[number];
