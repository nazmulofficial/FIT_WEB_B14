"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

const MyPlan = () => {
  const { plan, saved, removeFromPlan, removeFromSaved } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalMinutes = plan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0
  );

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#090a0c] px-4 py-8 text-white sm:px-6 lg:px-8">
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
          <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-[10px] text-gray-500">
              Exercises
            </p>

            <p className="mt-1 font-oswald text-3xl font-bold text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-[10px] text-gray-500">
              Minutes
            </p>

            <p className="mt-1 font-oswald text-3xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="px-5 py-5">
            <p className="text-[10px] text-gray-500">
              Calories
            </p>

            <p className="mt-1 font-oswald text-3xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 border border-white/10 bg-[#101216] p-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-5 py-2 text-xs font-medium transition ${
                activeTab === "plan"
                  ? "rounded-md bg-[#25282e] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs font-medium transition ${
                activeTab === "saved"
                  ? "rounded-md bg-[#25282e] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 px-2">
            <span className="text-[10px] text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-white/10 bg-[#181a1f] px-3 py-2 text-[10px] text-gray-300 outline-none"
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
            <h2 className="font-oswald text-xl font-bold uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 text-xs text-gray-500">
              Browse the library and add a lift to get moving.
            </p>

            <Link
              href="/#library"
              className="mt-5 rounded-full bg-[#ccff00] px-5 py-2 text-[10px] font-bold text-black transition hover:-translate-y-1 hover:bg-[#d7ff33]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-4 grid gap-4">
            {sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="group border border-white/10 bg-[#101216] p-3 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="h-32 w-full overflow-hidden rounded-lg sm:h-28 sm:w-44">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups?.[0] && (
                          <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[9px] font-bold uppercase text-black">
                            {workout.muscleGroups[0]}
                          </span>
                        )}

                        {workout.muscleGroups?.[1] && (
                          <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[9px] font-bold uppercase text-black">
                            {workout.muscleGroups[1]}
                          </span>
                        )}
                      </div>

                      <h2 className="mt-2 font-oswald text-xl font-bold uppercase text-white transition-colors group-hover:text-[#ccff00]">
                        {workout.name}
                      </h2>

                      <p className="mt-1 text-xs text-gray-500">
                        {workout.equipment}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-[10px] text-gray-500">
                      <span>
                        {workout.duration} min
                      </span>

                      <span>
                        {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ★ {workout.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:flex-col sm:justify-between">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="rounded-md border border-white/10 px-3 py-2 text-[10px] text-gray-400 transition hover:border-[#ccff00] hover:text-[#ccff00]"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => handleRemove(workout.id)}
                      className="rounded-md border border-white/10 px-3 py-2 text-[10px] text-gray-500 transition hover:border-red-500 hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default MyPlan;