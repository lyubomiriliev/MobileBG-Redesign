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
    <div className="flex flex-col items-start justify-center py-2">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full flex justify-center items-center text-4xl text-white font-extrabold bg-mobilePrimary">
          {id}
        </div>
        <h1 className="text-xl font-medium lg:text-2xl">{title}</h1>
      </div>
      <p className="text-mobileDarkGray">{subTitle}</p>
    </div>
  );
};

export default SellCarStep;
