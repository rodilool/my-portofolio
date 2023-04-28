import React from "react";
import { useState, useEffect } from "react";
import "./navbar.scss";

interface nav_BarProps {
  onMouseOver: any;
  onMouseLeave: any;
}

interface nav_BarState {}

function NavBar({ onMouseOver, onMouseLeave }: nav_BarProps) {
  const [stickyClass, setStickyClass] = useState("");

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 1 ? setStickyClass("scroll") : setStickyClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, [window.scrollY]);

  return (
    <nav className={`${stickyClass}`}>
      <div className="logo ">
        <a href="#main" onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave}>
          <h1 /*onClick={toggleTheme}*/>RS</h1>
        </a>
      </div>
      <a
        className="contact-button"
        href="#contacts"
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <div className="contact" id="swithTheme contact">
          CONTACTS
        </div>
      </a>
    </nav>
  );
}
export default NavBar;
