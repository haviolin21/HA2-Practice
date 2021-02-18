import React, { Component } from "react";
import Genre from "./Genre";

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="MovieListEntry"
        onClick={() => this.props.handleClickMovie(this.props.movie)}
      >
        <div>
          <img src={this.props.movie.small_cover_image} />
        </div>
        <div>{this.props.movie.rating}</div>
        <div>{this.props.movie.title}</div>
        <div>{this.props.movie.runtime}</div>
        <div>{this.props.movie.year}</div>
        <div className="genres">
          {this.props.movie.genres.map((el, index) => {
            return <Genre key={index} genre={el} />;
          })}
        </div>
      </div>
    );
  }
}

export default MovieListEntry;
