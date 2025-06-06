import HistoryDots from "./history_dots";
import history_icon from "../assets/icon-rounds-history.28821710fef20c17.svg";
import down_arrow from "../assets/icon-dd-arrow.e394e8c554623388.svg";

function HistoryBar() {
  return (
    <>
      <div className="flex flex-row bg-dark-blue justify-end min-h-[20px] md:min-w-[600px] min-w-full rounded-full">
        <div className="flex w-full h-full flex-row p-1 gap-1.5 items-center">
          <HistoryDots color="bg-history-black" />
          <HistoryDots color="bg-history-black" />
          <HistoryDots color="bg-history-red" />
          <HistoryDots color="bg-history-red" />
          <HistoryDots color="bg-history-black" />
        </div>
        <div className="flex flex-row h-full items-center inset-shadow-2xs inset-shadow-button-blue-highlight gap-1.5 p-1 border-1 border-black/50 rounded-full bg-button-blue">
          <img src={history_icon} alt="round" />
          <img src={down_arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
}

export default HistoryBar;
