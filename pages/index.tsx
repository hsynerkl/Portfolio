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
  const SectionTwo = dynamic(() => import("components/Home/SectionTwo"));
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
        <script
          async
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="hsynerkl"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#FF5F5F"
          data-position="Right"
          data-x_margin="30"
          data-y_margin="18"
        ></script>
      </Head>
      <>
        {understandState ? (
          <>
            {loadingPage ? (
              <LoadingPage setLoadingPage={setLoadingPage} />
            ) : (
              <>
                <SectionOne />
                <Suspense>
                  <SectionTwo work={false} />
                </Suspense>
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
