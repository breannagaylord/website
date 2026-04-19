import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/site/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — Breanna Gaylord Design. Location in San Diego, CA.",
};

const team = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
] as const;

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="contact us"
        imageSrc="/images/contact-hero-bar.jpg"
        imagePosition="bottom center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-xl font-medium text-[var(--heading)]">
              You can find us at
            </h2>
            <div className="mt-8 space-y-8 text-[15px]">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--heading)]">
                  Email
                </h3>
                <p className="mt-2">
                  <a
                    href={siteConfig.emailHref}
                    className="text-[var(--foreground)] underline-offset-2 hover:underline"
                  >
                    {siteConfig.emailDisplay}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--heading)]">
                  Phone number
                </h3>
                <p className="mt-2 text-[var(--foreground)]">
                  <a href={siteConfig.contactPhoneTel}>
                    {siteConfig.contactPhoneDisplay}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--heading)]">
                  Location
                </h3>
                <p className="mt-2 text-[var(--foreground)]">
                  {siteConfig.addressLines.join(", ")}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium text-[var(--heading)]">
              Let&apos;s get in touch
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4 text-center">
          <h2 className="text-xl font-medium text-[var(--heading)] md:text-2xl">
            We are optimists who love to work together
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
            {team.map((src) => (
              <div
                key={src}
                className="relative h-[140px] w-[140px] overflow-hidden rounded-sm sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 140px, 280px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
