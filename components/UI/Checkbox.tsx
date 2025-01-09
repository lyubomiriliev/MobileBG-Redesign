import React from "react";

const Checkbox = ({
  label,
  checked,
  onChange,
  name,
}: {
  label: string;
  name?: string;
  checked?: boolean;
  onChange?: () => void;
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <input
        className="w-5 h-5"
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="text-xl" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
