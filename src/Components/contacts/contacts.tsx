import { Component } from "react";
import iconEmail from "../../pictures/EmailContacts.png";

interface FuncProps {
  setRandomColor: any;
  setColorToDefault: any;
}
interface State {}
export default class Contacts extends Component<FuncProps, State> {
  render() {
    return (
      <main className="main contacts">
        <div className="title">
          <h1>
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
              O
            </span>
            <span
              className="letter"
              onMouseOver={(event) => this.props.setRandomColor(event.target)}
              onMouseOut={(event) => this.props.setColorToDefault(event.target)}
            >
              N
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
              A
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
        <div className="contact-area">
          <h2>Ready to collaborate? Let's talk!</h2>
          <div className="icons">
            <a href="https://github.com/rodilool" target="_Blank">
              <div className="git-area">
                <div className="icon git"></div>
                <p className="user-git">
                  Rodrigo<span className="invisible">i</span>Seborro
                </p>
              </div>
            </a>
            <a href="mailto:rodilool2@gmail.com?body=I%20am%20interested%20to%20work%20with%20you!">
              <div className="email-area">
                {/* <div className="icon email"></div> */}
                <img src={iconEmail} className="icon email" alt="asdasd" />
                <p className="user-email">rodilool2@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-seborro-300a33180/"
              target="_Blankgit"
            >
              <div className="git-area">
                <div className="icon in"></div>
                <p className="user-git">
                  Rodrigo<span className="invisible">i</span>Seborro
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>
    );
  }
}
