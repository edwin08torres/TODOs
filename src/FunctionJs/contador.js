import React from "react";
import "../css/Contador.css";
function Contador({ totalTask, completedTask, loading }) {
  return (
    <h2 className={`title ${!!loading && "Taskloading"}`}>
      Usted ha completado <span>{completedTask}</span> de <span>{totalTask}</span> tareas
    </h2>
  );
}

export { Contador };
