import { animate } from "motion/react";
import { ElementType, HTMLAttributes, useEffect, useState } from "react";

export interface TypingTextProps<
  T extends keyof HTMLElementTagNameMap,
> extends HTMLAttributes<T> {
  text: string;
  as: T;
  onAnimateEnd?(): void;
}

export default function TypingText<T extends keyof HTMLElementTagNameMap>({
  text,
  as,
  onAnimateEnd,
  ...props
}: TypingTextProps<T>) {
  const Node = as as ElementType;
  const [displayText, setDisplayText] = useState("");
  const speed = 0.1;

  useEffect(() => {
    setDisplayText("");

    const controls = animate(0, text.length, {
      duration: text.length * speed,
      ease: "linear",
      onUpdate: (latest) => {
        setDisplayText(text.slice(0, Math.floor(latest)));
      },
    });

    return () => controls.stop();
  }, [text, speed]);

  useEffect(() => {
    if (text === displayText && onAnimateEnd) onAnimateEnd();
  }, [displayText, text, onAnimateEnd]);

  return (
    <Node {...props}>
      <>
        {displayText}
        <span className="animate-[pulse_0.8s_infinite] ml-0.5 font-bold">
          |
        </span>
      </>
    </Node>
  );
}
