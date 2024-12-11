import Image from "next/image";
import React from "react";

const CarSection = () => {
  return (
    <section className="w-full h-[25vh] lg:h-[80vh] flex flex-col justify-start items-center mx-auto relative">
      <Image
        src="/images/mobileCar2.png"
        width={1920}
        height={1000}
        unoptimized
        alt="/"
        className="w-[80%] lg:w-[55%] -top-[40px] lg:-top-18 absolute -z-10"
      />
      <div>
        <h1 className="text-4xl lg:text-6xl text-white font-medium absolute bottom-10 left-[16%] lg:bottom-24 lg:left-[38%] z-20">
          Подбрани категории
        </h1>
      </div>
      <Image
        src="/images/blueVector.svg"
        width={1920}
        height={1000}
        alt="/"
        className="w-full absolute -top-[15%] lg:-top-[330px] -z-20"
      />
    </section>
  );
};

export default CarSection;
