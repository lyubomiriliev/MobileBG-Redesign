"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch, updateUploadedImages } from "@/app/store/redux";

const ImageVideoUpload = () => {
  const handleNext = () => {
    router.push(`/listings/publish/review`);
  };

  const router = useRouter();
  const [images, setImages] = useState<(File | null)[]>(Array(15).fill(null));
  const dispatch = useDispatch<AppDispatch>();

  const handleFileUpload = (files: FileList) => {
    const updatedImages = [...images];
    let fileIndex = 0;

    for (let i = 0; i < updatedImages.length; i++) {
      if (!updatedImages[i] && fileIndex < files.length) {
        updatedImages[i] = files[fileIndex];
        fileIndex++;
      }
    }
    setImages(updatedImages);

    const imageUrls = updatedImages
      .filter((file) => file !== null)
      .map((file) => (file as File).name); // Store only file names or serialized data
    dispatch(updateUploadedImages(imageUrls)); // Dispatch serialized data
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();

    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files) {
      handleFileUpload(e.target.files);
    }
  };

  const deleteImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  return (
    <section className="imagesSection">
      <div className="w-full flex flex-col justify-centeri items-center py-8">
        <h1 className="text-xl lg:text-2xl">Прикачване на снимки</h1>
        <div className="w-2/4 flex">
          <h2 className="text-center text-lg lg:text-lg text-mobileDarkGray py-2">
            Добави до 15 снимки. За най-добър резултат препоръчваме снимките да
            са вертикални подходящи за мобилно устройство.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-32 h-32 border border-gray-300 rounded-md flex items-center justify-center relative"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {image ? (
              <div className="w-full h-full object-cover">
                <Image
                  width={10}
                  height={10}
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  onClick={() => deleteImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-xl w-6 h-6 flex items-center justify-center"
                >
                  &times;
                </button>
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
                  onChange={(e) => handleInputChange(e, index)}
                />
              </>
            )}
          </div>
        ))}
      </div>
      <div onClick={handleNext} className="z-50">
        <Button text="ПРОДЪЛЖИ" />
      </div>
    </section>
  );
};

export default ImageVideoUpload;
