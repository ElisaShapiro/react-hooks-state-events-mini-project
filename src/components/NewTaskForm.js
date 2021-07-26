import React, {useState} from "react";

function NewTaskForm({ categories, onTextFormSubmit }) {
  let [textState, setTextState] = useState("")
  let [categoryState, setCategoryState] = useState("Code")

  function handleTextState(event) { 
    setTextState(event.target.value)
  }
  function handleCategoryState(event) {
    setCategoryState(event.target.value)
  }

  let categoryDropdown = categories.map((category) => {
    if (category !== "All")
     return (<option value={category} key={category}>{category}</option>)
    }
  )

  function handleOnTextFormSubmit(e){
    e.preventDefault()
    onTextFormSubmit( {
      text: textState,
      category: categoryState
    })
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input onChange={handleTextState} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryState} name="category">
          {categoryDropdown}
        </select>
      </label>
      <input onClick={handleOnTextFormSubmit} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
