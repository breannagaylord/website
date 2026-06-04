import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Shop My Favorite Things",
  description: "Products Breanna Gaylord loves and recommends for home decor, design, and everyday life.",
};

const categories = [
  {
    title: "Home Decor",
    items: "Coming soon — curated picks for every room.",
  },
  {
    title: "Kitchen",
    items: "Coming soon — tools, gadgets, and styling pieces.",
  },
  {
    title: "Organization",
    items: "Coming soon — storage solutions that actually work.",
  },
  {
    title: "Gifts",
    items: "Coming soon — favorite finds for every occasion.",
  },
] as const;

export default function ShopPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="shop my favorite things"
        imageSrc="/images/service-3.jpg"
        imagePosition="center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[var(--heading)] md:text-xl">
          A curated collection of products I use and love — for your home, 
          your kitchen, and your everyday life.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-lg border border-neutral-200 p-6 text-center"
            >
              <h3 className="text-lg font-medium text-[var(--heading)]">
                {cat.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed">{cat.items}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
