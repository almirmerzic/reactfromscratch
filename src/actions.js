import {ADD_TODO, REMOVE_TODO} from './constants';

let id = 0;

export const addTodo = (todo) => ({
      type: ADD_TODO,
      todos: {todo , id: id++}
});

export const removeTodo = (id) => ({
      type: REMOVE_TODO,
      id
});
