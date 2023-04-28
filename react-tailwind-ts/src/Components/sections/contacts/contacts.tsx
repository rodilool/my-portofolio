import { Component } from "react";
import iconEmail from "../../../pictures/EmailContacts.png";
import "./contacts.scss";

import { setRandomColor, setColorToDefault } from "../../hooks/random_color";

interface FuncProps {
  onMouseOver: any;
  onMouseLeave: any;
}
interface State {}
export default class Contacts extends Component<FuncProps, State> {
  render() {
    return (
      <main className="main contacts" id="contacts">
        <div className="title contact_title hidden">
          <h1>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              C
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
              N
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              T
            </span>
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
              C
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              T
            </span>
            <span
              className="letter"
              onMouseOver={(event) => setRandomColor(event.target)}
              onMouseOut={(event) => setColorToDefault(event.target)}
            >
              S
            </span>
          </h1>
        </div>
        <div className="contact-area hidden">
          <h2 className="">Ready to collaborate? Let's talk!</h2>
          <div className="icons">
            <a
              href="https://github.com/rodilool"
              target="_Blank"
              onMouseEnter={this.props.onMouseOver}
              onMouseLeave={this.props.onMouseLeave}
              className="hidden"
            >
              <div className="git-area">
                <div className="icon git"></div>
                <p className="user-git">
                  Rodrigo<span className="invisible">i</span>Seborro
                </p>
              </div>
            </a>
            <a
              href="mailto:rodilool2@gmail.com?body=I%20am%20interested%20to%20work%20with%20you!"
              onMouseEnter={this.props.onMouseOver}
              onMouseLeave={this.props.onMouseLeave}
              className="hidden"
            >
              <div className="email-area">
                {/* <div className="icon email"></div> */}
                <img src={iconEmail} className="icon email" alt="asdasd" />
                <p className="user-email">rodilool2@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-seborro-300a33180/"
              target="_Blankgit"
              onMouseEnter={this.props.onMouseOver}
              onMouseLeave={this.props.onMouseLeave}
              className="hidden"
            >
              <div className="in-area">
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
