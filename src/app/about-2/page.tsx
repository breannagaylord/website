import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = {
  title: "About",
  description:
    "We’re a highly collaborative and supportive team, coming together on every project to ensure our clients get the very best result.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero title="about us" imageSrc="/images/about-header.jpg" imagePosition="bottom center" />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <p className="mx-auto max-w-3xl text-center text-xl font-normal leading-relaxed text-[var(--heading)] md:text-2xl">
          We’re a highly collaborative and supportive team, coming together on
          every project to ensure our clients get the very best result.
        </p>
        <div className="relative mx-auto mt-10 aspect-[1170/600] w-full max-w-[1170px] overflow-hidden">
          <Image
            src="/images/contact-hero.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1140px) 100vw, 1140px"
            priority
          />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          <article className="text-center md:text-left">
            <h3 className="text-xl font-medium text-[var(--heading)]">
              Our Mission
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed">
              Build the best product that creates the most value for our
              customers, use business to inspire and implement environmentally
              friendly solutions.
            </p>
          </article>
          <article className="text-center md:text-left">
            <h3 className="text-xl font-medium text-[var(--heading)]">
              Our Values
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed">
              We strive to go above and beyond for our clients no matter the
              challenge. We aim to deliver our very best work every single day
              across our services.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto flex max-w-[800px] flex-col items-center px-4 text-center">
          <Image
            src="/images/quotes.svg"
            alt=""
            width={64}
            height={64}
            className="opacity-80"
          />
          <p className="mt-8 text-xl font-normal leading-relaxed text-[var(--heading)] md:text-2xl">
            “Love Nature has an amazing team of hard working professionals. It
            has been a pleasure to meet them.”
          </p>
          <Image
            src="/images/avatar-about.png"
            alt=""
            width={128}
            height={128}
            className="mt-8 rounded-full object-cover"
          />
          <p className="mt-4 text-[15px] font-medium text-[var(--heading)]">
            Emily Davis
          </p>
        </div>
      </section>
    </div>
  );
}
