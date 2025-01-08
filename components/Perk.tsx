import Image from "next/image";
import React from "react";

const Perk = ({
  title,
  icon,
  reverse,
}: {
  title: string;
  icon: string;
  reverse: boolean;
}) => {
  return (
    <section>
      <div
        className={`w-full lg:w-[880px]  lg:h-[240px] bg-slate-100 rounded-md flex ${
          reverse ? "flex-row-reverse" : "fler-row"
        } justify-between items-center overflow-hidden p-6 relative`}
      >
        <div className="w-2/4 lg:w-1/4">
          <h3
            className={`text-base lg:text-xl text-mobileDarkGray ${
              reverse ? "text-right" : "text-left"
            }`}
          >
            {title}
          </h3>
        </div>
        <div
          className={`w-[80%] lg:w-[80%] absolute bottom-0 ${
            reverse ? "-left-4" : "-right-24"
          } `}
        >
          <Image
            src={icon}
            alt="/"
            width={800}
            height={200}
            className="w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Perk;
