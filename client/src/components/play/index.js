// import React from "react";
// import "./style.css";

// function Root() {
//   return (
//     <div className="">
//       <div className="" />
//     </div>
//   );
// }

// export default Root;

import React from "react";
import "./style.css";

const Bushes = props => (
  <div
    style={{
      backgroundColor: "green",
      height: props.h,
      width: props.w,
      position: "absolute",
      top: props.y,
      left: props.x
    }}
  />
);

const Player = props => (
  <div
    className="player"
    style={{
      height: "90px",
      width: "90px",
      position: "absolute",
      top: props.y,
      left: props.x,
      zIndex: 1
    }}
  />
);

class Play extends React.Component {
  // take a look at this for bounding rect
  // https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  state = {
    x: 270,
    y: 270
  };

  handleKeyDown = event => {
    switch (event.key) {
      case "ArrowRight":
        console.log("move right");
        this.setState((state, props) => ({
          x: state.x + 90
        }));
        break;
      case "ArrowLeft":
        console.log("move left");
        this.setState((state, props) => ({
          x: state.x - 90
        }));
        break;
      case "ArrowUp":
        console.log("move up");
        this.setState((state, props) => ({
          y: state.y - 90
        }));
        break;
      case "ArrowDown":
        console.log("move down");
        this.setState((state, props) => ({
          y: state.y + 90
        }));
        break;
      default:
        console.log("unhandled keypress", event.key);
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    console.log(this.state.x);
    return (
      <div>
        <Player x={this.state.x} y={this.state.y} />
        <Bushes x={560} y={90} h="90px" w="560px" />
        <Bushes x={270} y={180} h="90px" w="180px" />
      </div>
    );
  }
}

export default Play;
