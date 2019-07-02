import { combineReducers } from 'redux';
import todos from './reducers';

const reducer = combineReducers({
    todos
})

export default reducer;