import { TextSpan } from "components/shared/TextSpan";
import Link from "next/link";
import { useState } from "react";
import LoadingPage from "components/LoadingPage";

const MySkillsPage = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const sentenceOne = "Skills &".split("");
  const sentenceTwo = "Experience".split("");

  return (
    <>
      {loadingPage ? (
        <LoadingPage setLoadingPage={setLoadingPage} />
      ) : (
        <section className="w-full min-h-screen flex justify-center items-center bg-[#191919] text-white py-16 ">
          <div className=" flex lg:space-x-32 justify-center lg:flex-row flex-col container mx-auto ">
            <div className=" text-2xl max-w-md lg:text-6xl">
              <p>
                {sentenceOne.map((letter, index) => (
                  <TextSpan key={index}>{letter}</TextSpan>
                ))}
              </p>
              <p>
                {sentenceTwo.map((letter, index) => (
                  <TextSpan key={index}>{letter}</TextSpan>
                ))}
              </p>
              <p className="text-xs mt-4">
                Since beginning my journey as a freelance developer nearly 10
                years ago, I’ve done remote work for agencies, consulted for
                startups, and collaborated with talented people to create web
                products for both business and consumer use.
              </p>
              <p className="text-xs mt-2">
                I create successful responsive websites that are fast, easy to
                use, and built with best practices. The main area of my
                expertise is front-end development, HTML, CSS, JS, building
                small and medium web apps, custom plugins, features, animations,
                and coding interactive layouts
              </p>
              <p className="text-xs mt-2">
                I also have full-stack developer experience with popular
                open-source CMS like (WordPress, Drupal, Magento, Keystone.js
                and others) .
              </p>
              <p className="text-xs mt-2">
                Visit my{" "}
                <a
                  href="https://www.linkedin.com/in/huseyinerkal"
                  rel="noopener noreferrer"
                  className="text-[#08fdd8] hover:underline"
                >
                  LinkedIn
                </a>{" "}
                profile for more details or just{" "}
                <Link href="/contact">
                  <a className="text-[#08fdd8] hover:underline">contact</a>
                </Link>{" "}
                me.
              </p>
            </div>
            <ul className="flex flex-col justify-center  mt-8 lg:mt-0 font-bold">
              <li className="w-72 mt-2">
                Front-end
                <p className="mt-2 bg-[#f14b67] h-[0.15rem] animate-skills"></p>
              </li>
              <li className="w-72 mt-2">
                ReactJS
                <p className="mt-2 bg-[#08fdd8] h-[0.15rem] animate-skills"></p>
              </li>
              <li className="w-64 mt-2">
                NextJS
                <p className="mt-2 bg-[#d26cd5] h-[0.15rem] animate-skills"></p>
              </li>
              <li className="w-64 mt-2">
                TypeScript
                <p className="mt-2 bg-blue-500  h-[0.15rem] animate-skills"></p>
              </li>
              <li className="w-72 mt-2">
                JavaScript
                <p className="mt-2 bg-yellow-500 h-[0.15rem] animate-skills"></p>
              </li>
              <li className="w-72 mt-2">
                Tailwind
                <p className="mt-2 bg-pink-500 h-[0.15rem] animate-skills"></p>
              </li>
              <li className="w-64 mt-2">
                Bootstrap
                <p className="mt-2 bg-orange-300 h-[0.15rem] animate-skills"></p>
              </li>
              <li className="w-72 mt-2">
                CSS
                <p className="mt-2 bg-green-400 h-[0.15rem] animate-skills"></p>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default MySkillsPage;
