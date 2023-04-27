import React from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

interface CursorProps {
  isNavBarHovered: boolean;
}
const Cursor = ({ isNavBarHovered }: CursorProps) => {
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - 9;
      const mouseY = clientY - 9;
      cursorRef.current &&
        (cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className={`cursor${isNavBarHovered ? " hover" : ""}`}
      id="cursor"
    />
  );
};

export default Cursor;
