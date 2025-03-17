import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercent(percent);
      setIsVisible(scrollTop >10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "20px",
            width: "70px",
            height: "70px",
            border: "none",
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            overflow: "hidden",
            transition: "background 0.2s ease-in-out",
          }}
        >
         
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: `${scrollPercent}%`,
              background: "linear-gradient(to top, blue, cyan)",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              transition: "height 0.2s ease-in-out",
            }}
          ></div>
          

         
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              border: "3px solid orange",
              backgroundColor: "rgba(25, 86, 239, 0.2)",
            }}
          ></div>
          
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
