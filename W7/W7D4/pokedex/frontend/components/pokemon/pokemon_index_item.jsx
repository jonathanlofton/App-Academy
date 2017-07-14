import React from 'react';
import { Link } from 'react-router-dom';

export default class PokemonIndexItem extends React.Component {

  render() {
    const pokemon = this.props.pokemon;
    return (
        <li>
          <img src={ pokemon.image_url } className="index_image"/>
          <Link to={`/pokemon/${pokemon.id}`}>
            { pokemon.name }
          </Link>
        </li>
    );
  }
}
