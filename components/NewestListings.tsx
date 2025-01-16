import React from "react";
import ListingThumbnail from "./ListingThumbnail";
import { newestListings } from "@/utils/constants";

const NewestListings = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-lg mx-auto px-4 pb-8 lg:px-0">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="w-[80%] lg:w-full flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl lg:text-4xl text-center">
            Най-новите обяви за
          </h1>
          <span className="text-mobilePrimary text-4xl whitespace-nowrap">
            Автомобили и Джипове
          </span>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
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
