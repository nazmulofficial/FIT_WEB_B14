import WorkoutActions from "@/components/share/workout/WorkoutActions";

const getWorkout = async (id) => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#090a0c]">
        <h1 className="font-oswald text-3xl font-bold uppercase text-white">
          Workout Not Found
        </h1>
      </main>
    );
  }

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    description,
    instructions,
  } = workout;

  return (
    <main className="min-h-screen bg-[#090a0c] px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="group overflow-hidden rounded-xl border border-white/10">
            <img
              src={image}
              alt={name}
              className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div>
            <h1 className="font-oswald text-4xl font-bold uppercase leading-none text-white md:text-5xl">
              {name}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {description}
            </p>

            <div className="mt-4 flex gap-2">
              {muscleGroups?.[0] && (
                <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black">
                  {muscleGroups[0]}
                </span>
              )}

              {muscleGroups?.[1] && (
                <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black">
                  {muscleGroups[1]}
                </span>
              )}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#15171c]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-500">
                  Equipment
                </span>

                <span className="text-xs text-gray-300">
                  {equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-500">
                  Difficulty
                </span>

                <span className="text-xs text-gray-300">
                  {difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-500">
                  Sets
                </span>

                <span className="text-xs text-gray-300">
                  {sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-500">
                  Reps
                </span>

                <span className="text-xs text-gray-300">
                  {reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-500">
                  Duration
                </span>

                <span className="text-xs text-gray-300">
                  {duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-500">
                  Calories
                </span>

                <span className="text-xs text-gray-300">
                  {caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] uppercase text-gray-500">
                  Rating
                </span>

                <span className="text-xs text-[#ccff00]">
                  ★ {rating}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="font-oswald text-sm font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <div className="mt-3 space-y-3 text-xs leading-5 text-gray-400">
                <p className="flex gap-3">
                  <span className="text-gray-500">1.</span>
                  <span>{instructions?.[0]}</span>
                </p>

                <p className="flex gap-3">
                  <span className="text-gray-500">2.</span>
                  <span>{instructions?.[1]}</span>
                </p>

                <p className="flex gap-3">
                  <span className="text-gray-500">3.</span>
                  <span>{instructions?.[2]}</span>
                </p>

                <p className="flex gap-3">
                  <span className="text-gray-500">4.</span>
                  <span>{instructions?.[3]}</span>
                </p>
              </div>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetailsPage;