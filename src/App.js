import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState ("");
  const[todos,  setTodos] = useState([]);
  const[status, setStatus] = useState ('all')
  const [filteredTodos, setFilteredTodos] = useState ([])
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
    <header>
      <h1> Todo List</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} counter={counter}setCounter={setCounter} />
    <TodoList setTodos={setTodos} todos={todos} counter={counter} setCounter={setCounter}/>
    <div>Total:{counter}</div>
   
    </div>
    
  );
}

export default App;