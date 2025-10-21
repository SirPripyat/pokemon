import { ElementType } from 'react';

type Props = {
  icon: ElementType;
};
export default function ButtonGhostedIcon({ icon: Icon }: Props) {
  return <Icon className="w-5 h-5" />;
}
