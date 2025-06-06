import HistoryDots from "./history_dots";

function HistoryBar() {
  return (
    <>
      <div className="flex flex-row bg-dark-blue justify-end min-h-[20px] min-w-[600px] rounded-full">
        <div className="flex w-full h-full flex-row p-1 gap-1.5 items-center">
          <HistoryDots color="bg-history-black" />
          <HistoryDots color="bg-history-black" />
          <HistoryDots color="bg-history-red" />
          <HistoryDots color="bg-history-red" />
          <HistoryDots color="bg-history-black" />
        </div>
        <div className="flex flex-row h-full items-center inset-shadow-2xs inset-shadow-button-blue-highlight gap-1 px-1 border-1 border-black/50 rounded-full bg-button-blue">
          <img
            src="src/assets/icon-rounds-history.28821710fef20c17.svg"
            alt="round"
          />
          <img
            src="src/assets/icon-dd-arrow.e394e8c554623388.svg"
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
}

export default HistoryBar;
