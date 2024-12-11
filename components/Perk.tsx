import Image from "next/image";
import React from "react";

const Perk = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <section>
      <div className="w-full lg:w-[880px] lg:h-[240px] bg-slate-100 rounded-md flex justify-start items-center overflow-hidden p-6">
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl text-mobileDarkGray">{title}</h3>
        </div>
        <div>
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
