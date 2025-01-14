"use client";

import MyListingCard from "@/components/UI/MyListingCard";
import { useAuth } from "@/context/AuthContext";
import { Listing } from "@/utils/constants";
import React, { useEffect, useState } from "react";

const MyListingsPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserListings = async () => {
      if (!user?.id) {
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `/api/listings/getUserListingById?userId=${user.id}`
        );
        const data = await response.json();

        if (response.ok) {
          setListings(data);
        } else {
          console.error("Error fetching user listings", data.error);
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
  }, [user?.id]);

  return (
    <section className="basicSection !max-w-4xl">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-3xl">Моите обяви</h1>
      </div>
      <div className="w-full flex flex-col justify-start items-start py-14">
        <p>Списък и управление на публикуваните от Вас обяви.</p>
        <p>Имате {listings.length} активни обяви.</p>
      </div>
      <div className="w-full flex flex-col gap-4 items-center relative">
        {loading ? (
          <p className="text-2xl text-mobileDarkGray">
            Зареждане на обявите...
          </p>
        ) : listings.length > 0 ? (
          listings.map((listing) => (
            <MyListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <p className="text-2xl text-mobileDarkGray">
            Нямате публикувани обяви.
          </p>
        )}
        <div className="w-32 h-8 bg-mobilePrimary text-white flex justify-center items-center rounded-tr-2xl rounded-tl-2xl absolute -top-8 left-6">
          Активни обяви
        </div>
      </div>
    </section>
  );
};

export default MyListingsPage;
