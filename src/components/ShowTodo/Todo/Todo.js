import React from 'react';

const Todo = ({todovalue}) => {
    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{todovalue}</td>
            </tr>
        </tbody>
    );
}

export default Todo;