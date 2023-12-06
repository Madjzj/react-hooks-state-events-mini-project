import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [textInput,setInput] = useState("")
  const [category, setCategory]= useState("Code")
  function handleInputChange(event){
    setInput(event.target.value)
  }
  function handleCategoryChange(event){
    setCategory(event.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={(event)=>{
      event.preventDefault();
      onTaskFormSubmit({text:textInput, category:category})}}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInputChange} value={textInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categories.map((category,index)=> {if(index>0){return <option value={category} key={index}>{category}</option>}})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
