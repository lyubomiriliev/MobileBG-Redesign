"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/app/lib/supabase";
import Image from "next/image";
import ListingExtraCard from "@/components/UI/ListingExtraCard";
import { Input } from "@/components/UI/Input";
import Button from "@/components/Button";

type Listing = {
  id: string | number;
  category: string;
  brand: string;
  model: string;
  modification: string;
  tuning: string;
  engine: string;
  gearbox: string;
  vin: string;
  price: number;
  currency: string;
  mileage: number;
  location: string;
  date_year: number;
  date_month: string;
  horsePower: number;
  euro: string;
  litres: number;
  exterior_color: string;
  interior_material: string;
  interior_color: string;
  multimedia_extras: { media: string[] };
  safety_extras: { ext: string[] };
  comfort_extras: { safe: string[] };
  additional_extras: { add: string[] };
  phoneNumber: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
  imageUrls: string;
};

const ListingDetailsPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentMainImageIndex, setCurrentMainImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const { data, error } = await supabase
          .from("listings")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching listing:", error);
          return;
        }

        setListing(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  const openModal = (index: number) => {
    setModalOpen(true);
    setCurrentImageIndex(index);

    document.addEventListener("keydown", handleKeyDown);
  };

  const closeModal = () => {
    setModalOpen(false);

    document.removeEventListener("keydown", handleKeyDown);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % parsedImageUrls.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? parsedImageUrls.length - 1 : prev - 1
    );
  };

  const goToNextMainImage = () => {
    setCurrentMainImageIndex((prev) => (prev + 1) % parsedImageUrls.length);
  };

  const goToPreviousMainImage = () => {
    setCurrentMainImageIndex((prev) =>
      prev === 0 ? parsedImageUrls.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      goToNextImage();
    } else if (e.key === "ArrowLeft") {
      goToPreviousImage();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  if (loading) {
    return <p>Зареждане на обявата...</p>;
  }

  if (!listing) {
    return <p>Обявата не е намерена.</p>;
  }

  const parsedImageUrls = JSON.parse(listing.imageUrls || "[]");

  return (
    <section className="basicSection">
      <div className="innerSection min-h-screen !p-2">
        <div className="w-full flex justify-between items-center p-2 rounded-md">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl text-mobilePrimary font-semibold">
              {listing.price} {listing.currency}
            </h1>
            <h1 className="text-mobilePrimary text-lg">
              Цената е с включено ДДС
            </h1>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-semibold">
              {listing.brand} {listing.model} {listing.engine}{" "}
              {listing.modification} {listing.tuning}
            </h1>
            <h1 className="text-lg">Намира се в {listing.location}</h1>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-2xl text-mobilePrimary font-semibold">
              {listing.phoneNumber}
            </h1>
            <h1 className="text-mobilePrimary text-lg">
              Изпрати e-mail до продавача
            </h1>
          </div>
        </div>
        <div className="w-full flex items-start">
          <div className="w-2/3 rounded-xl relative">
            <Image
              width={500}
              height={500}
              alt={listing.brand}
              src={parsedImageUrls[currentMainImageIndex]}
              className="object-cover w-[700px] h-[700px] rounded-xl p-2 select-none cursor-pointer"
              onClick={() => openModal(currentMainImageIndex)}
            />
            <div
              onClick={goToNextMainImage}
              className="bg-black/40 hover:bg-black/90 cursor-pointer duration-300 transition-all ease-in w-12 h-12 flex justify-center items-center rounded-tl-2xl rounded-bl-2xl text-white absolute bottom-1/2 right-2"
            >
              <FaChevronRight size={32} />
            </div>
            <div
              onClick={goToPreviousMainImage}
              className="bg-black/40 hover:bg-black/90 cursor-pointer duration-300 transition-all ease-in w-12 h-12 flex justify-center items-center rounded-tr-2xl rounded-br-2xl text-white absolute bottom-1/2 left-2"
            >
              <FaChevronLeft size={32} />
            </div>
            <div className="w-full justify-center absolute bottom-5 left-0 flex gap-2">
              {parsedImageUrls.map((_: any, index: number) => (
                <div
                  key={index}
                  onClick={() => openModal(currentMainImageIndex)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentMainImageIndex
                      ? "bg-mobilePrimary"
                      : "bg-white"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 w-1/3 ">
            {parsedImageUrls.slice(1, 4).map((image: string, index: number) => (
              <div key={index} onClick={() => openModal(index + 1)}>
                <Image
                  width={300}
                  height={300}
                  src={image}
                  alt={`Снимка ${index}`}
                  className={`w-[350px] h-[234px] object-cover p-2 rounded-xl cursor-pointer`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-4">
          {parsedImageUrls.slice(4, 15).map((image: string, index: number) => (
            <div key={index} onClick={() => openModal(index + 4)}>
              <Image
                width={300}
                height={300}
                src={image}
                alt={`Снимка ${index}`}
                className="w-[350px] h-[234px] object-cover p-2 rounded-xl cursor-pointer"
              />
            </div>
          ))}
        </div>
        {modalOpen && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full flex justify-center items-center"
            >
              <Image
                src={parsedImageUrls[currentImageIndex]}
                alt="Fullscreen Image"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
              />
              <div
                onClick={goToNextImage}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full cursor-pointer"
              >
                <FaChevronRight size={32} />
              </div>
              <div
                onClick={goToPreviousImage}
                className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full cursor-pointer"
              >
                <FaChevronLeft size={32} />
              </div>
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-white text-3xl font-bold"
              >
                ✕
              </button>
              {/* Dots for Navigation */}
              <div className="absolute bottom-5 flex gap-2">
                {parsedImageUrls.map((_: any, index: number) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex
                        ? "bg-mobilePrimary"
                        : "bg-white"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="w-full flex justify-start items-start p-2">
          <div className="w-1/2 flex flex-col items-center justify-start">
            <div className="flex items-center justify-center py-4">
              <h1 className="text-mobilePrimary text-2xl font-bold uppercase">
                Технически данни
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <ul className="flex flex-col text-lg font-semibold gap-1 pr-5">
                <i>Дата на производство</i>
                <i>Двигател</i>
                <i>Мощност</i>
                <i>Кубатура [куб.см]</i>
                <i>Евростандарт</i>
                <i>Категория</i>
                <i>Пробег [км]</i>
                <i>Цвят</i>
              </ul>
              <ul className="flex flex-col text-lg gap-1 ">
                <i>
                  {listing.date_month} {listing.date_year}
                </i>
                <i>{listing.engine}</i>
                <i>{listing.horsePower} к.с.</i>
                <i>{listing.litres}</i>
                <i>{listing.euro}</i>
                <i>{listing.category}</i>
                <i>{listing.mileage} км</i>
                <i>{listing.exterior_color}</i>
              </ul>
            </div>
          </div>
          <ListingExtraCard title="Безопасност">
            {listing.safety_extras.ext.map((safe, index) => (
              <div key={index}>
                <li className="list-none">{safe}</li>
              </div>
            ))}
          </ListingExtraCard>
        </div>
        <div className="w-full flex justify-center items-start">
          <ListingExtraCard title="Екстри и комфорт">
            {listing.comfort_extras.safe.map((comf, index) => (
              <div key={index}>
                <li className="list-none">{comf}</li>
              </div>
            ))}
          </ListingExtraCard>
          <ListingExtraCard title="Мултимедия и устройства">
            {listing.multimedia_extras.media.map((media, index) => (
              <div key={index}>
                <li className="list-none">{media}</li>
              </div>
            ))}
          </ListingExtraCard>
        </div>
        <div className="w-full flex justify-center items-start">
          <ListingExtraCard title="Други екстри">
            {listing.additional_extras.add.map((addExtra, index) => (
              <div key={index}>
                <li className="list-none">{addExtra}</li>
              </div>
            ))}
          </ListingExtraCard>
        </div>
        <div className="w-full flex flex-col justify-center items-center py-10">
          <h1 className="text-2xl mb-4">Допълнителна информация</h1>
          <div className="w-2/3 min-h-80 flex justify-center items-start p-4 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 border-[1px] border-slate-200 rounded-lg">
            {listing.description}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-mobilePrimary text-2xl">
            Контакт с продавача /частно лице/
          </h1>
          <div className="flex items-center gap-2">
            <p className="">
              <FaPhoneAlt size={24} />
            </p>
            <h1 className="text-2xl">{listing.phoneNumber}</h1>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center py-10">
          <h1 className="text-2xl uppercase text-mobilePrimary py-4 font-medium">
            ИЗПРАТИ ЗАПИТВАНЕ КЪМ ПРОДАВАЧА
          </h1>
          <div className="w-full flex items-center gap-4 px-2">
            <div className="w-1/4 flex flex-col">
              <Input
                label="Вашето Име"
                placeholder="Име..."
                value={formData.name}
                onChange={(value) => handleChange("name", value)}
              />
              <Input
                label="Вашият Телефон"
                placeholder="Телефон..."
                value={formData.phone}
                onChange={(value) => handleChange("phone", value)}
              />
              <Input
                label="Вашият E-Mail"
                placeholder="E-mail..."
                value={formData.email}
                onChange={(value) => handleChange("email", value)}
              />
            </div>
            <div className="w-full flex h-[195px] justify-start items-start flex-col flex-1 ">
              <label htmlFor="">Запитване</label>
              <textarea
                placeholder="Максимум до 500 символа"
                className="w-full h-[195px] border-[1px] border-slate-300 resize-none p-2 rounded-lg"
                name="contact"
                id="contact"
              ></textarea>
            </div>
          </div>
          <div className="w-full flex justify-center items-center py-4">
            <Button text="ИЗПРАТИ ЗАПИТВАНЕТО" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetailsPage;
