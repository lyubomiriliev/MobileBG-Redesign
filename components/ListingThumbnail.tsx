import Image from "next/image";
import React from "react";

interface ListingThumbnailProps {
  title: string;
  price: string;
  kilometers: string;
  listingImg: string;
  region: string;
  datePosted: string;
  isVip?: boolean;
  isTop?: boolean;
}

const ListingThumbnail: React.FC<ListingThumbnailProps> = ({
  title,
  price,
  kilometers,
  listingImg,
  region,
  datePosted,
  isVip,
  isTop,
}) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div
        className={`${
          isVip
            ? "p-[2px] bg-mobileVIP rounded-[10px]"
            : isTop
            ? "p-[2px] bg-mobilePrimary rounded-[10px]"
            : ""
        }`}
      >
        <div className="w-48 h-36 relative rounded-md overflow-hidden">
          <Image
            src={listingImg}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full absolute inset-0 object-cover"
          />
          {isVip && (
            <div className="bg-mobileVIP w-10 flex justify-center items-center rounded-tl-md rounded-br-md z-20 absolute bottom-0 right-0">
              <h3 className="text-white text-xl font-bold">VlP</h3>
            </div>
          )}
          {isTop && (
            <div className="bg-mobilePrimary w-10 flex justify-center items-center rounded-tl-md rounded-br-md z-20 absolute bottom-0 right-0">
              <h3 className="text-white text-xl font-bold">TOP</h3>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start justify-start">
        <h3>{title}</h3>
        <div className="flex items-center gap-2">
          <h4>{price}</h4>
          <h4>{kilometers}</h4>
        </div>
        <h4>{region}</h4>
        <h4>{datePosted}</h4>
      </div>
    </section>
  );
};

export default ListingThumbnail;
