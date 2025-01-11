import PublishLayout from "@/components/PublishAd/PublishLayout";
import SuccessPage from "@/components/PublishAd/SuccessPage";
import React from "react";

const PublishedPage = () => {
  return (
    <PublishLayout currentStep={3} showBackButton={true}>
      <SuccessPage />
    </PublishLayout>
  );
};

export default PublishedPage;
