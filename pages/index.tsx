import SectionOne from "components/Home/SectionOne/index";
import SectionTwo from "components/Home/SectionTwo";
import LoadingPage from "components/LoadingPage";
import Head from "next/head";
import { useState, Suspense, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import Welcome from "components/Welcome";

export default function Home() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [understandState, setUnderstandState] = useState(false);

  //test
  const SectionThree = dynamic(() => import("components/Home/SectionThree"));
  const SectionFour = dynamic(() => import("components/Home/SectionFour"));
  //test

  useLayoutEffect(() => {
    let understandValue = JSON.parse(localStorage.getItem("understand")!);
    console.log(understandValue);
    understandValue ? setUnderstandState(true) : setUnderstandState(false);
  }, [understandState]);

  return (
    <>
      <Head>
        <title>HE | Front End Developer</title>
      </Head>
      <>
        {understandState ? (
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
        ) : (
          <Welcome setUnderstandState={setUnderstandState} />
        )}
      </>
    </>
  );
}
