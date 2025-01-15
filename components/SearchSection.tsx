"use client";

import { searchIcons } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import SearchForm from "./SearchForm";

const SearchSection: React.FC = () => {
  const [category, setCategory] = useState("Автомобили и Джипове");

  const handleSetCategory = (cat: string) => {
    setCategory(cat);
  };

  return (
    <nav className="w-full max-w-screen-xl flex flex-col items-center justify-center mx-auto py-6">
      <h1 className="text-3xl uppercase lg:text-4xl font-light">
        Търсене на превозни средства
      </h1>
      <div className="w-full flex-col lg:flex justify-center items-center px-4 md:px-0 py-6">
        <div className="w-full justify-start flex gap-4 items-center overflow-x-auto lg:overflow-x-visible scrollbar-hide pb-4">
          {searchIcons.map((icon, index) => (
            <div
              key={index}
              onClick={() => handleSetCategory(icon.category)}
              className={`${
                icon.category === category
                  ? "bg-mobilePrimary w-24 h-16 rounded-md flex justify-center items-center flex-shrink-0"
                  : "bg-slate-100 w-24 h-16 rounded-md flex justify-center items-center flex-shrink-0"
              } duration-300 transition-all ease-out`}
            >
              <Image
                src={icon.category === category ? icon.linkActive : icon.link}
                width={60}
                height={60}
                alt={icon.name}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          <SearchForm category={category} setCategory={handleSetCategory} />
        </div>
      </div>
    </nav>
  );
};

export default SearchSection;
