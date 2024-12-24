import React from "react";
import {
  featuredCategories,
  popularCategories,
  vehicleTypes,
} from "@/utils/constants";
import Category from "./Category";

const Categories = () => {
  return (
    <section className="w-full flex min-h-screen items-center flex-col max-w-screen-xl mx-auto justify-start space-y-8">
      <div className="flex justify-center items-center lg:flex-row lg:justify-center gap-6 w-[95%] overflow-x-auto lg:overflow-x-visible scrollbar-hide">
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
      <h1 className="text-4xl lg:text-5xl">Популярни търсения</h1>
      <div className="flex justify-center items-center lg:flex-row lg:justify-center gap-6 w-[95%] overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        {popularCategories.map((category, index) => (
          <div key={index}>
            <Category
              url={category.url}
              name={category.name}
              offers={category.offers}
            />
          </div>
        ))}
      </div>
      <h1 className="text-4xl lg:text-5xl">Видове автомобили</h1>
      <div className="flex justify-center items-center lg:flex-row lg:justify-center gap-6 w-[95%] overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        {vehicleTypes.slice(0, 5).map((category, index) => (
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
