import { useAuth } from "@/context/AuthContext";
import { useListingContext } from "@/context/ListingContext";

export const handleSignOut = async () => {
  const { session, signOut } = useAuth();
  const { clearImages } = useListingContext();

  try {
    await signOut();
    clearImages();
    localStorage.removeItem("previewUrls");
    window.location.href = "/";
    alert("Logged out successfully");
  } catch (error) {
    console.error(error);
  }
};
