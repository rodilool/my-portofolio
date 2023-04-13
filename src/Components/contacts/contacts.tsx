import { Component } from "react";

interface FuncProps {}
interface State {}
export default class Contacts extends Component<FuncProps, State> {
  render() {
    return (
      <main className="main contacts">
        <div className="title">
          <h1>
            <span className="letter">C</span>
            <span className="letter">O</span>
            <span className="letter">N</span>
            <span className="letter">T</span>
            <span className="letter">A</span>
            <span className="letter">C</span>
            <span className="letter">T</span>
            <span className="letter">S</span>
          </h1>
        </div>
        <div className="contact-area">
          <h2>DON’T BE SHY TO GET IN TOUCH!</h2>
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
                <div className="icon email"></div>
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
