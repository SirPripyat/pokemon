interface DivisorProps {
  className?: string;
}

export default function Divisor({ className }: DivisorProps) {
  return (
    <hr className={`w-full border-t-2 border-zinc-700 my-4 ${className}`} />
  );
}
