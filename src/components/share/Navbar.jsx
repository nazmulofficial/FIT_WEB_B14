"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:px-6 lg:px-8">

        <div className="flex items-center gap-2 sm:gap-3">

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-300 transition hover:bg-white/10 hover:text-[#ccff00] sm:h-10 sm:w-10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src={logo}
              alt="FitLog"
              width={30}
              height={30}
              className="h-7 w-7 sm:h-8 sm:w-8"
            />

            <span className="font-oswald text-xl font-bold tracking-wider text-white sm:text-2xl">
              FITLOG
            </span>
          </Link>

        </div>

        <div className="hidden items-center gap-2 lg:flex">

          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              pathname === "/"
                ? "bg-[#16240c] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan?tab=plan"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              pathname === "/my-plan"
                ? "bg-[#16240c] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>

        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-5">

          <Link
            href="/my-plan?tab=plan"
            className="flex items-center gap-1.5 text-[11px] text-gray-300 transition hover:text-white sm:gap-2 sm:text-sm"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-bold text-black sm:h-6 sm:min-w-6 sm:px-2 sm:text-xs">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-1.5 text-[11px] text-gray-300 transition hover:text-white sm:gap-2 sm:text-sm"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-600 px-1.5 text-[10px] text-gray-400 sm:h-6 sm:min-w-6 sm:px-2 sm:text-xs">
              {saved.length}
            </span>
          </Link>

        </div>

      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090a0c] lg:hidden">

          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <div className="flex flex-col gap-2">

              <Link
                href="/"
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  pathname === "/"
                    ? "bg-[#16240c] text-[#ccff00]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                Workouts
              </Link>

              <Link
                href="/my-plan?tab=plan"
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  pathname === "/my-plan"
                    ? "bg-[#16240c] text-[#ccff00]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                My Plan
              </Link>

              <div className="my-2 h-px bg-white/10" />

              <Link
                href="/my-plan?tab=plan"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                <span>Today's Plan</span>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-2 text-xs font-bold text-black">
                  {plan.length}
                </span>
              </Link>

              <Link
                href="/my-plan?tab=saved"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                <span>Saved</span>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-2 text-xs text-gray-400">
                  {saved.length}
                </span>
              </Link>

            </div>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;