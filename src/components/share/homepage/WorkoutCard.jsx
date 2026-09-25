import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link href={`/workout/${id}`} className="block">
      <div className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#06153a] transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

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

          <h2 className="mt-4 font-oswald text-xl font-bold uppercase text-white transition-colors duration-300 group-hover:text-[#ccff00]">
            {name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {equipment}
          </p>

          <div className="mt-4 border-t border-white/10 pt-4">
            <div className="flex items-center gap-5 text-sm text-gray-400">
              <span>◷ {duration} min</span>
              <span>● {caloriesBurned} kcal</span>
              <span>☆ {rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;