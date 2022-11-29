import SectionFour from "components/Home/SectionFour";
import LoadingPage from "components/LoadingPage";
import { useState } from "react";

const ContactPage = () => {
  const [loadingPage, setLoadingPage] = useState<boolean>(true);

  return (
    <>
      {loadingPage ? (
        <LoadingPage setLoadingPage={setLoadingPage} />
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <SectionFour contact={true} />
        </div>
      )}
    </>
  );
};

export default ContactPage;
