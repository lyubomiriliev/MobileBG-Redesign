import React from "react";
import clsx from "clsx";
import Image from "next/image";

interface ButtonProps {
  text: string;
  variant?: "default" | "outline";
  type?: "button" | "submit";
  icon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "default",
  onClick,
  type,
  icon,
  disabled,
}) => {
  const baseStyles =
    "px-4 py-2 font-bold rounded-md transition-all flex items-center justify-center gap-2 whitespace-nowrap";

  const variantStyles = {
    default:
      "bg-mobilePrimary text-white uppercase hover:bg-mobilePrimaryDark duration-300 transition-all ease-in-out cursor-pointer",
    outline:
      "border border-black text-black bg-transparent hover:border-mobilePrimary hover:text-mobilePrimary uppercase cursor-pointer",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      {icon && <Image width={40} height={40} alt={text} src={icon} />}
      {text}
    </button>
  );
};

export default Button;
