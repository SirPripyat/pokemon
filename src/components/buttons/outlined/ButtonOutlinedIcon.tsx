import { ElementType } from 'react';

type Props = {
  icon: ElementType;
};

export function ButtonOutlinedIcon({ icon: Icon }: Props) {
  return <Icon className="w-5 h-5" />;
}
