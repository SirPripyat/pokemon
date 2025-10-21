import { X } from 'lucide-react';
import IconButton from '@/components/IconButton';
import { ReactNode } from 'react';
import { Title } from '@/components/Title';

type Props = {
  title: string;
  children: ReactNode;
  onClick: () => void;
};

export function Modal({ title, children, onClick }: Props) {
  return (
    <div className="fixed overflow-hidden top-0 left-0 flex items-end w-full h-screen bg-black/90 z-[100] md:items-center justify-center">
      <div className="bg-zinc-900 p-6 pb-16 rounded-t-2xl w-full flex flex-col gap-4 sm:p-8 md:rounded-2xl md:w-2/3 lg:w-1/2">
        <div className="w-full flex justify-between items-center">
          <Title>{title}</Title>
          <IconButton onClick={onClick} icon={X} />
        </div>
        {children}
      </div>
    </div>
  );
}
