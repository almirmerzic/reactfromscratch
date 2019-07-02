import { ADD_TODO, REMOVE_TODO } from './constants';

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
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state
    }

}

export default todos;

