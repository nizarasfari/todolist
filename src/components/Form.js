import React from "react";



const Form = ({ inputText, setInputText, todos, setTodos,counter,setCounter }) => {
  //js code

  const InputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const sumbitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, }
    ]);
    setInputText("");
    setCounter(counter +1)

  }
  const statusHandler = (e) => {

  }

  return (
    <form>
      <input value={inputText}
        onChange={InputTextHandler} type="text" className="todo-input" />
      <button onClick={sumbitTodoHandler}  type="submit">
        Add
      </button>
      <div className="select">
        
      </div>
   
    </form>

  )

}


export default Form