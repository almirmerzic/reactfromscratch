import React from 'react';
import Button from '../../Button/index';

const Todo = ({id, todovalue, removeTodo }) => {
    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{todovalue}</td>
                <td>
                    <Button
                    type="button"
                    name="Delete"
                    param={()=>removeTodo(id)}
                /></td>
            </tr>
        </tbody>
    );
}

export default Todo;