"use client";

import Button from "@/components/Button";
import ImageVideoUpload from "@/components/PublishAd/ImageVideoUpload";
import PublishLayout from "@/components/PublishAd/PublishLayout";
import { useRouter } from "next/navigation";

const Upload = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push("/listings/publish/review");
  };

  return (
    <PublishLayout currentStep={2} showBackButton={true}>
      <ImageVideoUpload />
      <div onClick={handleNext} className="z-50">
        <Button text="ПРОДЪЛЖИ" />
      </div>
    </PublishLayout>
  );
};

export default Upload;
