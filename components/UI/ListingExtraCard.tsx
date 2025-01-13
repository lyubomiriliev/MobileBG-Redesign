import React, { ReactNode } from "react";

const ListingExtraCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-1/2 h-full flex flex-col items-center">
      <div className="w-full flex items-center justify-center py-4">
        <h1 className="text-mobilePrimary text-2xl font-bold uppercase">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
};

export default ListingExtraCard;
