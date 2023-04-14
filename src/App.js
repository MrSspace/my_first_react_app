import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';

const todos = [
  {id: 1, text: 'Estudiar JavaScript', completed: true},
  {id: 2, text: 'Estudiar React', completed: true},
  {id: 3, text: 'Estudiar NestJs', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
      </div>
    </React.Fragment>
  );
}

export default App;
