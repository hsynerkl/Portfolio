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
    <section className="w-full min-h-screen text-white relative overflow-x-hidden overflow-hidden">
      <p className="absolute right-4 top-4 font-bold text-lg z-50">
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
      <div className="absolute right-0 top-24 z-50">
        <a
          href="https://www.linkedin.com/in/huseyinerkal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/awwards.avif"
            alt="awwards"
            width={80}
            height={130}
          />
        </a>
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
          <p className="text-lg font-bold ml-1 mt-1 text-[#A5A5A5]">
            Front End Developer / React Expert
          </p>
          <Button text="Contact Me!" />
        </div>
      </div>
      <ParticlesComponent id="tsparticles" />
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
