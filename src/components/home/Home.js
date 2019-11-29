import React from "react";
import "./Home.css";
import Pokemon from "./Pokemon.js";

class Home extends React.Component {
  //   const random = Math.floor(Math.random() * 808);

  //   P.getPokemonByName(random).then(response => {
  //     this.setState({
  //       pokemon: response.species.name,
  //       spriteUrl: response.sprites.front_default
  //     });
  //   });
  // };

  render() {
    return (
      <div className="container fluid">
        <div className="jumbotron pb-1">
          <h1>Coming soon!</h1>A web app to quickly look up useful information
          about a pokemon to help you complete your dex!
        </div>
        <div className="row">
          {this.props.pokemonList.map(pokemon => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
