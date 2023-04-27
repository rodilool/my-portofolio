import { useEffect, useState } from "react";
import "./Components/global_styles/global.styles.scss";
import Cursor from "./Components/cursor/cursor";
import NavBar from "./Components/modules/navBar/navBar";
import AboutMe from "./Components/sections/about_me/about_me";
import HeroSection from "./Components/sections/hero_section/hero_section";

function App() {
  const [isNavBarHovered, setIsNavBarHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsNavBarHovered(true);
  };

  const handleMouseLeave = () => {
    setIsNavBarHovered(false);
  };

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    console.log(hiddenElements);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));

    // cleanup function to disconnect the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor isNavBarHovered={isNavBarHovered} />
      <NavBar onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <HeroSection
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <AboutMe />
    </>
  );
}
export default App;
