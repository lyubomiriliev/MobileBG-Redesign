import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center relative">
      <Image
        src="/heroImg.jpg"
        alt="BGImage"
        width={1200}
        height={600}
        unoptimized
        className="w-full h-[72vh] lg:h-[60vh] object-cover object-right"
      />
      <div className="w-full flex flex-col items-center justify-center absolute">
        <div className="w-full flex flex-col text-center justify-start lg:justify-center items-center mt-24">
          <h1 className="text-7xl lg:text-[96px] font-bold uppercase">
            БЪДЕТЕ <span className="text-mobilePrimary">МОБИЛНИ</span>
          </h1>
          <h3 className="text-2xl w-full px-10 md:px-0">
            Намерете това, което ви подхожда в №1 сайт за автомобили в България!
          </h3>
          <div className="flex items-center gap-4 mt-5">
            <Link href="/browse/listings/top">
              <Button text="ТОП ОБЯВИ" variant="default" />
            </Link>
            <Link href="/search">
              <Button
                text="ТЪРСЕНЕ"
                icon="/searchIconBlack.svg"
                variant="outline"
                heroSection={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
