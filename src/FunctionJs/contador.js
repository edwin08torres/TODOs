import React from "react";
import '../css/Contador.css'
function Contador({totalTask, completedTask}) {
  return (
    <h2 className="title">
      {" "}
      Usted ha completado <span>{completedTask}</span> de{" "}
      <span>{totalTask}</span> tareas
    </h2>
  );
}

export {Contador};