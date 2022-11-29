import Button from "components/shared/Button";
import { TextSpan } from "components/shared/TextSpan";
import Image from "next/image";
import Link from "next/link";

const SectionTwo = ({ work }: { work: boolean }) => {
  const portfolioData = [
    { src: "/images/brandcolors.png", position: "left" },
    { src: "/images/dashboard.png", position: "left" },
    { src: "/images/filterapp.png", position: "center" },
    { src: "/images/gmailclone.png", position: "left" },
    { src: "/images/memory.png", position: "center" },
    { src: "/images/teslaclone.png", position: "center" },
  ];
  const sentence = "My Portfolio".split("");

  return (
    <>
      <section
        className={`${
          work
            ? "min-h-screen w-full bg-[#181818] py-16"
            : "w-full bg-[#181818] py-16"
        }`}
      >
        <div className="container mx-auto text-white text-2xl sm:text-6xl lg:text-8xl">
          {sentence.map((letter, index) => (
            <TextSpan key={index}>{letter}</TextSpan>
          ))}
          <div className="flex justify-between flex-wrap text-xs sm:text-sm">
            <div>
              <p className="mt-8 max-w-md">
                A small gallery of recent projects chosen by me. I ve done them
                all together with amazing people from companies around the
                globe. It s only a drop in the ocean compared to the entire
                list.
              </p>
              <p className="mt-2">
                Interested to see some more? Visit{" "}
                <span className="text-[#08fdd8] hover:underline ">
                  <Link href="/">
                    <a>my work</a>
                  </Link>
                </span>{" "}
                page.
              </p>
            </div>
            <div className="max-h-[4rem]">
              <Button text="See more!" />
            </div>
            <div className="grid grid-cols-3 mt-8 w-full overflow-hidden gap-2">
              {portfolioData.map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-w-1 aspect-h-1 before:content[''] before:w-0 before:h-full hover:before:bg-black hover:before:w-full before:z-10 before:absolute before:top-0 before:left-0 before:opacity-90 before:flex before:justify-center before:items-center hover:before:content-['View'] before:cursor-pointer before:text-[#08fdd8] transition-all before:transition-all"
                >
                  <Link href="https://github.com/hsynerkl">
                    <a>
                      <Image
                        src={item.src}
                        alt="githubItem"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={item.position}
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
