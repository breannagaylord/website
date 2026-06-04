import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kitchens",
  description: "Kitchen design portfolio by Breanna Gaylord — renovations, new builds, and remodels.",
};

const kitchenImages = [
  { src: "/images/hero/kitchen-17.jpg", alt: "White kitchen with island", w: 600, h: 400 },
  { src: "/images/hero/kitchen-16.jpg", alt: "Modern kitchen design", w: 600, h: 400 },
] as const;

export default function KitchensPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="kitchens"
        imageSrc="/images/hero/kitchen-17.jpg"
        imagePosition="center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[var(--heading)] md:text-xl">
          Kitchen design is where function meets the heart of the home. 
          Browse a selection of kitchen projects below.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {kitchenImages.map((img) => (
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
