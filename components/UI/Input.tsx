export const Input = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md p-1.5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
