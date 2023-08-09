interface ButtonGhostedIconProps {
  icon: React.ElementType;
}
export default function ButtonGhostedIcon({
  icon: Icon,
}: ButtonGhostedIconProps) {
  return (
    <>
      <Icon className="w-5 h-5" />
    </>
  );
}
