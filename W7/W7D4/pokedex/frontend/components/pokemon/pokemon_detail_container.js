import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import PokemonDetail  from './pokemon_detail';

const mapStateToProps = ({items, pokemon}) => ({
  currentPoke: pokemon.entities[pokemon.currentPoke] || {},
  items
});

const mapDispatchToProps = dispatch => ({
  getOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
