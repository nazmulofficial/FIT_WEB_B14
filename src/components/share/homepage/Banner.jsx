import banner from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#1c1e23] mx-auto max-w-7xl rounded-4xl">
      <div className=" px-6 py-24 flex justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-[12px] font-bold tracking-widest text-[#ccff00]">
            WORKOUT LIBRARY
          </p>
          <h1 className="text-6xl font-oswald font-black uppercase leading-tight text-white">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
          >
            BROWSE WORKOUTS
          </a>
        </div>
            <div>
                <Image src={banner} alt="FitLog" width={334} height={334} />
            </div>
      </div>
    </section>
  );
};

export default Banner;