import React, { useEffect, useState } from "react";
import "../AnimasiIn.css"; // pastikan path sesuai

const AnimatedSection = ({ id, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [id]);

  return (
    <div
      id={id}
      className={`animated-section ${isVisible ? "animate-in" : "animate-out"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;