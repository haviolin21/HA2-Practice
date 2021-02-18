import React, { Component } from "react";
import MovieListEntry from "./MovieListEntry";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MovieList">
        {this.props.movies.map((el, index) => (
          <MovieListEntry
            key={index}
            movie={el}
            handleClickMovie={this.props.handleClickMovie}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
