import {combineReducers} from 'redux';
import todosReducer from './todos_reducer';


// this is our 'rootReducer'
const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;
