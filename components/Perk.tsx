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
        className={`w-[90%] lg:w-[880px] h-[160px] lg:h-[240px] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 shadow-md rounded-lg flex mx-auto ${
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
          className={`w-[60%] lg:w-[60%] absolute -bottom-0 lg:top-4 ${
            reverse ? "-left-24" : "-right-4 lg:-right-0"
          } `}
        >
          <Image
            src={icon}
            alt="/"
            width={800}
            height={200}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Perk;
