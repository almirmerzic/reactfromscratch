import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './components/AddTodo/index';
import ShowTodo from './components/ShowTodo/index';
import Text from './components/Text/index';
import { addTodo, removeTodo} from './actions';

const App = ({todoReducer, addTodo, removeTodo}) => {
   return (
      <div className="container">
         <div>
            <div className="jumbotron">
               <Text />
               <h1 className="text-center display-4">Add Todos</h1>
               <AddTodo
                  addTodo={addTodo}
               />
               <ShowTodo
                  todos={todoReducer.todos}
                  removeTodo={removeTodo}
               />
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      todoReducer: state.todos
   }
}

const mapDispatchToAction = (dispatch) => {
   return{
      addTodo: (todo) => dispatch(addTodo(todo)),
      removeTodo: (id) =>dispatch(removeTodo(id))
   }
};

export default connect(mapStateToProps, mapDispatchToAction)(App);
