import React from "react";
import '../css/Contador.css'
import { TodoContext } from "../TodoContext";


function Contador (){
    const { totalTask,completedTask } = React.useContext(TodoContext);
    return(
        <h2 className="title"> Usted ha completado <span>{completedTask}</span> de <span>{totalTask}</span> tareas</h2>
    );
}

export {Contador};