import React from 'react';
import Todo from './Todo/Todo';

const ShowTodo = ({ todos }) => {
    console.log(todos);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Todo</th>
                </tr>
            </thead>
            {todos.map((todo, i) => 
                <Todo
                    key={i}
                    todovalue={todo.todo}
                />)}
        </table>
    );
}

export default ShowTodo;
