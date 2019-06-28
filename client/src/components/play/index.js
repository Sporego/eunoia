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

const increment = 90; //define increment for grid

const Bushes = props => (
  <div
    style={{
      backgroundColor: "green",
      height: props.h + "px",
      width: props.w + "px",
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
          x: state.x + increment
        }));
        break;
      case "ArrowLeft":
        console.log("move left");
        this.setState((state, props) => ({
          x: state.x - increment
        }));
        break;
      case "ArrowUp":
        console.log("move up");
        this.setState((state, props) => ({
          y: state.y - increment
        }));
        break;
      case "ArrowDown":
        console.log("move down");
        this.setState((state, props) => ({
          y: state.y + increment
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
        <img src="./img/route1.JPG" />
        <Player x={this.state.x} y={this.state.y} />
        <Bushes x={450} y={560} h="90" w="630" />
        <Bushes x={270} y={90} h="180" w="990" />
      </div>
    );
  }
}

export default Play;
