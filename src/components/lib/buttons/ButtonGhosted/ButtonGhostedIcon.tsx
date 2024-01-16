interface ButtonGhostedIconProps {
  icon: React.ElementType;
  onClick?: () => void;
}
export default function ButtonGhostedIcon({
  icon: Icon,
  onClick,
}: ButtonGhostedIconProps) {
  return <Icon onClick={onClick} className="w-5 h-5" />;
}
