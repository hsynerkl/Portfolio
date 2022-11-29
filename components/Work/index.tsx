import SectionTwo from "components/Home/SectionTwo";
import LoadingPage from "components/LoadingPage";
import { useState } from "react";

const WorkPage = () => {
  const [loadingPage, setLoadingPage] = useState<boolean>(true);

  return (
    <>
      {loadingPage ? (
        <LoadingPage setLoadingPage={setLoadingPage} />
      ) : (
        <SectionTwo work={true} />
      )}
    </>
  );
};

export default WorkPage;
