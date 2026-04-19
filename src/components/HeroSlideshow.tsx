"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/images/hero/kitchen-17.jpg",
  "/images/hero/breanna-8.jpg",
  "/images/hero/breanna-9.jpg",
  "/images/hero/breanna-14.jpg",
  "/images/hero/kitchen-16.jpg",
  "/images/hero/hamblin.jpg",
] as const;

export function HeroSlideshow({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[655px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-[1] bg-black/30" aria-hidden />
      <div className="relative z-[2] flex min-h-[655px] flex-col items-center justify-center px-4 pb-16 pt-28 text-center text-white md:pt-36">
        {children}
      </div>
    </section>
  );
}
