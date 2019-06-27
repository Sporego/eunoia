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
      height: "100px",
      width: "100px",
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
    x: 300,
    y: 300
  };

  handleKeyDown = event => {
    switch (event.key) {
      case "ArrowRight":
        console.log("move right");
        this.setState((state, props) => ({
          x: state.x + 50
        }));
        break;
      case "ArrowLeft":
        console.log("move left");
        this.setState((state, props) => ({
          x: state.x - 50
        }));
        break;
      case "ArrowUp":
        console.log("move up");
        this.setState((state, props) => ({
          y: state.y - 50
        }));
        break;
      case "ArrowDown":
        console.log("move down");
        this.setState((state, props) => ({
          y: state.y + 50
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
        <Bushes x={600} y={100} h="100px" w="500px" />
        <Bushes x={200} y={200} h="100px" w="150px" />
      </div>
    );
  }
}

export default Play;
