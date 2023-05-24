import React, { useState } from 'react'

const Add = ({addTask}) => {
  const[value,setValue]=useState("")
  const additem=()=>
  {
    addTask(value);
    setValue("")

  }
    
  return (
    <>
        <div className='input1' >
            <input type="text" className='input' placeholder='add a new task' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={additem} className='add1'>Add</button>

        </div>
      
    </>
  );
};

export default Add;
