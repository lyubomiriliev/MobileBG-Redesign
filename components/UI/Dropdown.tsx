export const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      <label htmlFor={label} className="block font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        className="w-full border border-gray-300 rounded-md p-2 pr-8"
        value={value}
        id={label}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{`Избери ${label.toLowerCase()}`}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
