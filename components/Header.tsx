import { headerLinks } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-gray-200 flex flex-col gap-1 items-center justify-between fixed top-0 py-2 h-16 md:h-24 z-50">
      <Image src="/mobileLogo.svg" alt="MobileBG" width={120} height={60} />
      <div className="w-full max-w-screen-lg mx-auto justify-center items-center flex">
        <ul className="flex w-full justify-around">
          {headerLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
        <button className="whitespace-nowrap">Добави Обява</button>
      </div>
    </nav>
  );
};

export default Header;
