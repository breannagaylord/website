import Image from "next/image";
import type { Metadata } from "next";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { siteConfig } from "@/site/config";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

const menuCards = [
  {
    title: "Client Projects",
    body: "client projects past, present, and future",
    image: "/images/service-1.jpg",
    width: 370,
    height: 500,
  },
  {
    title: "Gaylord Home",
    body: "my own home design and projects",
    image: "/images/service-2.jpg",
    width: 370,
    height: 500,
  },
  {
    title: "Products for Projects",
    body: "products that I love and recommend for home decor and life",
    image: "/images/service-3.jpg",
    width: 370,
    height: 500,
  },
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <h2 className="text-center font-sans text-3xl font-normal text-[var(--heading)] md:text-4xl">
            Menu
          </h2>
          <div
            className="mx-auto mt-4 h-px max-w-xs bg-neutral-300"
            aria-hidden
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {menuCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col items-center text-center"
              >
                <div className="relative aspect-[37/50] w-full max-w-[370px] overflow-hidden shadow-sm">
                  <Image
                    src={card.image}
                    alt=""
                    width={card.width}
                    height={card.height}
                    className="h-full w-full object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-6 font-sans text-xl font-medium text-[var(--heading)]">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--foreground)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
