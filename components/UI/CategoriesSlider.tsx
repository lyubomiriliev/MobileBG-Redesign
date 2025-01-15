import React, { ReactNode } from "react";

const CategoriesSlider = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="py-4">
        <h1 className="text-4xl lg:text-4xl">{title}</h1>
      </div>
      <div className="w-[95%] flex lg:justify-center items-start gap-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default CategoriesSlider;
