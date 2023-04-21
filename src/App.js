import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';

const defaultTodos = [
  {id: 1, text: 'Estudiar JavaScript', completed: true},
  {id: 2, text: 'Estudiar React', completed: false},
  {id: 3, text: 'Estudiar NestJs', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(modifiedTodos);
  }

  const deleteTodo = (text) => {
    const modifiedTodos = todos.filter(todo=>todo.text !== text);
    setTodos(modifiedTodos);
  }

  return (
    <React.Fragment>
      <div className="main-container">
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.id} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toogleCompleteTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
      </div>
    </React.Fragment>
  );
}

export default App;
