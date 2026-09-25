"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

const MyPlan = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [sortBy, setSortBy] = useState("duration");
  const [completed, setCompleted] = useState([]);

  const activeTab =
    searchParams.get("tab") === "saved"
      ? "saved"
      : "plan";

  const currentWorkouts =
    activeTab === "saved" ? saved : plan;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration || 0) - Number(b.duration || 0);
    }

    if (sortBy === "calories") {
      return (
        Number(a.caloriesBurned || 0) -
        Number(b.caloriesBurned || 0)
      );
    }

    if (sortBy === "rating") {
      return (
        Number(b.rating || 0) -
        Number(a.rating || 0)
      );
    }

    return 0;
  });

  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned || 0),
    0
  );

  const handleTabChange = (tab) => {
    router.push(`/my-plan?tab=${tab}`);
  };

  const handleRemove = (id) => {
    if (activeTab === "saved") {
      removeFromSaved(id);
    } else {
      removeFromPlan(id);
    }
  };

  const handleDone = (id) => {
    setCompleted((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id];
    });
  };

  return (
    <main className="min-h-screen bg-[#090a0c] px-4 py-24 text-white sm:px-6 sm:py-28 lg:px-8">
      <section className="mx-auto max-w-7xl">

        <div className="border border-white/10 bg-[#101216] px-5 py-5 sm:px-7">
          <h1 className="font-oswald text-3xl font-bold uppercase leading-none sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-xs text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 border border-white/10 bg-[#101216] sm:grid-cols-3">
          <div className="border-b border-white/10 px-4 py-4 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-2xl font-bold text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          <div className="border-b border-white/10 px-4 py-4 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="px-4 py-4">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 border border-white/10 bg-[#101216] p-2 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex w-full items-center gap-1 sm:w-auto sm:gap-2">
            <button
              type="button"
              onClick={() => handleTabChange("plan")}
              className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition sm:flex-none sm:px-4 ${
                activeTab === "plan"
                  ? "bg-[#292d35] text-white"
                  : "text-gray-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => handleTabChange("saved")}
              className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition sm:flex-none sm:px-4 ${
                activeTab === "saved"
                  ? "bg-[#292d35] text-white"
                  : "text-gray-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex w-full items-center justify-between gap-2 px-1 sm:w-auto sm:justify-end sm:px-2">
            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 rounded-md border border-white/10 bg-[#181b20] px-3 py-2 text-xs text-white outline-none focus:border-[#ccff00] sm:flex-none"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        {sortedWorkouts.length === 0 ? (
          <div className="mt-4 flex min-h-[330px] flex-col items-center justify-center border border-white/10 bg-[#101216] px-5 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#181b20]">
              <span className="text-xl text-gray-500">
                {activeTab === "saved" ? "♡" : "+"}
              </span>
            </div>

            <h2 className="mt-5 font-oswald text-2xl font-bold uppercase text-white">
              {activeTab === "saved"
                ? "No saved workouts"
                : "Your plan is empty"}
            </h2>

            <p className="mt-2 max-w-md text-xs leading-5 text-gray-500">
              {activeTab === "saved"
                ? "Save workouts from the library and they will appear here."
                : "Browse the workout library and add exercises to today's plan."}
            </p>

            <Link
              href="/"
              className="mt-5 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#d8ff3d]"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          <div className="mt-4 space-y-4">

            {sortedWorkouts.map((workout) => {
              const isCompleted = completed.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`w-full overflow-hidden rounded-2xl border bg-[#13161c] p-3 transition sm:p-4 ${
                    isCompleted
                      ? "border-[#ccff00]/40"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >

                  <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">

                    <div className="h-48 w-full shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-56 lg:h-24 lg:w-36">
                      <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups?.map(
                          (muscle, index) => (
                            <span
                              key={`${workout.id}-${index}`}
                              className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                            >
                              {muscle}
                            </span>
                          )
                        )}
                      </div>

                      <h2
                        className={`mt-2 break-words font-oswald text-xl font-bold uppercase ${
                          isCompleted
                            ? "text-[#ccff00]"
                            : "text-white"
                        }`}
                      >
                        {workout.name}
                      </h2>

                      <p className="mt-1 break-words text-xs text-gray-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
                        <span>
                          ◷ {workout.duration} min
                        </span>

                        <span>
                          ● {workout.caloriesBurned} kcal
                        </span>

                        <span>
                          ☆ {workout.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto lg:shrink-0 lg:items-center lg:gap-3">

                      <Link
                        href={`/workout/${workout.id}`}
                        className="flex w-full items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium text-gray-300 transition hover:border-[#ccff00] hover:text-[#ccff00] sm:w-auto"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          type="button"
                          onClick={() => handleDone(workout.id)}
                          className={`flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition sm:w-auto ${
                            isCompleted
                              ? "bg-[#242820] text-[#ccff00]"
                              : "bg-[#ccff00] text-black hover:bg-[#d8ff3d]"
                          }`}
                        >
                          <span>✓</span>

                          <span>
                            {isCompleted
                              ? "Done"
                              : "Mark as Done"}
                          </span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleRemove(workout.id)}
                        className="flex h-10 w-full shrink-0 items-center justify-center rounded-full text-xl text-gray-500 transition hover:bg-red-500/10 hover:text-red-400 sm:w-10"
                        aria-label={`Remove ${workout.name}`}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        )}
      </section>
    </main>
  );
};

export default MyPlan;