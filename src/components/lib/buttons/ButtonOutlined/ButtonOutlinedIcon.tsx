interface ButtonOutlinedIconProps {
  icon: React.ElementType;
}
export function ButtonOutlinedIcon({ icon: Icon }: ButtonOutlinedIconProps) {
  return (
    <>
      <Icon className=" w-5 h-5" />
    </>
  );
}
