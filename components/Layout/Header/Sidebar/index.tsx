import Link from "next/link";
import { LinkedinIcon } from "assets/icons/LinkedinIcon";
import { GithubIcon } from "assets/icons/GithubIcon";
import { YoutubeIcon } from "assets/icons/YoutubeIcon";
import MenuIcon from "assets/icons/MenuIcon";
import { useEffect, useState } from "react";
import useLockBody from "utils/hooks/useLockBody";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  useLockBody(showSidebar);

  const sidebarResize = () => {
    const innerWidth = window.innerWidth;
    innerWidth >= 1024 && setShowSidebar(false);
  };

  useEffect(() => {
    setShowSidebar(false);
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener("resize", sidebarResize);
    return () => window.removeEventListener("resize", sidebarResize);
  }, []);

  return (
    <>
      <aside className="w-32 fixed top-0 hidden lg:flex min-h-screen flex-col bg-[#1d1d1d] justify-between text-white">
        <div className="bg-black" onClick={() => router.push("/")}>
          <div className="w-full flex justify-center relative cursor-pointer">
            <p className=" text-2xl absolute left-5 top-[0.10rem] lg:text-8xl font-black text-[#08fdd8]">
              H
            </p>
            <p className="text-2xl absolute left-6 lg:text-8xl font-black text-[rgb(241,75,103)]">
              H
            </p>
          </div>
          <p className="mt-24 text-md w-full font-bold text-center font-roboto">
            Hüseyin
          </p>
          <p className="mt-1 text-[.70rem] w-full text-center text-[#A5A5A5] font-roboto mb-4">
            Web Developer
          </p>
        </div>

        <ul className="text-center text-[#909096] leading-10">
          <li
            className={`${
              router.route === "/about" && "text-[#08fdd8]"
            } border-y hover:text-[#08fdd8] transition border-[#282828]`}
          >
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li
            className={`${
              router.route === "/myskills" && "text-[#08fdd8]"
            } border-y hover:text-[#08fdd8] transition border-[#282828]`}
          >
            <Link href="/myskills">
              <a>My Skills</a>
            </Link>
          </li>
          <li
            className={`${
              router.route === "/work" && "text-[#08fdd8]"
            } border-y hover:text-[#08fdd8] transition border-[#282828]`}
          >
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li
            className={`${
              router.route === "/contact" && "text-[#08fdd8]"
            } border-y hover:text-[#08fdd8] transition border-[#282828]`}
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li
            className={`${
              router.route === "/" && "text-[#08fdd8]"
            } border-y transition border-[#282828]`}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>

        <ul className="h-48 flex justify-center">
          <li className="w-4 h-4 mx-2 hover:text-[#08fdd8] transition py-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/huseyinerkal/"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li className="w-4 h-4 hover:text-[#08fdd8] mx-2 transition py-2">
            <a
              target="_blank"
              href="https://github.com/hsynerkl"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
          <li className="w-4 h-4 hover:text-[#08fdd8] mx-2 transition py-2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com"
            >
              <YoutubeIcon />
            </a>
          </li>
        </ul>
      </aside>
      <aside>
        <div
          className="w-7 h-7 text-white lg:hidden fixed top-5 cursor-pointer left-4 z-40 hover:text-[#08fdd8] transition bg-transparent"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <MenuIcon />
        </div>
        {showSidebar && (
          <div className="relative w-full h-screen overflow-hidden overflow-y-hidden">
            <div className="container mx-auto">
              <div className="z-50 fixed left-0 bottom-0 right-0 top-0 bg-black text-white ">
                <p
                  className="fixed top-4 left-5 text-2xl cursor-pointer hover:text-[#08fdd8] transition "
                  onClick={() => setShowSidebar((prev) => !prev)}
                >
                  x
                </p>
                <div
                  className="w-full py-16 flex justify-start cursor-pointer"
                  onClick={() => router.replace("/")}
                >
                  <div className="cursor-pointer relative">
                    <p className="fixed left-0 top-[8.10rem] text-8xl font-black text-[#08fdd8]">
                      H
                    </p>
                    <p className="fixed left-1 text-8xl top-32 font-black text-[rgb(241,75,103)]">
                      H
                    </p>
                  </div>
                </div>
                <div className="ml-1 w-full flex flex-col mt-24">
                  <p className="text-sm ml-2">Hüseyin</p>
                  <p className="text-xs ml-2 text-[#909096]">
                    Front End Developer / React Expert
                  </p>
                </div>
                <div className="flex w-full mt-10 flex-col ">
                  <ul className="text-center text-[#909096] leading-10">
                    <li className="border-y hover:text-[#08fdd8] transition border-[#282828]">
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li className="border-y hover:text-[#08fdd8] transition border-[#282828]">
                      <Link href="/myskills">
                        <a>My Skills</a>
                      </Link>
                    </li>
                    <li className="border-y hover:text-[#08fdd8] transition border-[#282828]">
                      <Link href="/work">
                        <a>Work</a>
                      </Link>
                    </li>
                    <li className="border-y hover:text-[#08fdd8] transition border-[#282828]">
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li className="border-y text-[#08fdd8] border-[#282828]">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                  </ul>

                  <ul className="h-48 flex justify-center mt-10">
                    <li className="w-4 h-4 mx-2 hover:text-[#08fdd8] transition py-2">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/huseyinerkal/"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon />
                      </a>
                    </li>
                    <li className="w-4 h-4 hover:text-[#08fdd8] mx-2 transition py-2">
                      <a
                        target="_blank"
                        href="https://github.com/hsynerkl"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </li>
                    <li className="w-4 h-4 hover:text-[#08fdd8] mx-2 transition py-2">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.youtube.com"
                      >
                        <YoutubeIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
