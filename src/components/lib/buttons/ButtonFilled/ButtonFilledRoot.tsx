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
  const buttonClassName =
    "px-6 py-2 w-fit rounded-full bg-red-600 hover:bg-red-700 transition-colors font-bold flex gap-3 items-center justify-center";

  return (
    <>
      {link && (
        <Link className={buttonClassName} href={link}>
          {children}
        </Link>
      )}
      {!link && (
        <button onClick={onClick} className={buttonClassName}>
          {children}
        </button>
      )}
    </>
  );
}
