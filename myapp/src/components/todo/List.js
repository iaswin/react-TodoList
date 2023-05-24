
import React from 'react'

const List = ({task,index,remove}) => {
  return (
    <>
      <div className='list1'>
        {task.title}
        <button onClick={()=>{remove(index)}} className='dlt'>Delete</button>
      </div>
    </>
  )
}

export default List
