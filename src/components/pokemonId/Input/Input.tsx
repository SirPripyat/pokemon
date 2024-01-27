interface InputProps {
  icon: React.ElementType;
  label: "Weight" | "Height" | "Abilities";
  value: string;
}

export default function Input({ icon: Icon, label, value }: InputProps) {
  return (
    <fieldset className="flex flex-col gap-1">
      <label className="flex gap-1 items-center text-gray-600">
        <Icon className="w-4 h-4" />
        {label}
      </label>
      <input
        value={value}
        readOnly
        className="px-4 py-2 bg-transparent rounded-2xl border border-gray-600 text-gray-200"
      />
    </fieldset>
  );
}
