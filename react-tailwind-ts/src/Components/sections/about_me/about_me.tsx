import React, { useEffect } from "react";
import "./about_me.scss";
import PP from "../../../pictures/pp.jpg";

import {
  getRandomColor,
  setRandomColor,
  setColorToDefault,
} from "../../hooks/random_color";

interface AboutMeProps {}

interface AboutMeState {}

function AboutMe() {
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
            I am an enthusiastic Front-end engineer.<br></br> I am always
            looking to expand my knowledge by self-motivation and
            self-discipline while also integrate myself with other engineers so
            we can grow together. I’m always open to feedback because no one
            learns by receiving pats on the back.
          </p>
          <a
            href="https://drive.google.com/file/d/1CXF5uenh0bScMCCLVU7590woWhs6htc0/view?usp=share_link"
            target="_blank"
            className="hidden"
          >
            My curriculum
          </a>
          <div className="row">
            <img alt="Profile Picture hidden" src={PP}></img>
            <div className="funFacts hidden">
              <div>
                <h4>FUN FACTS:</h4>
                <ul>
                  <li>
                    My fascinations with computers started when I got my first
                    desktop as a kid and wanted to repair it on my own.
                  </li>
                  <li>
                    I started my programming journey with Python basics before
                    finding Web Development.
                  </li>
                  <li>
                    I’m a self-taught developer but it never held me back.
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
