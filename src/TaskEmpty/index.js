import React from "react";
import "../css/empty.css";

function TaskEmpty() {
  return (
    <section className="container--empty">
      <div className="container--message">
        <p className="message">
          Esto esta demasiado vacio <i className="fa-solid fa-face-frown"></i>
        </p>
        <p className="message2">
        !Vamos a crear unas <span>TASKS!</span> Toca <span>+</span>
        </p>
      </div>
    </section>
  );
}

export { TaskEmpty };
