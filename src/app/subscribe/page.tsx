import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SubscribeForm } from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to Breanna Gaylord Design for design inspiration, project updates, and new blog posts.",
};

export default function SubscribePage() {
  return (
    <div className="bg-white">
      <PageHero
        title="subscribe"
        imageSrc="/images/service-1.jpg"
        imagePosition="center"
      />

      <section className="mx-auto max-w-[1140px] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-lg leading-relaxed text-[var(--heading)] md:text-xl">
            Get design inspiration, project updates, and new blog posts 
            delivered to your inbox.
          </p>
          <div className="mt-8">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </div>
  );
}
