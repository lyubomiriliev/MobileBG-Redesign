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
    <div className="w-80 lg:w-48 h-34 bg-gradient-to-br from-slate-300 via-slate-100 to-slate-300 flex rounded-md flex-col justify-center items-center p-4">
      <Image src={url} alt={name} width={120} height={20} />
      <h3 className="text-xl uppercase font-bold">{name}</h3>
      <span className="font-light text-mobileDarkGray">{offers} обяви</span>
    </div>
  );
};

export default Category;
