import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  /** ms per character */
  speed?: number;
  /** ms paused on a complete word */
  pause?: number;
  className?: string;
}

/** Subtle typing effect cycling through phrases. */
export const Typewriter = ({ words, speed = 80, pause = 1600, className }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
        } else if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        } else {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        }
      },
      done ? pause : deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[0.9em] -mb-[2px] ml-0.5 bg-primary animate-blink" />
    </span>
  );
};
