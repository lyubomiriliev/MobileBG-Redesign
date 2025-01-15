import React from "react";
import {
  featuredCategories,
  popularCategories,
  vehicleTypes,
} from "@/utils/constants";
import Category from "./Category";
import CategoriesSlider from "./UI/CategoriesSlider";

const Categories = () => {
  return (
    <section className="w-full flex min-h-screen items-center flex-col max-w-screen-xl mx-auto justify-start gap-6">
      <CategoriesSlider>
        {featuredCategories.map((category, index) => (
          <div key={index}>
            <Category
              url={category.url}
              name={category.name}
              offers={category.offers}
            />
          </div>
        ))}
      </CategoriesSlider>
      <CategoriesSlider title="Популярни търсения">
        {popularCategories.map((category, index) => (
          <div key={index}>
            <Category
              url={category.url}
              name={category.name}
              offers={category.offers}
            />
          </div>
        ))}
      </CategoriesSlider>
      <CategoriesSlider title="Видове автомобили">
        {vehicleTypes.slice(0, 5).map((category, index) => (
          <div key={index}>
            <Category
              url={category.url}
              name={category.name}
              offers={category.offers}
            />
          </div>
        ))}
      </CategoriesSlider>
    </section>
  );
};

export default Categories;
