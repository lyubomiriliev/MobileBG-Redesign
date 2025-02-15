import Image from "next/image";
import React from "react";

const NewUsed = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mx-auto py-8">
      <div className="w-full flex flex-col max-w-screen-lg justify-center items-center">
        <div className="py-6 w-[80%] text-center lg:w-full">
          <h1 className="text-4xl lg:text-4xl">
            Открийте вашия следващ{" "}
            <span className="text-mobilePrimary font-semibold">автомобил</span>
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/newUsedPNG2.png"
            alt="NewUsedCoverImg"
            width={800}
            height={400}
            unoptimized
            className="w-full lg:rounded-xl"
          />
        </div>
        <div className="w-full lg:w-2/3 text-center flex justify-center mt-10 items-center mx-auto px-6 lg:px-0">
          <p className="text-mobileDarkGray text-lg lg:text-xl">
            Mobile.bg е водещият сайт за автомобили в България, където можете да
            намерите богат избор от нови и употребявани автомобили. С над 200
            000 онлайн предложения и обяви, актуализирани ежедневно, ние
            гарантираме, че ще откриете перфектния автомобил, който отговаря на
            вашите нужди и бюджет.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewUsed;
