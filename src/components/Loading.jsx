const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#BAC4BA] border-t-[#939B93]" />
      <p className="text-xl font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
