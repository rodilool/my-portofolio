import { Component } from "react";
import Blob from "../../pictures/blobanimation.svg";
import seperatingMenu from "../../pictures/seperatingMenu.png";
import { NavLink } from "react-router-dom";

interface FuncProps {
  toggleTheme: any;
}
interface State {
  showMenu: boolean;
}
export default class NavBar extends Component<FuncProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  // Set the initial state of the menu

  toggleMenu = () => {
    setTimeout(() => {
      if (this.state.showMenu === false) {
        document.querySelector(".menu-btn")!.classList.add("close");
        document.querySelector(".closingcircle")!.classList.add("open");
        document.querySelector(".menublob")!.classList.add("open");
        document.querySelector(".menu")!.classList.add("open");
        document.querySelector(".blob")!.classList.add("open");
        document.querySelector(".header")!.classList.add("open");
        this.setState({
          showMenu: true,
        });
      } else {
        document.querySelector(".menu-btn")!.classList.remove("close");
        document.querySelector(".closingcircle")!.classList.remove("open");
        document.querySelector(".menublob")!.classList.remove("open");
        document.querySelector(".menu")!.classList.remove("open");
        document.querySelector(".blob")!.classList.remove("open");
        document.querySelector(".header")!.classList.remove("open");
        this.setState({
          showMenu: false,
        });
      }
    }, 150);
  };

  render() {
    return (
      <header className="header">
        <div className="logo">
          <a href="/">
            {" "}
            <h1 /*onClick={this.props.toggleTheme}*/>RS</h1>
          </a>
        </div>

        <div className="end-section">
          <a className="contact-button" href="/contacts">
            <div className="contact" id="swithTheme">
              CONTACTS
            </div>
            <div className="contact hover" id="swithTheme">
              CONTACTS
            </div>
          </a>
          <div>
            <div className="menu-btn" onClick={this.toggleMenu}>
              <div className="btn-line" id="swithTheme"></div>
              <div className="btn-line" id="swithTheme"></div>
              <div className="btn-line" id="swithTheme"></div>
            </div>
            <div className="blob">
              <img alt="blob" src={Blob} className="menublob" />
              <div className="closingcircle"></div>
            </div>
            <div className="menu">
              <img alt="" src={seperatingMenu} className="seperatingMenu" />
              <NavLink
                id="links"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/"
                end
                onClick={this.toggleMenu}
              >
                HOME
              </NavLink>
              <img alt="" src={seperatingMenu} className="seperatingMenu" />
              <NavLink
                id="links"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/about-me"
                onClick={this.toggleMenu}
              >
                ABOUT ME
              </NavLink>
              <img alt="" src={seperatingMenu} className="seperatingMenu" />
              <NavLink
                id="links"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/projects"
                onClick={this.toggleMenu}
              >
                PROJECTS
              </NavLink>
              <img alt="" src={seperatingMenu} className="seperatingMenu" />
              <NavLink
                id="links"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/contacts"
                onClick={this.toggleMenu}
              >
                CONTACTS
              </NavLink>
              <img alt="" src={seperatingMenu} className="seperatingMenu" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
