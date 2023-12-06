import React,{useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [newTasks, setTasks] = useState(TASKS)
  const [filteredTasks, setFilTasks] = useState(newTasks)
  const [selected, setSelected] = useState(0)
  
  function handleDelete(index){
    const updatedTasks = filteredTasks.filter((_,i)=> i!==index);
    const updatedFullTasks = newTasks.filter((element)=> element !== filteredTasks[index]);
    setTasks(updatedFullTasks)
    setFilTasks(updatedTasks)
  }
  function handleFilter(index){
    const newFilteredTasks = newTasks.filter((element)=>{
      if(index === 0){
        return true
      }
      return element.category === CATEGORIES[index]})
    setFilTasks(newFilteredTasks)
    setSelected(index)
  }
  function handleFormSubmit(newTask){
    const newTaskList = [...newTasks, newTask]
    let newFilteredList = []
    setTasks(newTaskList)
    if(newTask.category === CATEGORIES[selected]){
      newFilteredList = [...filteredTasks, newTask]
    } else{
      newFilteredList = filteredTasks
    }
    {!selected ? setFilTasks(newTaskList) : setFilTasks(newFilteredList)}
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
