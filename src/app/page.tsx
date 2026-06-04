import Image from "next/image";
import type { Metadata } from "next";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { siteConfig } from "@/site/config";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

const featuredPosts = [
  {
    title: "Kitchen Renovation Reveal",
    date: "May 2026",
    image: "/images/hero/kitchen-17.jpg",
    snippet:
      "After months of planning and construction, our kitchen is finally done. Here's a look at every detail — from cabinet pulls to countertops.",
  },
  {
    title: "Spring Home Refresh",
    date: "April 2026",
    image: "/images/hero/breanna-14.jpg",
    snippet:
      "Simple updates that made a big impact this spring — new pillows, fresh greenery, and a few DIY projects I'm excited to share.",
  },
  {
    title: "Gilbert Home: The Primary Bath",
    date: "March 2026",
    image: "/images/hero/breanna-8.jpg",
    snippet:
      "The primary bathroom transformation is complete. See how we turned a builder-grade space into a spa-like retreat.",
  },
] as const;

const blogGallery = [
  "/images/hero/kitchen-17.jpg",
  "/images/hero/breanna-14.jpg",
  "/images/hero/breanna-8.jpg",
  "/images/hero/breanna-9.jpg",
  "/images/hero/kitchen-16.jpg",
  "/images/hero/hamblin.jpg",
] as const;

export default function HomePage() {
  return (
    <>
      <HeroSlideshow>
        <h1 className="font-hero text-5xl font-normal leading-none tracking-tight text-white drop-shadow sm:text-6xl md:text-[96px]">
          Breanna Gaylord
        </h1>
        <h2 className="font-script mt-4 text-4xl font-normal leading-tight text-white drop-shadow md:mt-5 md:text-6xl md:leading-none">
          design &amp; create
        </h2>
        <p className="font-script mt-6 max-w-xl text-xl text-white/95 drop-shadow md:text-2xl">
          designing unique and functional homes + my own home
        </p>
      </HeroSlideshow>

      {/* Most Recent Blog Post */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <h2 className="text-center font-sans text-3xl font-normal text-[var(--heading)] md:text-4xl">
            Latest from the Blog
          </h2>
          <div
            className="mx-auto mt-4 h-px max-w-xs bg-neutral-300"
            aria-hidden
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col overflow-hidden rounded shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-[var(--heading)]">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed">
                    {post.snippet}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Blog Pictures */}
      <section className="bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <h2 className="text-center font-sans text-3xl font-normal text-[var(--heading)] md:text-4xl">
            From the Blog
          </h2>
          <div
            className="mx-auto mt-4 h-px max-w-xs bg-neutral-300"
            aria-hidden
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            {blogGallery.map((src) => (
              <div
                key={src}
                className="relative aspect-square w-full overflow-hidden rounded shadow-sm"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
