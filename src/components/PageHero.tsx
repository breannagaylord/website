import Image from "next/image";

type PageHeroProps = {
  title: string;
  imageSrc: string;
  imagePosition?: string;
};

export function PageHero({ title, imageSrc, imagePosition = "center" }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden px-4">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <h1 className="relative z-10 max-w-4xl text-center text-4xl font-normal lowercase tracking-wide text-white md:text-5xl">
        {title}
      </h1>
    </section>
  );
}
