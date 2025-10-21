import { ReactNode } from 'react';

interface ComponentsWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
export function ComponentsWrapper({
  children,
  className,
  id,
}: ComponentsWrapperProps) {
  console.log('Render <ComponentsWrapper />');

  return (
    <section
      id={id}
      className={`flex flex-col gap-8 items-center px-4 py-6 sm:px-6 md:p-14 lg:p-16 xl:p-20 2xl:p-24 ${className}`}
    >
      {children}
    </section>
  );
}
