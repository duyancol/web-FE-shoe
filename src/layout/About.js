import React, { useEffect, useState } from "react";
import AboutDesktop from "./AboutDesTop"; 
import AboutMobile from "./AboutMobile"; 

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
    </>
  );
}
