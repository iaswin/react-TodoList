import Add from './Add';
import React, { useState } from 'react'
import "./Todo.css";
import List from "./List";

const Todo = () => {
    const[tasks,setTask]=useState([]);
    const addTask=(title)=>
    {
        const newTask=[...tasks,{title}];
        setTask(newTask);

    }
    const remove=(index)=>
    {
        const newTask=[...tasks]
        newTask.splice(index,1)
        setTask(newTask)
    }

  return (
    <>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'><Add addTask={addTask}/></div>
            <div className='task'>{tasks.map((task,index)=>(<List task={task} remove={remove} index={index}/>
            ))}</div>

        </div>
      
    </>
  )
}

export default Todo;
