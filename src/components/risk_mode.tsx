import { useState } from "react";

function RiskMode() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-row items-center bg-darker-blue h-[30px] py-4 min-w-[205px] rounded-full px-2 gap-6">
      <img
        src="src/assets/icon-speedometer.svg"
        alt="speedometer"
        className="h-5 w-5"
      />
      <div className="flex flex-row items-center gap-2 text-xs">
        <button
          onClick={() => setEnabled((prev) => !prev)}
          className={`w-[28px] h-[16px] rounded-full relative transition-colors duration-200 focus:outline-none ${
            enabled ? "bg-toggle-green" : "bg-toggle-grey"
          }`}
          aria-label="Toggle Risk Mode"
        >
          <span
            className={`absolute top-0.5 left-0.5 h-[12px] w-[12px] transition-transform transform rounded-full bg-white ${
              enabled ? "translate-x-3" : "translate-x-0"
            }`}
          />
        </button>
        <p>High risk mode</p>
      </div>
    </div>
  );
}

export default RiskMode;
