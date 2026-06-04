import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DesignInquiryForm } from "@/components/DesignInquiryForm";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Work with Breanna Gaylord on your interior design project. Inquire about full-service design, kitchen & bath renovations, and styling.",
};

export default function DesignPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="design services"
        imageSrc="/images/services-hero.jpg"
        imagePosition="center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-xl font-medium text-[var(--heading)]">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed">
              Whether you&apos;re planning a full-scale renovation, refreshing a single room, 
              or just starting to explore ideas — I&apos;d love to hear about your project. 
              Fill out the form and I&apos;ll be in touch.
            </p>
            <div className="mt-8 space-y-6 text-[15px]">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--heading)]">
                  Services
                </h3>
                <ul className="mt-2 space-y-1">
                  <li>Full-service interior design</li>
                  <li>Kitchen &amp; bath design</li>
                  <li>Space planning &amp; layout</li>
                  <li>Furniture &amp; finish selections</li>
                  <li>Styling &amp; accessorizing</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium text-[var(--heading)]">
              Project Inquiry
            </h2>
            <div className="mt-6">
              <DesignInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
