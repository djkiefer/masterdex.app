import React, { Component } from "react";

let name = "";
let sprite = "";
let dexNo = 0;

class Pokemon extends Component {
  state = {};

  // componentDidMount() {
  //   const Pokedex = require("pokeapi-js-wrapper");
  //   const P = new Pokedex.Pokedex();

  //   P.getPokemonByName(this.props.pokemon.name).then(response => {
  //     name = response.species.name;
  //     sprite = response.sprites.front_default;
  //     dexNo = response.id;
  //   });
  // }

  render() {
    console.log(name, sprite, dexNo);
    return (
      <span>
        <img src={sprite} alt={name} />
        <br />#{dexNo}
        <br />
        {name}
      </span>
    );
  }
}

export default Pokemon;
