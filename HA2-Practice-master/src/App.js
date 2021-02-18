import React, { Component } from "react";
import MovieList from "./components/MovieList";
import Movieplayer from "./components/Movieplayer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      currentMovie: {},
    };
  }
  handleClickMovie = (movie) => {
    this.setState({ currentMovie: movie });
  };

  componentDidMount() {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          movieData: json.data.movies,
          currentMovie: json.data.movies[0],
        })
      );
  }

  render() {
    return (
      <div className="App">
        <Movieplayer movie={this.state.currentMovie} />
        <MovieList
          movies={this.state.movieData}
          handleClickMovie={this.handleClickMovie}
        />
      </div>
    );
  }
}

export default App;
