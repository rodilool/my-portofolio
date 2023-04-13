import React from "react";
import moneyMindfulWebsite from "../../pictures/moneymindful.png";

interface Props {}

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
            <span className="letter">P</span>
            <span className="letter">R</span>
            <span className="letter">O</span>
            <span className="letter">J</span>
            <span className="letter">E</span>
            <span className="letter">C</span>
            <span className="letter">T</span>
            <span className="letter">S</span>
          </h1>
        </div>
        <div className="cardHolder">
          <div className="card">
            <h1 className="title">MoneyMindful</h1>
            <div className="card-information">
              <img
                alt="Click here to access MoneyMindful"
                src={moneyMindfulWebsite}
                className="websiteDisplay"
              />
              <p className="description">
                I made this website, focused on giving the user a good
                experience with managing his finances. You can view how much
                you've spent and recieved this month while also showing you a
                total of the two. It is a project that I hope to perfect and add
                more features in it's life time.
              </p>
              <div className="languageList">
                <p>React.js, CSS</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Projects;
