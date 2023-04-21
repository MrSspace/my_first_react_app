import React from "react";
import './CreateToDoButton.css'

function CreateTodoButton(props) {
    const createToDo = (todo) => {
        alert('Hola, mundo');
    };

    return(
        <button 
            className="create-todo-button"
            onClick={() => createToDo()}
        >
            +
        </button>
    );
}

export { CreateTodoButton };