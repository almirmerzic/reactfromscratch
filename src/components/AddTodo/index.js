import React from 'react';
import Button from '../Button/index';
import Input from '../Input/index';

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
                    <Input
                        type="text"
                        placeholder="...Todo"
                        value={this.state.todo}
                        todo = {this.state.todo}
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