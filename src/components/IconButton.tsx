import { ComponentProps, ElementType } from 'react';

type IconButtonProps = ComponentProps<'button'> & {
  icon: ElementType;
};
export default function IconButton({ icon: Icon, onClick }: IconButtonProps) {
  return (
    <Icon
      onClick={onClick}
      className="p-1 w-8 h-8 cursor-pointer text-red-500 rounded-full flex justify-center items-center hover:text-red-600 hover:bg-red-600/20 transition-colors"
    />
  );
}
