import React, { Component } from "react";

class RefSample extends Component {
  state = {
    height: "",
    width: ""
  };

  input = null;
  box = null;

  handleClick = () => {
    this.input.focus();
  };

  componentDidMount() {
    this.setState({
      height: this.box.clientHeight,
      width: this.box.clientWidth
    });
  }

  render() {
    return (
      <div>
        <input
          ref={ref => {
            this.input = ref;
          }}
        />
        <button onClick={this.handleClick}>Focus Input</button>
        <div
          ref={ref => {
            this.box = ref;
          }}
        >
          <h2>TITLE</h2>
        </div>
        <p>
          <b>height:</b> {this.state.height} <br></br>
          <b>width:</b> {this.state.width}
        </p>
      </div>
    );
  }
}

export default RefSample;
