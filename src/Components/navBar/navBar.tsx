import { Component } from "react";
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

  toggleMenu() {
    if (this.state.showMenu === false) {
      document.querySelector(".menu-btn")!.classList.add("close");
      document.querySelector(".menu")!.classList.add("show");
      document.querySelector(".menu-nav")!.classList.add("show");
      document.querySelector(".menu-branding")!.classList.add("show");
      document
        .querySelectorAll(".nav-item")
        .forEach((item) => item.classList.add("show"));
      this.setState({
        showMenu: true,
      });
    } else {
      document.querySelector(".menu-btn")!.classList.remove("close");
      document.querySelector(".menu")!.classList.remove("show");
      document.querySelector(".menu-nav")!.classList.remove("show");
      document.querySelector(".menu-branding")!.classList.remove("show");
      document
        .querySelectorAll(".nav-item")
        .forEach((item) => item.classList.remove("show"));

      // Reset the menu state
      this.setState({
        showMenu: false,
      });
    }
  }

  render() {
    return (
      <header>
        <h1 className="logo" onClick={this.props.toggleTheme}>
          RS
        </h1>
        <div className="end-section">
          <button className="contact-button" id="swithTheme">
            CONTACTS
          </button>
          <div>
            <div className="menu-btn">
              <div className="btn-line" id="swithTheme"></div>
              <div className="btn-line" id="swithTheme"></div>
              <div className="btn-line" id="swithTheme"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
