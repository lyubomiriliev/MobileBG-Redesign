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
      <label htmlFor={label} className="block text-black mb-1 text-xl">
        {label}
      </label>
      <select
        className="w-full border border-slate-400 bg-white rounded-md h-10 p-2 pr-8"
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
