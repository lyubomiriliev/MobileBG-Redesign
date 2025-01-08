import React from "react";

const Checkbox = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <input className="w-5 h-5" type="checkbox" />
      <label className="text-xl" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
