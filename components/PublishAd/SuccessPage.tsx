"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SuccessPage = () => {
  const [listingId, setListingId] = useState<string | null>(null);

  useEffect(() => {
    const storedListingId = localStorage.getItem("postedListingId");
    if (storedListingId) {
      setListingId(storedListingId);
    }
  }, []);

  const successLinks = [
    {
      name: "Преглед на обявата",
      url: listingId ? `/listing/${listingId}` : "/listings",
    },
    { name: "Нова обява", url: "/listings/publish" },
    { name: "Начална страница", url: "/" },
    { name: "Моите обяви", url: "/listings" },
  ];

  return (
    <>
      <section className="w-full flex flex-col justify-between h-[70vh] p-4 lg:p-0 items-center max-w-screen-xl mx-auto relative">
        <div className="w-full flex flex-col justify-centeri items-center py-4">
          <span className="text-mobilePrimary text-6xl lg:text-7xl font-semibold uppercase mb-2">
            Поздравления!
          </span>{" "}
          <h1 className="text-2xl lg:text-3xl text-center max-w-lg text-mobileDarkGray">
            Вашата обява вече е видима в най-големия сайт за автомобили в
            България.
          </h1>
        </div>
        <div className="w-full hidden lg:block">
          <Image
            width={600}
            height={600}
            alt="SuccessImage"
            src="/newUsedPNG2.png"
            unoptimized
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 justify-center text-center gap-4 lg:gap-0">
          {successLinks.map((link, index) => (
            <Link
              className="hover:text-mobilePrimary duration-300 ease-in uppercase text-lg"
              href={link.url}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>
      <div className="w-full absolute top-[42%] lg:top-1/3 left-0 lg:hidden">
        <Image
          width={600}
          height={600}
          alt="SuccessImage"
          src="/newUsedPNG2.png"
          unoptimized
          className="w-full lg:rounded-lg"
        />
      </div>
    </>
  );
};

export default SuccessPage;
