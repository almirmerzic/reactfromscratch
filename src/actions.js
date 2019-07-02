export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO ='REMOVE_TODO';

let id = 0;

export function addTodo(todo) {
   return {
      type: ADD_TODO,
      todos: {todo , id: id++}
   };
}

export function removeTodo(id) {
   return {
      type: REMOVE_TODO,
      id
   };
}
