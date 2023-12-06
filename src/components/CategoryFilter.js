import React, {useState} from "react";

function CategoryFilter({categories, onFilter}) {
  const [selected, setSelected] = useState(0)
  function handleSelection(index){
    onFilter(index)
    setSelected(index)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,index)=>{
        if(selected === index){
          return<button className="selected" key={category}>{category}</button>
        }
        return<button onClick={()=>handleSelection(index)} key={category}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
