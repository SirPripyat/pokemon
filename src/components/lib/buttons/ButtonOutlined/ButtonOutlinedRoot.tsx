interface ButtonOutlinedRootProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export function ButtonOutlinedRoot({
  children,
  onClick,
}: ButtonOutlinedRootProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 w-fit rounded-full border border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 transition-colors font-bold flex gap-3 justify-center items-center"
    >
      {children}
    </button>
  );
}
