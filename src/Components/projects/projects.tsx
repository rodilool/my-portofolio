import React from "react";
import moneyMindfulWebsite from "../../pictures/moneymindful.png";

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
        <div className="cardHolder">
          <div className="card light">
            <h2 className="title">MoneyMindful</h2>
            <div className="card-information">
              <a href="https://moneymindful.vercel.app/" target="_Blank">
                <img
                  alt="Click here to access MoneyMindful"
                  src={moneyMindfulWebsite}
                  className="websiteDisplay"
                />
              </a>
              <p className="description">
                I made this website, focused on giving the user a good
                experience with managing his finances. You can view how much
                you've spent and recieved this month while also showing you a
                total of the two. It was a project that helped me evolve in
                react but I hope to perfect it and add more features in it's
                life time.
              </p>
              <div className="languageList">
                <h3>Stack used:</h3>
                <p>React.js, CSS</p>
              </div>
            </div>
          </div>
          <div className="card dark">
            <h2 className="title">Rodrigo Seborro</h2>
            <div className="card-information">
              <a href="" target="_Blank">
                <img
                  alt="Click here to access MoneyMindful"
                  src={moneyMindfulWebsite}
                  className="websiteDisplay"
                />
              </a>
              <p className="description">
                Are you ready to get to know me? It's the perfect place to
                start. Here you can check some of the work that I have done, get
                to know some facts and contact me directly so that we can talk
                more!
              </p>
              <div className="languageList">
                <h3>Stack used:</h3>
                <p>React.js, Typescript, CSS</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Projects;
