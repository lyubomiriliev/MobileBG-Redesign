import React from "react";
import { featuredCategories } from "@/utils/constants";
import Category from "./Category";

const Categories = () => {
  return (
    <section className="w-full flex flex-col max-w-screen-xl mx-auto py-8 space-y-20">
      <div className="grid grid-cols-1 lg:flex lg:justify-center gap-6 w-full">
        {featuredCategories.map((category, index) => (
          <div key={index}>
            <Category
              url={category.url}
              name={category.name}
              offers={category.offers}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:flex lg:justify-center gap-6 w-full">
        {featuredCategories.map((category, index) => (
          <div key={index}>
            <Category
              url={category.url}
              name={category.name}
              offers={category.offers}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
