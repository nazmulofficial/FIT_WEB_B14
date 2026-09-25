"use client";

import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

const WorkoutActions = ({ workout }) => {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useFitLog();

  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some(
      (item) => item.id === workout.id
    );

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
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      showToast("Already saved");
      return;
    }

    saveWorkout(workout);

    showToast("Saved for later");
  };

  const isInPlan = plan.some(
    (item) => item.id === workout.id
  );

  const isSaved = saved.some(
    (item) => item.id === workout.id
  );

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={handleAddToPlan}
          className="group relative overflow-hidden rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff33] active:scale-95"
        >
          <span className="relative flex items-center gap-2">
            <span className="text-base">
              {isInPlan ? "✓" : "+"}
            </span>

            <span>
              {isInPlan
                ? "Added to plan"
                : "Add to today's plan"}
            </span>
          </span>
        </button>

        <button
          onClick={handleSave}
          className="group relative overflow-hidden rounded-lg border border-white/20 bg-transparent px-5 py-3 text-xs font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:bg-[#ccff00]/5 hover:text-[#ccff00] active:scale-95"
        >
          <span className="relative flex items-center gap-2">
            <span className="text-base">
              {isSaved ? "♥" : "♡"}
            </span>

            <span>
              {isSaved ? "Saved" : "Save for later"}
            </span>
          </span>
        </button>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg border border-[#ccff00]/30 bg-[#15171c] px-5 py-3 text-sm font-medium text-white shadow-2xl">
          {toast}
        </div>
      )}
    </>
  );
};

export default WorkoutActions;