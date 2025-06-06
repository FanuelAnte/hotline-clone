import "./App.css";
import BetAmountButtons from "./components/bet_amount_panel";
import BetSelectionButton from "./components/bet_selection_button";
import HistoryBar from "./components/history_bar";
import RiskMode from "./components/risk_mode";

import arrow from "../src/assets/hotline-arrow.svg";
import fire from "../src/assets/icon-hot.svg";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-black flex items-center justify-center font-primary text-white">
        <div className="w-full h-full md:w-[960px] md:h-[540px] p-1">
          <div className="flex flex-col w-full h-full border-0.5 md:border-2 rounded-xl md:border-golden-yellow bg-gradient-to-r from-light-blue-edge via-light-blue-center to-light-blue-edge">
            <div className="flex flex-col w-full h-full items-center md:justify-end p-1 pb-3">
              <HistoryBar />
            </div>
            <div className="flex w-full h-full items-center p-2">
              <div className="flex flex-col items-center border-1 border-blue-200/35 justify-between bg-dark-blue w-full h-[188px] md:h-[248px] rounded-xl inset-shadow-2xs inset-shadow-black/20">
                <img src={arrow} alt="arrow1" />
                <img src="src/assets/cards.png" alt="Cards" />
                <img src={arrow} alt="arrow2" className="rotate-180" />
              </div>
            </div>
            <div className="flex flex-col w-full h-full justify-end pb-8 md:pb-0 items-center md:justify-center">
              <RiskMode />
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex flex-col-reverse md:flex-row w-full bg-darker-blue rounded-2xl p-2 gap-6 md:gap-3 justify-center md:items-stretch items-center">
                <BetAmountButtons />
                <div className="flex flex-row items-center justify-center gap-1 pt-1 md:pt-0 text-[13px]">
                  <BetSelectionButton
                    text={
                      <div className="flex flex-col items-center">
                        <p>RED</p>
                        <p>X2</p>
                      </div>
                    }
                    color="bg-radial from-button-red-center from-40% to-button-red-edge inset-shadow-2xs inset-shadow-button-red-highlight"
                  />
                  <BetSelectionButton
                    text={
                      <div className="flex flex-col items-center gap-1">
                        <img src={fire} alt="hot" />
                        <p>X32</p>
                      </div>
                    }
                    color="bg-radial from-button-yellow-center from-40% to-button-yellow-edge inset-shadow-2xs inset-shadow-button-yellow-highlight"
                  />
                  <BetSelectionButton
                    text={
                      <div className="flex flex-col items-center">
                        <p>BLACK</p>
                        <p>X2</p>
                      </div>
                    }
                    color="bg-radial from-button-black-center from-40% to-button-black-edge inset-shadow-2xs inset-shadow-button-black-highlight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
