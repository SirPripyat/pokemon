import React, { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<'button'> & {
  children: ReactNode;
};

export function ButtonFilledRoot({ children, onClick }: Props) {
  const buttonClassName =
    'px-6 py-2 w-fit rounded-full bg-red-600 hover:bg-red-700 transition-colors font-bold flex gap-3 items-center justify-center';

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}
