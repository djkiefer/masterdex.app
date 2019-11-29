import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: "",
      spriteUrl: ""
    };
  }

  componentDidMount = () => {
    const Pokedex = require("pokeapi-js-wrapper");
    const P = new Pokedex.Pokedex();
    const random = Math.floor(Math.random() * 808);

    P.getPokemonByName(random).then(response => {
      this.setState({
        pokemon: response.species.name,
        spriteUrl: response.sprites.front_default
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron pb-1">
          <h1>Coming soon!</h1>A web app to quickly look up useful information
          about a pokemon to help you complete your dex!
          <div className="row align-items-end pt-3">
            <img
              className="mx-auto d-block"
              src={this.state.spriteUrl}
              alt={this.state.pokemon}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
