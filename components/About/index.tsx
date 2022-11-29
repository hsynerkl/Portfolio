import SectionThree from "components/Home/SectionThree";
import LoadingPage from "components/LoadingPage";
import { useState } from "react";

const AboutPage = () => {
  const [loadingPage, setLoadingPage] = useState<boolean>(true);

  return (
    <>
      {loadingPage ? (
        <LoadingPage setLoadingPage={setLoadingPage} />
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <SectionThree about={true} />
        </div>
      )}
    </>
  );
};

export default AboutPage;
