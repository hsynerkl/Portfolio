import { TextSpan } from "components/shared/TextSpan";
import Link from "next/link";
import Animation3d from "./Animation3d";

const SectionThree = ({ about }: { about: boolean }) => {
  const sentence = "Me, Myself and I".split("");

  return (
    <section
      className={`${
        about && "h-screen py-16 justify-center flex items-center"
      } w-full py-16 bg-[#161616] overflow-hidden`}
    >
      <div
        className={`${
          about
            ? "h-screen w-screen flex justify-center container flex-col mx-auto"
            : "container flex-col mx-auto w-full h-full"
        }`}
      >
        <div className="flex text-white xs:text-2xl sm:text-6xl lg:text-8xl">
          {sentence.map((letter, index) => (
            <TextSpan key={index}>{letter}</TextSpan>
          ))}
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="max-w-md mt-8 text-xs  md:text-sm text-white mr-8">
            <p>
              Since Adobe Flash was a complete innovation, alongside with CSS
              1.0 and HTML 4.01 as standards of the current web I ve been
              passionate about web.
            </p>
            <p className="mt-2">
              For over a decade I had many opportunities to work in a vast
              spectrum of{" "}
              <Link href="/skills">
                <a className="text-[#08fdd8] hover:underline">
                  web technologies{" "}
                </a>
              </Link>
              what let me gather a significant amount of various experience.
              Working for companies and individuals around the globe I met and
              learnt from amazing and ambitious people.
            </p>
          </div>
          <div className="max-w-xs">
            <Animation3d />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
