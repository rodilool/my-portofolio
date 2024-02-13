import React, { useEffect } from "react";
import "./about_me.scss";
import PP from "../../../pictures/pp.jpg";

import { setRandomColor, setColorToDefault } from "../../hooks/random_color";

interface AboutMeProps {
  onMouseOver: any;
  onMouseLeave: any;
}

interface AboutMeState {}

function AboutMe({ onMouseOver, onMouseLeave }: AboutMeProps) {
  return (
    <section className="about_section" id="about">
      <div className="content">
        <div className="title hidden">
          <h1>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              A
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              B
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              O
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              U
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              T
            </span>
            <span>J</span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              M
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              E
            </span>
          </h1>
        </div>
        <div className="about hidden">
          <h1 className="hidden">
            Rodrigo
            <br />
            Seborro
          </h1>
          <p className="hidden">
            I am an enthusiastic Web Developer.<br></br> Since I've started this
            path, officially on October 2022, I've developed a vairiety of
            skills through not only courses with CodeAcademy and Master D, but
            also by self-taught, by making mistakes and pushing the limits on
            what I can do through every single project.
          </p>
          <a
            href="https://drive.google.com/file/d/1V-DWwrQ1C3L6ZjjqgvPwIss4FYX0IM6c/view?usp=sharing"
            target="_blank"
            className="hidden"
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            My curriculum
          </a>
          <div className="row">
            <img alt="Profile Picture hidden" src={PP}></img>
            <div className="funFacts hidden">
              <div>
                <h2>FUN FACTS:</h2>
                <ul>
                  <li>
                    My fascinations with computers started when I got my first
                    desktop as a kid and wanted to repair it on my own.
                  </li>
                  <li>
                    I started my programming journey with basics on Python
                    before finding Web Development.
                  </li>
                  <li>
                    One thing I love about developers is how open everyone is to
                    help each other and work together.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
