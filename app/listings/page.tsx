"use client";
import MyListingCard from "@/components/UI/MyListingCard";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Listing = {
  id: string | number;
  category: string;
  brand: string;
  model: string;
  modification: string;
  tuning: string;
  engine: string;
  gearbox: string;
  vin: string;
  price: number;
  currency: string;
  mileage: number;
  location: string;
  date_year: number;
  date_month: string;
  exterior_color: string;
  interior_material: string;
  interior_color: string;
  multimedia_extras: [];
  safety_extras: [];
  comfort_extras: [];
  additionalExtras: [];
  description: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
  imageUrls: string;
};

const MyListingsPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  console.log(user);

  if (!user?.id) {
    window.location.href = "/login";
  }

  useEffect(() => {
    const fetchUserListings = async () => {
      if (!user?.id) {
        return;
      }

      try {
        const response = await fetch(
          `/api/listings/getUserListingById?userId=${user.id}`
        );
        const data = await response.json();

        if (response.ok) {
          setListings(data);
        } else {
          console.error("Error fetch user listings", data.error);
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

  if (loading) {
    return <p>Зареждане на обявите...</p>;
  }

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
        {listings.length > 0 ? (
          listings.map((listing) => (
            <MyListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <p>Все още нямате публикувани обяви.</p>
        )}
        <div className="w-32 h-8 bg-mobilePrimary text-white flex justify-center items-center rounded-tr-2xl rounded-tl-2xl absolute -top-8 left-6">
          Активни обяви
        </div>
      </div>
    </section>
  );
};

export default MyListingsPage;
