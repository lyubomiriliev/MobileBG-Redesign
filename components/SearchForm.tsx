import { searchIcons } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const SearchForm = () => {
  return (
    <nav className="w-full max-w-screen-xl flex flex-col items-center justify-center mx-auto py-10">
      <h1 className="text-3xl lg:text-4xl font-light">
        Търсене на превозни средства
      </h1>
      <div className="w-full max-w-screen-lg flex items-start px-4 md:px-0 py-6">
        <div className="flex lg:flex-col gap-4 items-center">
          {searchIcons.map((icon, index) => (
            <div
              key={index}
              className="bg-gray-100 w-24 h-16 rounded-md flex justify-center items-center"
            >
              <Image src={icon.link} width={60} height={60} alt={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SearchForm;
