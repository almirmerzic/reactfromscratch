import React from 'react';
import Todo from './Todo/Todo';

const ShowTodo = ({ todos, removeTodo }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Todo</th>
                    <th scrope="col">Remove Todo</th>
                </tr>
            </thead>
            {todos.map((todo,i) =>
                <Todo
                    key={i}
                    id={todo.id}
                    todovalue={todo.todo}
                    removeTodo = {removeTodo}
                />)}
        </table>
    );
}

export default ShowTodo;
