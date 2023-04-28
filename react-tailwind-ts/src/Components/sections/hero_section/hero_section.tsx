import React from "react";
import "./hero_section.scss";

interface HeroSectionProps {
  onMouseOver: any;
  onMouseLeave: any;
}

interface HeroSectionState {}

class HeroSection extends React.Component<HeroSectionProps, HeroSectionState> {
  constructor(props: HeroSectionProps) {
    super(props);
  }
  render() {
    return (
      <section className="main_section">
        <div className="main_content">
          <h1>
            Hey, I'm <span className="glow-effect name">Rodrigo Seborro</span>
            . <br />
            <span className="iam">Web Developer</span>
            <br /> <br />
            Welcome to my <span className="glow-effect world">WORLD</span>
            <span className="exclamation">!</span>
          </h1>
          <section>
            <a
              href="#projects"
              onMouseEnter={this.props.onMouseOver}
              onMouseLeave={this.props.onMouseLeave}
            >
              <div className="button projects">
                <p>PROJECTS</p>
              </div>
            </a>
            <a
              href="#about"
              onMouseEnter={this.props.onMouseOver}
              onMouseLeave={this.props.onMouseLeave}
            >
              <div className="button about-me">
                <p>ABOUT ME</p>
              </div>
            </a>
          </section>
        </div>
      </section>
    );
  }
}

export default HeroSection;
