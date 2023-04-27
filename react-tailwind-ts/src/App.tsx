import { useEffect, useState } from "react";
import "./Components/global_styles/global.styles.scss";
import Cursor from "./Components/cursor/cursor";
import NavBar from "./Components/modules/navBar/navBar";
import HeroSection from "./Components/sections/hero_section/hero_section";
import { motion } from "framer-motion";

function App() {
  const [isNavBarHovered, setIsNavBarHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsNavBarHovered(true);
  };

  const handleMouseLeave = () => {
    setIsNavBarHovered(false);
  };
  return (
    <>
      <Cursor isNavBarHovered={isNavBarHovered} />
      <NavBar onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <HeroSection
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}
export default App;
