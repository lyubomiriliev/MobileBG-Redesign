import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  id?: string;
  name: string;
  url: string;
  src: string;
  offers: number;
}

const Category: React.FC<CategoryProps> = ({ url, name, offers, src }) => {
  return (
    <Link href={url}>
      <div className="w-64 lg:w-60 h-34 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 border-[1px] border-slate-200 hover:bg-gradient-to-br hover:from-slate-100 hover:via-mobilePrimary/40 hover:to-slate-100 hover:border-mobilePrimary/50 duration-300 ease-in-out transition-all cursor-pointer shadow-sm flex rounded-md flex-col justify-center items-center p-4">
        <Image src={src} alt={name} width={120} height={20} />
        <h3 className="text-xl uppercase font-bold">{name}</h3>
        <span className="font-light text-mobileDarkGray">{offers} обяви</span>
      </div>
    </Link>
  );
};

export default Category;
