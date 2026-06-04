import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "About",
  description:
    "Breanna Gaylord — interior designer based in Gilbert, AZ. Creating unique and functional homes.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="about breanna"
        imageSrc="/images/about-header.jpg"
        imagePosition="bottom center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_300px] md:gap-12">
          <div>
            <p className="text-lg leading-relaxed text-[var(--heading)] md:text-xl">
              Hi, I&apos;m Breanna — an interior designer based in Gilbert, Arizona. 
              I believe every home should feel intentional, warm, and uniquely yours. 
              Whether it&apos;s a full kitchen renovation, a bathroom refresh, or 
              styling a space from the ground up, I help clients bring their vision to life.
            </p>
            <p className="mt-6 text-[15px] leading-relaxed">
              My approach blends function with personality — designing spaces that 
              work for real life while reflecting the people who live in them. 
              I share my own home projects, favorite products, and design 
              inspiration here on the blog.
            </p>
          </div>
          <aside className="space-y-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--heading)]">
                Contact
              </h3>
              <div className="mt-3 space-y-2 text-[15px]">
                <p>
                  <a
                    href="tel:+14805101308"
                    className="hover:underline"
                  >
                    480-510-1308
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:breanna.gaylord@classycompanies.com"
                    className="hover:underline"
                  >
                    breanna.gaylord@classycompanies.com
                  </a>
                </p>
                <p>Gilbert, AZ</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--heading)]">
                Follow Along
              </h3>
              <div className="mt-3">
                <a
                  href="https://www.instagram.com/breannagaylorddesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] hover:underline"
                >
                  @breannagaylorddesign
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
