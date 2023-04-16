import React from "react";

interface Props {}
interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <main className="main-section" id="swithTheme">
        <div className="content">
          <h1 id="swithTheme">
            Hey, I'm{" "}
            <span className="glow-effect name" id="swithTheme">
              Rodrigo Seborro
            </span>
            . <br />
            <span className="iam" id="swithTheme">
              And I'm a Front End Developer.
            </span>
            <br /> <br />
            Welcome to my{" "}
            <span className="glow-effect world" id="swithTheme">
              WORLD
            </span>
            <span className="exclamation" id="swithTheme">
              !
            </span>
          </h1>
          <div className="button-section">
            {/* might import nav link for this */}
            <a href="/projects">
              <div className="button projects">
                {/* <div className="line"></div>
                <div className="arrow"></div> */}
                <p>PROJECTS</p>
              </div>
            </a>

            <a href="/about-me">
              {" "}
              <div className="button about-me">
                {/* <div className="line"></div>
                <div className="arrow"></div> */}

                <p>ABOUT ME</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
