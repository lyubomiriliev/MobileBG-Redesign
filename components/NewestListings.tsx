import React from "react";
import ListingThumbnail from "./ListingThumbnail";
import { newestListings } from "@/utils/constants";

const NewestListings = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-xl mx-auto px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="w-[80%] lg:w-full">
          <h1 className="text-3xl lg:text-4xl text-center">
            Най-новите обяви за Автомобили и Джипове
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {newestListings.map((listing, index) => (
            <div key={index}>
              <ListingThumbnail
                title={listing.title}
                price={listing.price}
                kilometers={listing.kilometers}
                listingImg={listing.listingImg}
                datePosted={listing.datePosted}
                region={listing.region}
                isTop={listing.isTop}
                isVip={listing.isVip}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestListings;
