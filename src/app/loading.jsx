const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090a0c]">
      <div className="flex flex-col items-center gap-5">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

        <p className="text-sm font-medium tracking-wide text-gray-400">
          LOADING WORKOUTS...
        </p>
      </div>
    </main>
  );
};

export default Loading;