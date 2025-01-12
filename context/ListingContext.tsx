"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ListingContextType {
  images: (File | null)[]; // Allow null
  setImages: (images: (File | null)[]) => void;
  clearImages: () => void; // Add this method
}

const ListingContext = createContext<ListingContextType | undefined>(undefined);

export const useListingContext = () => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("useListingContext must be used within a ListingProvider");
  }
  return context;
};

export const ListingProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<(File | null)[]>(Array(15).fill(null));

  const clearImages = () => {
    setImages([]); // Reset to an empty array
  };

  return (
    <ListingContext.Provider value={{ images, setImages, clearImages }}>
      {children}
    </ListingContext.Provider>
  );
};
