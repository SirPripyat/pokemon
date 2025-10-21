import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className="text-2xl font-bold text-gray-200 first-letter:uppercase">
      {children}
    </h1>
  );
}
