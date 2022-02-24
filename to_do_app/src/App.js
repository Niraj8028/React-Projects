import React from 'react';
import { useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import { TodoContext } from './context/todoContext';
import TodoReducer from './context/appreducer'
import { Container } from 'reactstrap';
import TodoForm from './components/Todoform';
import Todos from './components/todos';

const App=()=>{
  const [todos, dispatch]= useReducer(TodoReducer,[]);
  return(
    <TodoContext.Provider value={{Todos,dispatch}}>
        <Container fluid>
        <h1>TO DO app with context API</h1>
        
        <TodoForm/>
        </Container>
    </TodoContext.Provider>
  )

}
export default App;
