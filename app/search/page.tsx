import SearchForm from "@/components/SearchForm";
import { Dropdown } from "@/components/UI/Dropdown";
import React from "react";

const SearchPage = () => {
  return (
    <section className="basicSection bg-slate-200">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl lg:text-3xl text-mobilePrimary">
          Детайлно търсене
        </h1>
      </div>
    </section>
  );
};

export default SearchPage;
