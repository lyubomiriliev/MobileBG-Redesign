import Image from "next/image";
import React from "react";

interface ListingThumbnailProps {
  title: string;
  price: string;
  kilometers: number;
  listingImg: string;
  region: string;
  isPromoted: string;
  datePosted: Date;
}

const ListingThumbnail: React.FC<ListingThumbnailProps> = ({
  title,
  price,
  kilometers,
  listingImg,
  region,
  isPromoted,
  datePosted,
}) => {
  const parsedImageUrls = JSON.parse(listingImg || "[]");
  const previewImage = parsedImageUrls[0] || "/perk1.svg";
  const listingPostDate = new Date(datePosted).toISOString().split("T")[0];

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div
        className={`${
          isPromoted === "VIP"
            ? "p-[3px] bg-mobileVIP rounded-[10px]"
            : isPromoted === "TOP"
            ? "p-[3px] bg-mobilePrimary rounded-[10px]"
            : "p-[3px] bg-mobileDarkGray/50 rounded-[10px]"
        }`}
      >
        <div className="w-48 lg:w-80 h-36 lg:h-48 relative rounded-md overflow-hidden">
          <Image
            src={previewImage}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full absolute inset-0 object-cover"
          />
          {isPromoted === "VIP" ? (
            <div className="bg-mobileVIP w-10 flex justify-center items-center rounded-tl-md rounded-br-md z-20 absolute bottom-0 right-0">
              <h3 className="text-white text-xl font-bold">VlP</h3>
            </div>
          ) : isPromoted === "TOP" ? (
            <div className="bg-mobilePrimary w-10 flex justify-center items-center rounded-tl-md rounded-br-md z-20 absolute bottom-0 right-0">
              <h3 className="text-white text-xl font-bold">TOP</h3>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <div className="w-full flex justify-start items-start h-14 text-left">
          <h3 className="text-xl max-w-80 w-full font-semibold">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-mobilePrimary text-lg font-bold">{price}</h4>
          <h4>({kilometers} км)</h4>
        </div>
        <h4 className="font-semibold">{region}</h4>
        <div className="w-full flex items-center gap-1">
          <p className="text-mobileDarkGray">Качена на:</p>
          <h4 className="text-mobileDarkGray">{listingPostDate}</h4>
        </div>
      </div>
    </section>
  );
};

export default ListingThumbnail;
