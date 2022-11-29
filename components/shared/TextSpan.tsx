import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export const TextSpan = ({ children }: { children: string }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.45, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <span className="transition font-bold hover:text-[#08fdd8] ">
      <motion.span
        animate={controls}
        onMouseOver={() => {
          if (!isPlaying) rubberBand();
        }}
        onAnimationComplete={() => setIsPlaying(false)}
      >
        {children === " " ? "\u00A0" : children}
      </motion.span>
    </span>
  );
};
