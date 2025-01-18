"use client";

import Button from "@/components/Button";
import MyListingCard from "@/components/UI/MyListingCard";
import { supabase } from "@/lib/supabase";
import { Listing } from "@/utils/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BrowseListingsPage = () => {
  const searchParams = useSearchParams();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(searchParams);

  const category =
    searchParams?.get("category")?.replace(/\+/g, " ") || "Всички категории";
  const brand = searchParams?.get("brand") || "Всички марки";
  const model = searchParams?.get("model") || "Всички модели";

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);

      try {
        let query = supabase.from("listings").select("*");

        if (searchParams) {
          searchParams.forEach((value, key) => {
            if (value) {
              switch (key) {
                case "category":
                  query = query.eq("category", value);
                  break;
                case "brand":
                  query = query.eq("brand", value);
                  break;
                case "model":
                  query = query.eq("model", value);
                  break;
                case "priceMin":
                  query = query.gte("price", parseInt(value));
                  break;
                case "priceMax":
                  query = query.lte("price", parseInt(value));
                  break;
                case "region":
                  query = query.eq("location", value);
                  break;
                case "yearMin":
                  query = query.gte("date_year", parseInt(value));
                  break;
                case "yearMax":
                  query = query.lte("date_year", parseInt(value));
                  break;
                case "coupe":
                  query = query.eq("coupe", value);
                  break;
                case "euro":
                  query = query.eq("euro", value);
                  break;
                case "engine":
                  query = query.eq("engine", value);
                  break;
                case "gearbox":
                  query = query.eq("gearbox", value);
                  break;
                case "color":
                  query = query.eq("exterior_color", value);
                  break;
                case "maxMileage":
                  query = query.lte("mileage", parseInt(value));
                  break;
                case "materials":
                  query = query.eq("interior_material", value);
                  break;
                case "intColor":
                  query = query.eq("interior_color", value);
                  break;
                case "safety":
                  query = query.contains("safety_extras", { ext: [value] });
                  break;
                case "comfort":
                  query = query.contains("comfort_extras", { safe: [value] });
                  break;
                case "multimedia":
                  query = query.contains("multimedia_extras", {
                    media: [value],
                  });
                  break;
                case "additional":
                  query = query.contains("additional_extras", { add: [value] });
                  break;
                case "isPromoted":
                  query = query.eq("isPromoted", value.toUpperCase());
                  break;
                default:
                  break;
              }
            }
          });
        }

        const { data, error } = await query;

        if (error) {
          console.error("Error fetching filtered listings:", error);
        } else {
          setListings(data || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [searchParams]);

  return (
    <section className="basicSection">
      <div className="w-full flex flex-col items-center py-4">
        <div className="max-w-5xl w-full h-auto flex flex-col p-4 rounded-lg bg-gradient-to-r from-slate-100 via-white to-slate-100 border-[1px] border-slate-200">
          <div className="w-full flex justify-between">
            <div className="w-full flex flex-col">
              <h1 className="text-xl lg:text-2xl text-mobileDarkGray pb-2">
                Резултат от Вашето търсене на:
              </h1>
              <div className="w-full grid grid-cols-1 lg:flex justify-start items-center lg:gap-4">
                <div className="flex justify-start items-center gap-1">
                  <h1 className="text-lg">Категория</h1>
                  <span className="font-semibold text-mobilePrimary whitespace-nowrap">
                    {category}
                  </span>{" "}
                </div>
                <div className="flex justify-start items-center gap-1">
                  <h1 className="text-lg">Марка:</h1>
                  <span className="font-semibold text-mobilePrimary">
                    {brand}
                  </span>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <h1 className="text-lg">Модел:</h1>
                  <span className="font-semibold text-mobilePrimary">
                    {model}
                  </span>
                </div>
              </div>
            </div>
            <Link
              href="/search"
              className="w-1/4 h-auto lg:flex flex-col justify-center items-center hidden"
            >
              <Button text="ОБРАТНО КЪМ ТЪРСЕНЕ" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        {!loading && listings.length > 0 ? (
          <div className=" w-full flex flex-col gap-4 justify-center items-center">
            {listings.map((listing) => (
              <MyListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="w-full min-h-[60vh] flex flex-col justify-center items-center">
            <p className="text-lg font-bold text-gray-600">
              Няма намерени обяви по зададените критерии.
            </p>
            <Link className="py-2" href="/search">
              <Button heroSection={true} text="НОВО ТЪРСЕНЕ" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseListingsPage;
