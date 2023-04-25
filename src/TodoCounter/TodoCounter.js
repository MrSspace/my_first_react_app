import React from "react";
import './TodoCounter.css';

function TodoCounter({total,completed}){
    return(
      <h2 className="TodoCounter">
        You have {completed} of {total} ToDos completed
      </h2>
    );
}

export { TodoCounter };