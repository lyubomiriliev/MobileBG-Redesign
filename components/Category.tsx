import Image from "next/image";
import React from "react";

interface CategoryProps {
  id?: string;
  name: string;
  url: string;
  offers: number;
}

const Category: React.FC<CategoryProps> = ({ url, name, offers }) => {
  return (
    <div className="w-full h-40 bg-gray-100 flex flex-col justify-center items-center p-4">
      <Image src={url} alt={name} width={120} height={20} />
      <h3 className="text-lg uppercase">{name}</h3>
      <span className="font-light text-mobileDarkGray">{offers} обяви</span>
    </div>
  );
};

export default Category;
