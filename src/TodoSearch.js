import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <input 
    className="todo-search" 
    placeholder='Search a ToDo'
    value={searchValue}
    onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };