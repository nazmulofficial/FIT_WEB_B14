import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#090a0c]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-12 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="FitLog"
                width={32}
                height={32}
              />

              <span className="font-oswald text-2xl font-bold tracking-wider text-white">
                FITLOG
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
              A no-nonsense workout companion built to help you train with
              purpose, track every set, and stay consistent with your goals.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                IG
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-oswald text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/"
                className="block text-sm text-gray-500 transition hover:text-[#ccff00]"
              >
                Workout Library
              </Link>

              <Link
                href="/my-plan"
                className="block text-sm text-gray-500 transition hover:text-[#ccff00]"
              >
                My Plan
              </Link>

              <Link
                href="/my-plan?tab=plan"
                className="block text-sm text-gray-500 transition hover:text-[#ccff00]"
              >
                Today's Plan
              </Link>

              <Link
                href="/my-plan?tab=saved"
                className="block text-sm text-gray-500 transition hover:text-[#ccff00]"
              >
                Saved
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-oswald text-sm font-bold uppercase tracking-widest text-white">
              Focus
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <p>Strength</p>
              <p>Endurance</p>
              <p>Mobility</p>
              <p>Consistency</p>
            </div>
          </div>

        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col justify-between gap-4 text-sm sm:flex-row">
          <p className="text-gray-600">
            © 2026 FitLog. All rights reserved.
          </p>

          <p className="font-medium text-gray-500">
            TRAIN HARD.{" "}
            <span className="text-[#ccff00]">
              LOG HONEST.
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;