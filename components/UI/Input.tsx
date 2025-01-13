export const Input = ({
  label,
  value,
  onChange,
  type,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "radio" | "checkbox" | "password";
  placeholder?: string;
}) => {
  return (
    <div className="w-full">
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md p-1.5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
