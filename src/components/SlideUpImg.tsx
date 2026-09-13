import { motion } from "motion/react";

export default function SlideUpImg({
  src,
  delay,
  bigger,
}: {
  src: string;
  delay?: number;
  bigger?: boolean;
}) {
  return (
    <motion.img
      animate={{
        opacity: [0.2, 1],
        transform: bigger
          ? ["translateY(50%) scale(0.7)", "translateY(0%) scale(1.2)"]
          : ["translateY(50%) scale(0.7)", "translateY(0%) scale(1)"],
      }}
      src={src}
      className={`absolute object-cover inset-0 w-full h-full ${bigger ? "-z-10" : "-z-30"}`}
      transition={{
        delay,
        duration: 0.5,
      }}
    />
  );
}
