import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const initialState = {
  entities: {},
  currentPoke: null
};

const pokemonReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, state, {entities: action.pokemon});
      return newState;

    case RECEIVE_ONE_POKEMON:
      const pokemon = action.payload.poke;
      newState = merge({}, state);
      newState.currentPoke = pokemon.id;
      newState.entities[pokemon.id] = pokemon;
      return newState;

    default:
    return state;
  }
};


export default pokemonReducer;
