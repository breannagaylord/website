import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Baking with Breanna",
  description: "Recipes, baking tips, and kitchen adventures from Breanna Gaylord.",
};

export default function BakingPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="baking with breanna"
        imageSrc="/images/hero/breanna-14.jpg"
        imagePosition="center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-[var(--heading)] md:text-xl">
            Recipes, kitchen experiments, and all things baking — 
            coming soon!
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            In the meantime, follow along on Instagram{" "}
            <a
              href="https://www.instagram.com/breannagaylorddesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--heading)]"
            >
              @breannagaylorddesign
            </a>{" "}
            for behind-the-scenes kitchen content.
          </p>
        </div>
      </section>
    </div>
  );
}
