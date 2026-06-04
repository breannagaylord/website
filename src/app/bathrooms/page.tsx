import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bathrooms",
  description: "Bathroom design portfolio by Breanna Gaylord — spa-like retreats, powder rooms, and master baths.",
};

const bathroomImages = [
  { src: "/images/hero/breanna-8.jpg", alt: "Bathroom design", w: 600, h: 400 },
  { src: "/images/hero/breanna-9.jpg", alt: "Bathroom vanity", w: 600, h: 400 },
] as const;

export default function BathroomsPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="bathrooms"
        imageSrc="/images/hero/breanna-8.jpg"
        imagePosition="center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[var(--heading)] md:text-xl">
          Bathrooms should feel like a retreat. Here are some of my favorite 
          bathroom transformations and designs.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {bathroomImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[3/2] w-full overflow-hidden rounded shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className="h-full w-full object-cover transition hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
