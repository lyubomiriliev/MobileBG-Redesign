import Image from "next/image";
import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <Image
        src="/heroImg.jpg"
        alt="BGImage"
        width={1200}
        height={600}
        unoptimized
        className="w-full h-[60vh] object-cover"
      />
      <div className="flex flex-col items-center justify-center absolute">
        <div className="flex flex-col text-center">
          <h1 className="text-7xl lg:text-[96px] font-bold uppercase">
            БЪДЕТЕ <span className="text-mobilePrimary">МОБИЛНИ</span>
          </h1>
          <h3 className="text-2xl w-full px-10 md:px-0">
            Намерете това, което ви подхожда в №1 сайт за автомобили в България!
          </h3>
        </div>
        <div className="flex items-center gap-4 mt-10">
          <Button text="ТОП ОБЯВИ" variant="default" />
          <Button
            text="ТЪРСЕНЕ"
            icon="/searchIconBlack.svg"
            variant="outline"
            heroSection={true}
          />
          <Button
            text="ТЪРСЕНЕ"
            icon="/searchIconWhite.svg"
            variant="outlineWhite"
            heroSection={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
