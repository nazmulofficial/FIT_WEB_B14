"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  return (
    <nav className="border-b border-white/10 bg-[#000000]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FitLog"
            width={32}
            height={32}
          />

          <span className="font-oswald text-2xl font-bold tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              pathname === "/"
                ? "bg-[#16240c] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              pathname === "/my-plan"
                ? "bg-[#16240c] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-300"
          >
            Plan

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-2 font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-300"
          >
            Saved

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-2 text-gray-400">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;