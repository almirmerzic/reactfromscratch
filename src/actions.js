export const ADD_TODO = 'ADD_TODO';

let nextTodoId = 0;

export function addTodo(todo) {
   return {
      type: ADD_TODO,
      todos: {todo , id: nextTodoId++}
   };
}

