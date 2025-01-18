"use client";

import React, { useEffect, useState } from "react";
import ListingThumbnail from "./ListingThumbnail";
import { Listing } from "@/utils/constants";
import Link from "next/link";

const NewestListings = () => {
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchUserListings = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/listings/getAllListings");
        const data = await response.json();

        if (response.ok) {
          setListings(data);
        } else {
          console.error("Error fetching listings", data.error);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching listings:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserListings();
  }, []);

  console.log(listings);

  return (
    <section className="w-full flex flex-col justify-start items-center max-w-screen-lg mx-auto px-4 pb-8 lg:px-0">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl lg:text-4xl text-center">
            Най-новите обяви за
          </h1>
          <span className="text-mobilePrimary text-4xl whitespace-nowrap">
            Автомобили и Джипове
          </span>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.slice(0, 6).map((ad, index) => (
            <Link href={`/listing/${ad.id}`} key={index}>
              <ListingThumbnail
                title={ad.brand + " " + ad.model + " " + ad.modification}
                price={ad.price + ad.currency}
                kilometers={ad.mileage}
                listingImg={ad.imageUrls}
                carDate={ad.date_year}
                region={ad.location}
                datePosted={ad.created_at}
                isPromoted={ad.isPromoted}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestListings;
