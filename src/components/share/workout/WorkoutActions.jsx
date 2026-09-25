"use client";

import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

const WorkoutActions = ({ workout }) => {
  const { plan, saved, addToPlan, saveWorkout } = useFitLog();

  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      showToast("Already added to today's plan");
      return;
    }

    if (plan.length >= 5) {
      showToast("Today's plan is full");
      return;
    }

    addToPlan(workout);
    showToast("Added to today's plan");
  };

  const handleSave = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      showToast("Already saved");
      return;
    }

    saveWorkout(workout);
    showToast("Saved for later");
  };

  const isInPlan = plan.some((item) => item.id === workout.id);

  const isSaved = saved.some((item) => item.id === workout.id);

  return (
    <div className="relative">
      <div className="mt-6 flex flex-wrap gap-3 ">
        <button
          onClick={handleAddToPlan}
          className="group relative overflow-hidden rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8ff3d] active:scale-95"
        >
          <span className="relative flex items-center gap-2">
            <span className="text-base">{isInPlan ? "✓" : "+"}</span>

            <span>{isInPlan ? "Added to plan" : "Add to today's plan"}</span>
          </span>
        </button>

        <button
          onClick={handleSave}
          className="group relative overflow-hidden rounded-lg border border-white/20 bg-transparent px-5 py-3 text-xs font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:bg-[#ccff00]/5 hover:text-[#ccff00] active:scale-95"
        >
          <span className="relative flex items-center gap-2">
            <span className="text-base">{isSaved ? "♥" : "♡"}</span>

            <span>{isSaved ? "Saved" : "Save for later"}</span>
          </span>
        </button>
      </div>

      {toast && (
        <div className="fixed inset-x-0 top-24 z-[9999]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="ml-auto w-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#111318] shadow-2xl">
              <div className="h-1 w-full bg-[#ccff00]" />

              <div className="flex items-center gap-4 px-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ccff00]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                    ✓
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ccff00]">
                    Success
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">{toast}</p>
                </div>

                <button
                  onClick={() => setToast("")}
                  className="text-lg leading-none text-gray-600 transition hover:text-white"
                >
                  ×
                </button>
              </div>

              <div className="h-[2px] w-full bg-[#1d211b]">
                <div className="h-full w-full bg-[#ccff00]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutActions;
