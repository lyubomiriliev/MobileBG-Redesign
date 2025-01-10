import React from "react";

const Checkbox = ({
  label,
  checked,
  onChange,
  name,
  type = "checkbox",
}: {
  label: string;
  name?: string;
  checked?: boolean;
  onChange?: () => void;
  type?: "checkbox" | "radio";
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <input
        className="w-5 h-5"
        type={type}
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
