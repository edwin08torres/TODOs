import React from "react";
import "../css/error.css";
function TaskError() {
  return (
    <section className="Container--error">
      <i className="fa-sharp fa-solid fa-bomb"></i>
      <div className="Parrafo">
        <p className="Mensaje">
          ¡ups!, parece que ha sucedido un error, ten un poco de paciencia,
          estamos tratando de solucionar este pequeño problema
        </p>
      </div>
    </section>
  );
}

export { TaskError };
