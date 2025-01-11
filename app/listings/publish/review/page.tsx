import Finalizing from "@/components/PublishAd/Finalizing";
import PublishLayout from "@/components/PublishAd/PublishLayout";

const ReviewPage = () => {
  return (
    <PublishLayout currentStep={3} showBackButton={true}>
      <Finalizing />
    </PublishLayout>
  );
};

export default ReviewPage;
