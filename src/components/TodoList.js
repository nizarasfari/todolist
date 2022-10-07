import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos,counter,setCounter }) => {

  return (
    <div >
      <ul >
        {todos.map((todo) => (
          <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo={todo} counter={counter} setCounter={setCounter} />

        ))}
      </ul>
      
    </div>

  )


}

export default TodoList