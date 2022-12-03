import SectionOne from "components/Home/SectionOne/index";
import SectionTwo from "components/Home/SectionTwo";
import LoadingPage from "components/LoadingPage";
import Head from "next/head";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const [loadingPage, setLoadingPage] = useState(true);
  //test
  const SectionThree = dynamic(() => import("components/Home/SectionThree"));
  const SectionFour = dynamic(() => import("components/Home/SectionFour"));
  //test
  return (
    <>
      <Head>
        <title>HE | Front End Developer</title>
      </Head>
      <>
        {loadingPage ? (
          <LoadingPage setLoadingPage={setLoadingPage} />
        ) : (
          <>
            <SectionOne />
            <SectionTwo work={false} />
            <Suspense>
              <SectionThree about={false} />
            </Suspense>
            <Suspense>
              <SectionFour contact={false} />
            </Suspense>
          </>
        )}
      </>
    </>
  );
}
