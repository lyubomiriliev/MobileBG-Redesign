import { searchIcons } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import SearchForm from "./SearchForm";

const SearchSection = () => {
  return (
    <nav className="w-full max-w-screen-xl flex flex-col items-center justify-center mx-auto py-10">
      <h1 className="text-3xl lg:text-4xl font-light">
        Търсене на превозни средства
      </h1>
      <div className="w-full max-w-screen-lg flex-col lg:flex justify-center items-center px-4 md:px-0 py-6">
        <div className="flex gap-4 items-center overflow-x-auto lg:overflow-x-visible scrollbar-hide">
          {searchIcons.map((icon, index) => (
            <div
              key={index}
              className="bg-slate-100 w-24 h-16 rounded-md flex justify-center items-center flex-shrink-0"
            >
              <Image src={icon.link} width={60} height={60} alt={icon.name} />
            </div>
          ))}
        </div>
        <div className="w-full">
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default SearchSection;
