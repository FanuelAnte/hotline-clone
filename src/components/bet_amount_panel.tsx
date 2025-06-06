import { PiDatabaseLight } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import BetButton from "./bet_button";

function BetAmountPanel() {
  return (
    <>
      <div className="flex flex-row px-3 gap-4 items-center bg-button-blue border-black/80 border-1 inset-shadow-2xs inset-shadow-button-blue-highlight rounded-full max-w-fit min-h-[50px]">
        <div className="flex flex-col items-center w-full justify-center">
          <p className="text-xs">Bet USD</p>
          <input
            className="h-[22px] w-[140px] bg-darker-blue rounded-full inset-shadow-2xs inset-shadow-black/20 border-1 border-black/80 text-center text-white text-sm font-bold placeholder:text-white focus:outline-white focus:outline-1"
            placeholder="0.00"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full gap-1">
          <BetButton icon={<FiMinus />} />
          <BetButton icon={<PiDatabaseLight />} />
          <BetButton icon={<FiPlus />} />
        </div>
      </div>
    </>
  );
}

export default BetAmountPanel;
