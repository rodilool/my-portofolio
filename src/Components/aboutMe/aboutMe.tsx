import React from "react";

interface Props {}

interface State {}

class AboutMe extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <main className="main-about" id="swithTheme">
        <div className="title">
          <h1>ABOUT ME</h1>
        </div>
        <div className="circles">
          <div className="circle last">
            <div className="ball a"></div>
          </div>
          <div className="circle mid">
            <div className="ball d"></div>
          </div>

          <div></div>
        </div>
      </main>
    );
  }
}

export default AboutMe;
