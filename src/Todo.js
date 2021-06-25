import { useState } from "react";
import "./App.css";

function Todo({Item, iList, id}) {


    return (
        <div className="todo">
            <li>{Item}</li>
            
        </div>
    )
}

export default Todo
