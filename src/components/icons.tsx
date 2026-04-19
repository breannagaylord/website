import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

/** Matches “award / badge” intent from the original Elementor icon boxes. */
export function IconAward(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </IconBase>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
    </IconBase>
  );
}

export function IconRefresh(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M21 21v-5h-5" />
    </IconBase>
  );
}

export function IconLifeRing(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </IconBase>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </IconBase>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M18 6L6 18M6 6l12 12" />
    </IconBase>
  );
}
