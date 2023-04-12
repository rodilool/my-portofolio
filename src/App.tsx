import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar/navBar";
import Home from "./Components/Home/home";
import AboutMe from "./Components/aboutMe/aboutMe";
import Contacts from "./Components/contacts/contacts";

interface Props {}

const App: React.FC<Props> = (props: Props) => {
  const [lightMode, setLightMode] = useState("default");

  const toggleTheme = () => {
    const localTheme = window.localStorage.getItem("lightMode");
    const savedMode = localTheme === "inverted" ? "inverted" : "default";
    if (savedMode === "default") {
      window.localStorage.setItem("lightMode", "inverted");
      setLightMode("inverted");
    } else {
      window.localStorage.setItem("lightMode", "default");
      setLightMode("default");
    }
    console.log(lightMode);
  };

  useEffect(() => {
    const localTheme: any = window.localStorage.getItem("lightMode");
    setLightMode(localTheme);
    const mainElements = document.querySelectorAll("#swithTheme");
    if (localTheme === "inverted") {
      mainElements.forEach((element) => {
        element.classList.add("is_inverted");
      });
    } else {
      mainElements.forEach((element) => {
        element.classList.remove("is_inverted");
      });
    }
  }, [lightMode]);

  return (
    <BrowserRouter>
      <NavBar toggleTheme={toggleTheme} />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route>
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
        <Route>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
