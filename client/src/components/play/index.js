import React from "react";
import "./style.css";
import backgroundImg from "./img/route1.JPG";

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
    x: 1080,
    y: 630
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

  simulateClick(e) {
    e.click();
  }

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
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={backgroundImg} alt="" />
        <Player x={this.state.x} y={this.state.y} />
        <Bushes x={450} y={540} h="90" w="630" />
        <Bushes x={270} y={90} h="180" w="990" />
        <button
          ref={this.simulateClick}
          x={90}
          y={90}
          type="button"
          class="btn btn-secondary btn-sm"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          style={{
            height: "90px",
            width: "90px",
            position: "absolute",
            top: 90,
            left: 90,
            zIndex: 0
          }}
        >
          Small button
        </button>
      </div>
    );
  }
}

export default Play;
