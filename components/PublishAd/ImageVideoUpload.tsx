"use client";

import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useListingContext } from "@/context/ListingContext";

const ImageVideoUpload = () => {
  const router = useRouter();

  const { images, setImages } = useListingContext();
  const [previewUrls, setPreviewUrls] = useState<(string | null)[]>(
    Array(15).fill(null)
  ); // Track preview URLs locally

  useEffect(() => {
    // Load from localStorage on mount
    const savedPreviews = JSON.parse(
      localStorage.getItem("previewUrls") || "[]"
    );
    if (savedPreviews.length) {
      setPreviewUrls(savedPreviews);
    }
  }, []);

  console.log(images);

  const handleNext = () => {
    const uploadedImagesCount = images.filter((image) => image !== null);

    if (uploadedImagesCount.length < 3) {
      alert("Трябва да качите минимум 3 снимки");
      return;
    }

    router.push(`/listings/publish/review`);
  };

  const saveToLocalStorage = (urls: (string | null)[]) => {
    localStorage.setItem("previewUrls", JSON.stringify(urls));
  };

  const handleFileUpload = (files: FileList) => {
    const updatedImages = [...images];
    const updatedPreviews = [...previewUrls];
    let fileIndex = 0;

    for (let i = 0; i < updatedImages.length; i++) {
      if (!updatedImages[i] && fileIndex < files.length) {
        const file = files[fileIndex];
        updatedImages[i] = file;
        updatedPreviews[i] = URL.createObjectURL(file); // Generate preview URL
        fileIndex++;
      }
    }

    setImages(updatedImages);
    setPreviewUrls(updatedPreviews);
    saveToLocalStorage(updatedPreviews);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileUpload(e.target.files);
    }
  };

  const deleteImage = (index: number) => {
    const updatedImages = [...images];
    const updatedPreviews = [...previewUrls];

    updatedImages[index] = null;
    updatedPreviews[index] = null;

    setImages(updatedImages);
    setPreviewUrls(updatedPreviews);
    localStorage.setItem("previewUrls", JSON.stringify(updatedPreviews));

    // Update Redux after removing the image
    // const serializedImages = updatedImages
    //   .filter((file) => file !== null)
    //   .map((file, i) => ({
    //     name: (file as File).name,
    //     type: (file as File).type,
    //   }));
  };

  return (
    <section className="imagesSection">
      <div className="w-full flex flex-col justify-centeri items-center py-8">
        <h1 className="text-2xl lg:text-3xl">Прикачване на снимки</h1>
        <div className="w-full lg:w-2/4 flex">
          <h2 className="text-center text-lg text-mobileDarkGray pt-2">
            Добави до 15 снимки. За най-добър резултат препоръчваме снимките да
            са вертикални подходящи за мобилно устройство.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-44 h-44 border border-gray-300 rounded-md flex items-center justify-center relative"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e)}
          >
            {image || previewUrls[index] ? (
              <div className="w-full h-full object-cover">
                <Image
                  width={10}
                  height={10}
                  src={
                    image?.webkitRelativePath
                      ? URL.createObjectURL(image)
                      : previewUrls[index] || ""
                  }
                  alt={`Uploaded ${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <IoMdClose
                  size={20}
                  onClick={() => deleteImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-xl w-6 h-6 flex items-center justify-center"
                />
              </div>
            ) : (
              <>
                <label
                  htmlFor={`file-input-${index}`}
                  className="cursor-pointer"
                >
                  <span className="text-gray-400 text-4xl">+</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  multiple
                  id={`file-input-${index}`}
                  onChange={(e) => handleInputChange(e)}
                />
              </>
            )}
          </div>
        ))}
      </div>
      <div onClick={handleNext} className="z-50 mt-6">
        <Button text="ПРОДЪЛЖИ" />
      </div>
    </section>
  );
};

export default ImageVideoUpload;
