"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext(null);

export const FitLogProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const addToPlan = (workout) => {
    setPlan((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      if (prev.length >= 5) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const saveWorkout = (workout) => {
    setSaved((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be inside FitLogProvider");
  }

  return context;
};