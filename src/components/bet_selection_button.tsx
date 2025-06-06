import type { ReactNode } from "react";

type BetSelectionButtonProps = {
  text: ReactNode;
  color?: string;
};

function BetSelectionButton({ text, color }: BetSelectionButtonProps) {
  return (
    <button
      className={`h-full rounded-[20px] py-1 md:py-0 px-5 min-w-[85px] leading-none text-shadow-2xs text-shadow-black/40 shadow-lg shadow-black/40 inset-shadow-2xs border-2 border-black hover:cursor-pointer ${
        color ||
        "bg-button-blue hover:bg-darker-blue inset-shadow-button-blue-highlight"
      }`}
    >
      {text}
    </button>
  );
}

export default BetSelectionButton;
