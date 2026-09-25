const WorkoutCard = ({ workout }) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171c]">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex gap-2">
          {muscleGroups?.[0] && (
            <span className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black">
              {muscleGroups[0]}
            </span>
          )}

          {muscleGroups?.[1] && (
            <span className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black">
              {muscleGroups[1]}
            </span>
          )}
        </div>

        <h2 className="mt-5 font-oswald text-xl font-bold uppercase text-white">
          {name}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {equipment}
        </p>

        <div className="mt-4 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>◷ {duration} min</span>
            <span>● {caloriesBurned} kcal</span>
            <span>☆ {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;