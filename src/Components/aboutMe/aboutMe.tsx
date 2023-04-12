import React from "react";
import PP from "../../pictures/pp.jpg";

interface Props {}

interface State {}

class AboutMe extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <main className="main-about" id="swithTheme">
        <div className="circles">
          <div className="circle last">
            <div className="spin last">
              <div className="ball a"></div>
              <div className="ball b"></div>
            </div>
          </div>
          <div className="circle mid">
            <div className="spin mid">
              <div className="ball c"></div>
              <div className="ball d"></div>
              <div className="ball h"></div>
              <div className="ball i"></div>
            </div>
          </div>
          <div className="circle first">
            <div className="spin first">
              <div className="ball e"></div>
              <div className="ball f"></div>
              <div className="ball g"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="title">
            <h1>
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">T</span>
              <span> </span>
              <span className="letter">M</span>
              <span className="letter">E</span>
            </h1>
          </div>
        </div>
        <div className="information">
          <h1>Rodrigo</h1> <br />
          <h1>Seborro</h1>
          <p>
            I am an enthusiastic Front-end engineer.<br></br> I am always
            looking to expand my knowledge by self-motivation and
            self-discipline while also integrate myself with other engineers so
            we can grow together. I’m always open to constructive criticism
            because no one learns by receiving pats on the back.
          </p>
          <a
            href="https://drive.google.com/file/d/1CXF5uenh0bScMCCLVU7590woWhs6htc0/view?usp=share_link"
            target="_blank"
          >
            My curriculum
          </a>
          <div className="row">
            <img alt="Profile Picture" src={PP}></img>
            <div className="funFacts">
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
      </main>
    );
  }
}

export default AboutMe;
