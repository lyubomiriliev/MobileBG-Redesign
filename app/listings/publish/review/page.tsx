"use client";

import Button from "@/components/Button";
import Finalizing from "@/components/PublishAd/Finalizing";
import ImageVideoUpload from "@/components/PublishAd/ImageVideoUpload";
import PublishLayout from "@/components/PublishAd/PublishLayout";
import { useRouter } from "next/navigation";

const ReviewPage = () => {
  const router = useRouter();

  const listingId = "52569721";

  const prices = ["(0.00лв)", "(4.99лв)", "(9.99лв)"];

  const handleNext = () => {
    router.push(`/listings/${listingId}`);
  };

  return (
    <PublishLayout currentStep={3} showBackButton={true}>
      <Finalizing />
      <div onClick={handleNext} className="z-50">
        <Button text={`ПУБЛИКУВАЙ ${prices[1]}`} />
      </div>
    </PublishLayout>
  );
};

export default ReviewPage;
