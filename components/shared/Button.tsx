import Link from "next/link";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="mt-4 lg:mt-10 ml-1 px-8 py-2 lg:px-16 lg:py-3 text-xs lg:text-sm border border-[#08fdd8] text-[#08fdd8] tracking-widest hover:text-black transition relative group z-10
          before:content-[''] before:flex before:justify-center before:items-center before:absolute before:bottom-0 before:left-0 before:w-0 before:h-full before:bg-[#08fdd8] before:transition-all before:-z-10  hover:before:w-full 
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full"
    >
      <Link href="#">
        <a>{text}</a>
      </Link>
    </button>
  );
};

export default Button;
