
import React from 'react';

export default class PokemonDetail extends React.Component {
  componentDidMount(){
    this.props.getOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    let currentPoke = this.props.match.params.pokemonId;
    let paramsId = newProps.match.params.pokemonId;

    if (currentPoke !== paramsId) {
    this.props.getOnePokemon(paramsId);
    }
  }


  render(){
    const pokemon = this.props.currentPoke;

    return(
      <div className="detail-view">
        <h1>{pokemon.name}</h1>
        <figure className="detail-image">
          <img src={pokemon.image_url} ></img>
        </figure>
        <div className="attributes">
          <span><h2>Attack:</h2> <h3> {pokemon.attack} </h3></span>
          <span><h2>Defense:</h2> <h3> {pokemon.defense} </h3> </span>
          <span><h2>Type:</h2> <h3> {pokemon.poke_type} </h3> </span>
          <span><h2>Moves:</h2> <h3> {pokemon.moves ? pokemon.moves.join(", ") : ""} </h3> </span>
        </div>
      </div>
    );
  }
}
