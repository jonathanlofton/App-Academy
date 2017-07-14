
import { Route } from 'react-router-dom';
import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';


export default class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.getAllPokemon();
  }

  render(){
    const { pokemon } = this.props;

    const pokeListItems = pokemon.map(poke => (
      <PokemonIndexItem
        key={poke.id}
        pokemon={poke}
        />
    ));


    return(
      <section className="index_page">

        <div className="index_view">
            <ul>
              { pokeListItems }
            </ul>
        </div>

        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
        
      </section>
    );
  }
}
