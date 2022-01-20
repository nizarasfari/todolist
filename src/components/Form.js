import React from "react";



const Form = ({inputText,setInputText,todos,setTodos, setStatus}) =>{
//js code

const InputTextHandler = (e) => {
console.log(e.target.value);
setInputText(e.target.value);
}
const sumbitTodoHandler = (e) =>{
e.preventDefault();
setTodos([
...todos,{text: inputText,  completed: false, id:Math.random() * 1000}
]);
setInputText("");
}
const statusHandler = (e) => {

}

    return(
<form>
      <input value={inputText}
       onChange={InputTextHandler} type="text" className="todo-input" />
      <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select   onChange={statusHandler}  name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

    )

}


export default Form