import React from "react";
import "./Home.css";

class Home extends React.Component {
  state = {
    pokemon: ""
  };

  componentDidMount() {
    const Pokedex = require("pokeapi-js-wrapper");
    const P = new Pokedex.Pokedex();

    P.getPokemonByName("1").then(function(response) {
      console.log(response);
      // this.setState({
      //   pokemon: response.name
      // });
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="md-3">
            <img src="" alt="" />
            <br />
            {this.state.pokemon}
          </div>
          <div class="md-3">
            <div class="jumbotron text-left">
              <h1>Coming soon!</h1>
              <p>
                A web app to quickly look up useful information about a pokemon
                to help you complete your dex!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
