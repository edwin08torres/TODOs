import React from "react";

function TaskError({error}){
    return (
      <section className="Container--error">
        <p className="Mensaje">{error}</p>
      </section>
    );
}

export { TaskError };
