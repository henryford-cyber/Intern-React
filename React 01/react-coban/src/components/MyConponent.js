import {useState} from "react"
 
const MyComponent=()=>{
    // newtodo : name state
    // seNewtodo : ham
    const [newtodo,setNewTodo]= useState("nam");
    const [listTodo, setListTodo]= useState([
    ])
    const todo = 'doing homework';
    const handleChangeInput=(event)=>{
        console.log(event.target.value);
        setNewTodo(event.target.value);
    };
    const handleAddTodo=()=>{
        setListTodo([...listTodo,{id:Math.floor((Math.random()*10000)+1),value:newtodo}]);
    }
    const handleDeleteTodo=(todoId)=>{
         let newFilter= listTodo.filter(item=>item.id!==todoId);
         setListTodo(newFilter); 
    }
    return (
      <div className="">
        <h2>To do list</h2>
        {listTodo.map((todo,index)=>{
            console.log(todo);
            return (
              <div>
                {index + 1}. {todo.value}
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            );
        })}
        <br/>
        <div>My todo = {newtodo}</div>
        <input type={"text"} onChange={(event) => handleChangeInput(event)} />
        <button onClick={()=>handleAddTodo()}>Add to do</button>
      </div>
    );
}
export default MyComponent;