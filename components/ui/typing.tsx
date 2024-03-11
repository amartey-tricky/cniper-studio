"use client";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

interface TypingAnimationProps {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
  smartBackspace: boolean;
  cursorChar: string;
}

export default function TypingAnimation() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Photography", "Videography", "Animation"],
      typeSpeed: 300,
      backSpeed: 300,
      loop: true,
      smartBackspace: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p>
      <span ref={el}></span>
    </p>
  );
}
