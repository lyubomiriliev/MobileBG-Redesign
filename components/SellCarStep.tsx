import React from "react";

const SellCarStep = ({
  title,
  subTitle,
  id,
}: {
  title: string;
  subTitle: string;
  id: number;
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-center p-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full flex justify-center items-center text-4xl text-white font-extrabold bg-mobilePrimary">
          {id}
        </div>
        <h1 className="text-xl font-semibold uppercase lg:text-2xl">{title}</h1>
      </div>
      <div className="w-full pl-14">
        <p className="text-mobileDarkGray">{subTitle}</p>
      </div>
    </div>
  );
};

export default SellCarStep;
