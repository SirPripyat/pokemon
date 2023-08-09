interface ButtonGhostedRootProps {
  children: React.ReactNode;
}
export default function ButtonGhostedRoot({
  children,
}: ButtonGhostedRootProps) {
  return (
    <>
      <button className="px-6 py-2 w-fit rounded-full text-red-600 hover:text-red-700 transition-colors font-bold flex gap-3 items-center justify-center">
        {children}
      </button>
    </>
  );
}
