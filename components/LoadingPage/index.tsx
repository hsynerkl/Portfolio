import { useEffect } from "react";

interface loadingPageProps {
  setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingPage = ({ setLoadingPage }: loadingPageProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingPage(false);
    }, 1500);
    return () => clearInterval(timer);
  });

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#191919]">
      <div className="relative mb-72">
        <p className="absolute -left-[2rem] -top-[1.10rem] text-8xl font-black text-[#08fdd8]">
          H
        </p>
        <p className=" absolute -left-[2.10rem] -top-[1rem] text-8xl font-black text-[rgb(241,75,103)]">
          H
        </p>
        <div className="absolute top-20 -left-14  w-32 tracking-widest text-xs text-white whitespace-nowrap">
          <p>Hüseyin is thinking</p>
          <div className=" bg-[#f14b67] h-[0.15rem] animate-loading mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
