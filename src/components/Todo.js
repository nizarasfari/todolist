import React from "react";

const Todo = ({todo, text,todos,setTodos,counter,setCounter}) => {
    //events 
    const deleteHandler = () =>{
    setTodos(todos.filter(todo => todo.id !== todo.id))  
    setCounter(counter -1)

    };
   
    const completeHandler = () =>{
    setTodos(todos.map(item => {
    if(item.id === todo.id){
    return {

        ...item , completed: !item.completed
    }

}
}))

    }
   
return(
    <div className="todo">
        <li >{text}</li>
        <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
        <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>


)


}

export default Todo