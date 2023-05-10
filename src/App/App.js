import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {id: 1, text: 'Estudiar JavaScript', completed: true},
//   {id: 2, text: 'Estudiar React', completed: false},
//   {id: 3, text: 'Estudiar NestJs', completed: false},
// ];


//Custom React Hook : useLocalStorage
//Inicia Custom hook

function useLocalStorage(itemName, initialValue){
  
  const localStorageItem = localStorage.getItem(itemName, initialValue);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  };

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const strItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, strItem);
    setItem(newItem);
  };

  return [item, saveItem];
  
}

//Termina Custom hook

function App() {

  const TODOS_IN_STORAGE = {
    V1 : 'TODOS_V1',
  };

  const [todos, saveTodos]  = useLocalStorage(TODOS_IN_STORAGE.V1, []);
  
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (searchValue.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
    });
  }

  const toogleCompleteTodos = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const modifiedTodos = [...todos];
    modifiedTodos[index].completed = (modifiedTodos[index].completed ? false : true);
    saveTodos(modifiedTodos);
  }

  const deleteTodo = (text) => {
    const modifiedTodos = todos.filter(todo=>todo.text !== text);
    saveTodos(modifiedTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toogleCompleteTodos={toogleCompleteTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
