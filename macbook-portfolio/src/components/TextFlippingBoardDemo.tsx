import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "./ui/text-flipping-board";

const MESSAGES: string[] = [
  "WELCOME TO MY PORTFOLIO \nMY NAME IS \nG.R. MAHEETH VARMA \nFULL STACK DEVELOPER",
  "WELCOME TO \nMY PORTFOLIO",
  "MY NAME IS \nG.R. MAHEETH VARMA",
  "FULL STACK \nDEVELOPER",
];

export function TextFlippingBoardDemo({ sound = false }: { sound?: boolean }) {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 py-8 sm:py-12">
      <TextFlippingBoard text={MESSAGES[msgIdx]} sound={sound} />
    </div>
  );
}
export default TextFlippingBoardDemo;

