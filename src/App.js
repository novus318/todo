import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState()
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Good day 🌝 </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value)=>{
            return(<div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                setTodos(toDos.filter(value2=>{
                  if(value2.id===value.id){
                    value2.status=e.target.checked
                  }
                  return value2
                }))
              }} value={value.status} type="checkbox" name="" id="" />
              <p>{value.text}</p>
            </div>
            <div className="right">
              <i onClick={(e)=>{
                setTodos(toDos.filter(value2 => {
                  let temp;
                  if (value2.id != value.id){
                    temp = value2
                  }
                  return temp;
                }));
              }} className="fas fa-times"></i>
          </div>
          </div>)
          })}

          {
            toDos.map((value)=>{
            if(value.status){
              return(
                <h2>{value.text}</h2>
              )
            }
            return null
          })}
        
      </div>
    </div>
  );
}

export default App;