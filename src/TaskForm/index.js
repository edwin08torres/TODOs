import React from "react";
import "../css/form.css"

function TaskForm({addTask,setOpenModal}) {
  // Creamos el estado para el nuevo TODOs
  const [newTaskValue, setNewTaskValue] = React.useState("");
  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  };
  return (
    <section className="main--container">
      <form onSubmit={onsubmit} className="form--container">
        <label className="form--tittle">
          Escribe tu nuevo <span>TASK</span>
        </label>
        <textarea
          className="form--textarea"
          value={newTaskValue}
          onChange={onChange}
          placeholder="Ingrese tus tareas kbron"
        />
        <div className="buttons">
          <button className="form--btn" type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button className="form--btn otro" type="submit" onClick={onSubmit}>
            Añadir
          </button>
        </div>
      </form>
    </section>
  );
}

export { TaskForm };
