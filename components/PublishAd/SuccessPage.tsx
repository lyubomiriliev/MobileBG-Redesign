import ListingReview from "@/components/PublishAd/ListingReview";
import { successLinks } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-centeri items-center py-4 gap-4">
        <h1 className="text-xl lg:text-2xl text-center max-w-md">
          Поздравления! Вашата обява вече е видима в най-големия сайт за
          автомобили в България.
        </h1>
      </div>
      <ListingReview />
      <div className="flex items-center gap-4">
        {successLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SuccessPage;
