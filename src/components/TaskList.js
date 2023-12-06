import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  return (
    <div className="tasks">
      {tasks.map((task,index)=>{
        return <Task text={task.text} key={index} category={task.category} onDelete={()=>handleDelete(index)} />
      })}
    </div>
  );
}

export default TaskList;
