import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './components/AddTodo/index';
import ShowTodo from './components/ShowTodo/index';
import Text from './components/Text/index';
import { addTodo } from './actions/actions';

const App = ({todoReducer}) => {
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
               />
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => ({
   todoReducer: state.todos
})

const mapDispatchToAction = (dispatch) => ({

      addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToAction)(App);