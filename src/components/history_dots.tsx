function HistoryDots({ color }: { color?: string }) {
  return (
    <>
      <div
        className={`h-[15px] w-[15px] rounded-full outline-2 outline-black/40 ${color}`}
      ></div>
    </>
  );
}

export default HistoryDots;
