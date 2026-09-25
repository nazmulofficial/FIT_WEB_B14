import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto max-w-7xl rounded-4xl bg-[#0f1934]">
      <div className="flex flex-col items-center justify-between gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:flex-row lg:px-12 lg:py-24">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-[12px] font-bold tracking-widest text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-oswald text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:bg-[#d8ff3d]"
          >
            BROWSE WORKOUTS
          </a>
        </div>

        <div className="shrink-0">
          <Image
            src={banner}
            alt="FitLog workout"
            width={334}
            height={334}
            priority
            className="h-56 w-56 object-contain sm:h-72 sm:w-72 lg:h-[334px] lg:w-[334px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;