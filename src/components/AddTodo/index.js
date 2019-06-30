import React from 'react';
import Button from '../Button/index';

class AddTodo extends React.Component {

    state = {
        todo: ''
    }

    getTodo = (e) => this.setState({ todo: e.target.value });

    sendTodo = () => {
        if (this.state.todo.length > 0)
            this.props.addTodo(this.state.todo);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="...Todo"
                        value={this.state.todo}
                        onChange={this.getTodo}
                    />
                </div>

                <Button
                    name="Add Todo"
                    sendTodo={this.sendTodo}
                />
            </form>
        );
    }
}

export default AddTodo;