import ChevronDown from "assets/icons/ChevronDownIcon";
import Image from "next/image";
import { useState } from "react";
import ParticlesComponent from "./ParticlesComponent";
import { TextSpan } from "../../shared/TextSpan";
import Button from "components/shared/Button";

const SectionOne = () => {
  const [soundState, setSoundState] = useState(false);
  const sentenceOne = "Hi,".split("");
  const sentenceTwo = "I'm Hüseyin".split("");
  const sentenceThree = "web developer".split("");

  return (
    <section className="w-full min-h-screen max-h-screen text-white relative overflow-x-hidden overflow-hidden">
      <p className="absolute right-4 top-4 font-bold text-lg z-30">
        Sound{" "}
        <span
          className={`${
            !soundState ? "text-red-500" : "text-green-500 "
          } cursor-pointer`}
          onClick={() => setSoundState((prev) => !prev)}
        >
          {soundState ? "ON" : "OFF"}
        </span>
      </p>
      <div className="absolute right-0 top-24 z-30 w-32 h-auto">
        <div className="relative w-full aspect-w-1 aspect-h-1">
          <a
            href="https://www.linkedin.com/in/huseyinerkal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/awwards.png"
              alt="awwards"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="relative container mx-auto flex flex-col h-full justify-center items-start xs:text-2xl sm:text-6xl lg:text-8xl">
          <div>
            {sentenceOne.map((letter, index) => (
              <TextSpan key={index}>{letter}</TextSpan>
            ))}
          </div>
          <div>
            {sentenceTwo.map((letter, index) => (
              <TextSpan key={index}>{letter}</TextSpan>
            ))}
          </div>
          <div>
            {sentenceThree.map((letter, index) => (
              <TextSpan key={index}>{letter}</TextSpan>
            ))}
          </div>
          <p className="text-xs sm:text-lg font-bold mt-1 text-[#A5A5A5]">
            Front End Developer / React Expert
          </p>
          <Button text="Contact Me!" />
        </div>
      </div>
      <div className="top-0 z-[-1] left-0 bottom-0 absolute w-full h-full">
        <ParticlesComponent id="tsparticles" />
      </div>
      <div className="text-xs animate-bounce w-5 h-5 absolute bottom-10 left-0">
        <ChevronDown />
      </div>
      <div className="text-xs animate-bounce w-5 h-5 absolute bottom-10 right-0">
        <ChevronDown />
      </div>
    </section>
  );
};

export default SectionOne;
