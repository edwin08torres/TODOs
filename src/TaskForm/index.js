import React from "react";
import { TodoContext } from "../TodoContext";

function TaskForm() {
    // Creamos el estado para el nuevo TODOs
  const [newTaskValue,setNewTaskValue] = React.useState('');
    const { 
    addTodo,
    setOpenModal,
} = React.useContext(TodoContext);

const onChange = (event) =>{
    setNewTaskValue(event.target.value);  
  }
  const onCancel = () => {
   setOpenModal(false);
  };

  
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTaskValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onsubmit}>
      <label>Escribe tu nuevo TASK</label>
      <textarea
       value={newTaskValue}
       onChange={onChange}
       placeholder="Ingrese tus tareas kbron" 
       />
      <div>
        <button 
        type="button" 
        onClick={onCancel}>
          Cancelar
        </button>
        <button 
        type="submit"
        onClick={onSubmit}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TaskForm };
