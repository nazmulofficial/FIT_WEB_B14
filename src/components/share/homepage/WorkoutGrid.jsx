import WorkoutCard from "./WorkoutCard";

const WorkOut = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  return res.json();
};

const WorkoutGrid = async () => {
  const workouts = await WorkOut();

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="font-oswald text-4xl font-bold text-white">
        THE LIBRARY
      </h2>

      <p className="py-2 text-[12px] text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-6 py-3 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkoutGrid;