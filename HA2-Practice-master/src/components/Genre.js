import React, { Component } from "react";

class Genre extends Component {
  render() {
    return <div className="genre">{`#${this.props.genre}`}</div>;
  }
}

export default Genre;
