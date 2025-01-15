import DetailedSearchForm from "@/components/DetailedSearchForm";
import React from "react";

const SearchPage = () => {
  return (
    <section className="basicSection">
      <div className="w-full flex flex-col items-center pb-4 lg:py-4">
        <h1 className="text-4xl lg:text-4xl text-mobilePrimary">
          Детайлно търсене
        </h1>
      </div>
      <div>
        <DetailedSearchForm />
      </div>
    </section>
  );
};

export default SearchPage;
