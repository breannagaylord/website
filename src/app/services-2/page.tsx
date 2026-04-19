import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  IconAward,
  IconLifeRing,
  IconRefresh,
  IconStar,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web Design, Graphic Design, and Content Creation — template services from the original Breanna Gaylord Design site.",
};

const serviceCopy = {
  intro: [
    "Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.",
    "What is the biggest benefit your customer will get from this? Keep your target audience in mind.",
  ],
  why: [
    "Your customers just learned what services you offer. Tell them why they should work with you or your team, for example you could highlight your experience and positive client reviews.",
    "The badges illustrate this.  We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.",
  ],
};

const services = [
  {
    title: "Web Design",
    image: "/images/service-1.jpg",
    reverse: false,
  },
  {
    title: "Graphic Design",
    image: "/images/service-2.jpg",
    reverse: true,
  },
  {
    title: "Content Creation",
    image: "/images/service-3.jpg",
    reverse: false,
  },
] as const;

const badges = [
  { icon: IconAward, label: "8 Years Experience" },
  { icon: IconStar, label: "5 Star Rating" },
  { icon: IconRefresh, label: "Quick Turnaround" },
  { icon: IconLifeRing, label: "Dedicated Support" },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="our services"
        imageSrc="/images/services-hero.jpg"
        imagePosition="center"
      />

      <div className="mx-auto max-w-[1140px] space-y-16 px-4 py-12 md:py-16">
        {services.map((s) => (
          <section
            key={s.title}
            className={`flex flex-col gap-8 md:flex-row md:items-start ${
              s.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative aspect-[37/50] w-full max-w-[370px] shrink-0 overflow-hidden shadow-sm md:mx-0">
              <Image
                src={s.image}
                alt=""
                width={370}
                height={500}
                className="h-full w-full object-cover"
                sizes="(max-width:768px) 100vw, 370px"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <h3 className="text-2xl font-medium text-[var(--heading)]">
                {s.title}
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed">
                {serviceCopy.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-2xl font-medium text-[var(--heading)]">
                From $99
              </p>
              <div className="mt-6">
                <Link
                  href="/contact-2"
                  className="inline-block rounded border border-[var(--heading)] px-5 py-2 text-sm font-medium text-[var(--heading)] transition hover:bg-[var(--heading)] hover:text-white"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-neutral-200 bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <h2 className="text-center text-2xl font-medium text-[var(--heading)]">
            Why Love Nature
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-6 text-center text-[15px] leading-relaxed">
            {serviceCopy.why.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center text-[var(--heading)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9FCE00]/25 text-[var(--heading)]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
