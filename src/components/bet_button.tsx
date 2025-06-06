import type { ReactNode } from "react";

type BetButtonProps = {
  icon: ReactNode;
};

function BetButton({ icon }: BetButtonProps) {
  return (
    <>
      <button className="bg-button-blue rounded-full py-2 px-3 inset-shadow-2xs inset-shadow-button-blue-highlight border-1 border-black/60 hover:bg-darker-blue hover:cursor-pointer">
        {icon}
      </button>
    </>
  );
}

export default BetButton;
