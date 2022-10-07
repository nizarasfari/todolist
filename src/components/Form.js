import React from "react";



const Form = ({ inputText, setInputText, todos, setTodos }) => {
  //js code

  const InputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const sumbitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  }
  const statusHandler = (e) => {

  }

  return (
    <form>
      <input value={inputText}
        onChange={InputTextHandler} type="text" className="todo-input" />
      <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
       
      </div>
    </form>

  )

}


export default Form