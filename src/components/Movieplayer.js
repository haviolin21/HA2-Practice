import React, { Component } from "react";

class Movieplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="MoviePlayer">
        <img src={this.props.movie.medium_cover_image} />
        <div>{this.props.movie.title}</div>
        <div>{this.props.movie.rating}</div>
        <div>{this.props.movie.runtime}</div>
        <div>{this.props.movie.year}</div>
        <div></div>
      </div>
    );
  }
}

export default Movieplayer;
