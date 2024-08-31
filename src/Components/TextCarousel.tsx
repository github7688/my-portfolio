"use client"
import React, { useEffect, useState } from "react";

const TextCarousel = () => {
  const [text, setText] = useState("Front End Developer");
  const texts = [
    "Front End Developer",
    "Full Stack Developer",
    "Mern Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => {
        const currentIndex = texts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return <span>{text}</span>;
};

export default TextCarousel;