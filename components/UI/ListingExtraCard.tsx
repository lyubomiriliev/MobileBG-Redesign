import React, { ReactNode } from "react";

const ListingExtraCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full lg:w-2/3 h-full flex flex-col justify-start items-start">
      <div className="w-full flex items-center justify-start">
        <h1 className="text-mobilePrimary text-2xl font-bold uppercase">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-2 text-lg py-4">{children}</div>
    </div>
  );
};

export default ListingExtraCard;
