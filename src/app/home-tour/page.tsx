import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gilbert Home Tour",
  description: "Take a tour of Breanna Gaylord's home in Gilbert, Arizona — room by room design and decor.",
};

const rooms = [
  { src: "/images/hero/hamblin.jpg", alt: "Living space", w: 600, h: 400 },
  { src: "/images/hero/breanna-9.jpg", alt: "Bathroom", w: 600, h: 400 },
  { src: "/images/hero/breanna-8.jpg", alt: "Bedroom", w: 600, h: 400 },
] as const;

export default function HomeTourPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="gilbert home tour"
        imageSrc="/images/hero/hamblin.jpg"
        imagePosition="center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[var(--heading)] md:text-xl">
          Welcome to our Gilbert home! Take a peek inside — room by room, 
          project by project — as we make this house our own.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.src}
              className="relative aspect-[3/2] w-full overflow-hidden rounded shadow-sm"
            >
              <Image
                src={room.src}
                alt={room.alt}
                width={room.w}
                height={room.h}
                className="h-full w-full object-cover transition hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
