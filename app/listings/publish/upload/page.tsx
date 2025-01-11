import ImageVideoUpload from "@/components/PublishAd/ImageVideoUpload";
import PublishLayout from "@/components/PublishAd/PublishLayout";

const Upload = () => {
  return (
    <PublishLayout currentStep={2} showBackButton={true}>
      <ImageVideoUpload />
    </PublishLayout>
  );
};

export default Upload;
