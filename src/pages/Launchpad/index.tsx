import PageContainer from "@/components/common/PageContainer";
import PageTitle from "@/components/common/PageTitle";

const LaunchpadPage = () => {
  return (
    <PageContainer>
      <PageTitle title={"Launchpad"} showSettings={false} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-8 w-full lg:gap-8 mt-8 lg:mt-16">
        <div className="flex flex-col gap-2"></div>
      </div>
    </PageContainer>
  );
};

export default LaunchpadPage;
