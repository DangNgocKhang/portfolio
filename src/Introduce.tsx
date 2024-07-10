import React, { useState, useEffect } from "react";
import "./scss/Introduce.scss";

const Introduce = () => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const texts: string[] = [
      "'m not afraid of challenges💪.",
      " always improve myself every day💖🌟.",
      " have good listening and communication skills 💬.",
    ];
    if (!isDeleting && charIndex < texts[index].length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 10);
      return () => clearTimeout(timer);
    } else if (!isDeleting && charIndex === texts[index].length) {
      const timer = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [charIndex, isDeleting, index]);

  return (
    <div className="introduce">
      I'm a <span>Frontend Developer</span> who wants to create creative,
      aesthetic, and professional products.
      <br /> As a young person, I<span>{displayedText}</span>
      <span className="cursor">_</span>
    </div>
  );
};

export default Introduce;
