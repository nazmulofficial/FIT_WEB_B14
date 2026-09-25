import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090a0c] px-6 py-30 text-white">
      <div className="text-center">
        <p className="font-oswald text-7xl font-black text-[#ccff00]">
          404
        </p>

        <h1 className="mt-4 font-oswald text-3xl font-bold uppercase">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          The workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d8ff3d]"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
};

export default NotFound;