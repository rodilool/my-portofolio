import React from "react";
import moneymindful from "../../pictures/websites/moneymindful.png";
import rodrigoSeborroWebsite from "../../pictures/websites/rodrigo-seborro.png";
import comingSoon from "../../pictures/websites/coming-soon.png";

interface Props {
  setRandomColor: any;
  setColorToDefault: any;
}

interface State {}

class Projects extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <main className="main projects">
        <div className="title">
          <h1>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              P
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              R
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              O
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              J
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              E
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              C
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              T
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              S
            </span>
          </h1>
        </div>
        <div className="projects-catalog">
          <div className="project">
            <h2>MoneyMindful</h2>
            <div className="banner">
              <a href="https://moneymindful.vercel.app/" target="_Blank">
                <img src={moneymindful} alt="Image of MoneyMindful website" />
              </a>
              <div className="responsive">
                <div className="stacks">
                  <ul>
                    <li>React.js</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="summary">
                  <p>
                    I made this website, focused on giving the user a good
                    experience with managing his finances. You can view how much
                    you've spent and recieved this month while also showing you
                    a total of the two. It was a project that helped me evolve
                    in react but I hope to perfect it and add more features in
                    it's life time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <h2>Rodrigo Seborro</h2>
            <div className="banner">
              <a href="https://rodrigo-seborro.vercel.app/" target="_Blank">
                <img
                  src={rodrigoSeborroWebsite}
                  alt="Image of MoneyMindful website"
                />
              </a>
              <div className="responsive">
                <div className="stacks">
                  <ul>
                    <li>React.js</li>
                    <li>Typescript</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="summary">
                  <p>
                    Are you ready to get to know me? It's the perfect place to
                    start. Here you can check some of the work that I have done,
                    get to know some facts and contact me directly so that we
                    can talk more!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <h2>Pokedex</h2>
            <div className="banner">
              <a target="_Blank">
                <img src={comingSoon} alt="Image of MoneyMindful website" />
              </a>
              <div className="responsive">
                <div className="stacks">
                  <ul>
                    <li>Next.js</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
                <div className="summary">
                  <p>
                    I joined a team of web developers to create a Pokedex
                    website. We've decided to create a brand new Pokemon API
                    which we will use to display Pokemon's data in a Pokedex
                    Format. <br /> Want to get to know more about your favourite
                    pokemon? Visit us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Projects;
