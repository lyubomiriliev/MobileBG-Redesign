export const Input = ({
  label,
  value,
  onChange,
  checked,
  type,
  placeholder,
}: {
  label?: string;
  value?: string;
  checked?: boolean;
  onChange: (value: string) => void;
  type?: "text" | "radio" | "checkbox" | "password";
  placeholder?: string;
}) => {
  return (
    <div className="w-full">
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <input
        checked={checked}
        type={type}
        placeholder={placeholder}
        className={`w-full ${
          type === "radio" ? "h-5" : "h-10 "
        } border border-gray-300 rounded-md p-2`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
