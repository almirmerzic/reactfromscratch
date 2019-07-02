import { combineReducers } from 'redux';

import {
    ADD_TODO,
    REMOVE_TODO,
} from './actions';

const initialState = {
    todos: []
}

function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todos]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo =>todo.id !== action.id)
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    todos
})

export default reducer;

