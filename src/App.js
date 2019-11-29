import React, { Component } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

class App extends Component {
  state = {
    pokemon: []
  };

  // componentDidMount = () => {
  //   const Pokedex = require("pokeapi-js-wrapper");
  //   const P = new Pokedex.Pokedex();

  //   P.getPokemonsList().then(response => {
  //     this.setState({
  //       pokemon: response.results
  //     });
  //   });
  // };

  render() {
    return (
      <div>
        <Header />
        <Home pokemonList={this.state.pokemon} />
        <Footer />
      </div>
    );
  }
}

export default App;
