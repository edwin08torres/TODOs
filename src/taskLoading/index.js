import React from "react";
import '../css/loading.css'

function TaskLoading(){
    return (
      <div className="loadingTask--container">
        <span className="icon fa fa-check"></span>
        <p className="loadingText">Cargando Task...</p>
        <span className="loading-deleteIcon  fa-solid fa-trash"></span>
      </div>
    );
}

export { TaskLoading };