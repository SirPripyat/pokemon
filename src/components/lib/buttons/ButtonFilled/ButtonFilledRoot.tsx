import Link from "next/link";
import React from "react";

interface ButtonFilledRootProps {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
}
export function ButtonFilledRoot({
  children,
  link,
  onClick,
}: ButtonFilledRootProps) {
  return link ? (
    <>
      <Link
        scroll={true}
        className="px-6 py-2 w-fit rounded-full bg-red-600 hover:bg-red-700 transition-colors font-bold flex gap-3 items-center justify-center"
        href={link}
      >
        {children}
      </Link>
    </>
  ) : (
    <>
      <button
        onClick={onClick}
        className="px-6 py-2 w-fit rounded-full bg-red-600 hover:bg-red-700 transition-colors font-bold flex gap-3 items-center justify-center"
      >
        {children}
      </button>
    </>
  );
}
