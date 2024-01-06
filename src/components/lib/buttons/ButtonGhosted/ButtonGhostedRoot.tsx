import { RefObject } from "react";

interface ButtonGhostedRootProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
export default function ButtonGhostedRoot({
  children,
  onClick,
  disabled,
}: ButtonGhostedRootProps) {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className="px-6 py-2 w-fit rounded-full text-red-600 hover:text-red-700 transition-colors font-bold flex gap-3 items-center justify-center disabled:text-gray-700/80 disabled:cursor-not-allowed"
      >
        {children}
      </button>
    </>
  );
}
