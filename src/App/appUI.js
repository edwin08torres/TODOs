import React from "react";
import { Contador } from "../FunctionJs/contador";
import { Lista } from "../FunctionJs/lista";
import { Buscador } from "../FunctionJs/Buscador";
import { Item } from "../FunctionJs/item";
import { Button } from "../FunctionJs/button";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";
import { TaskError } from "../taskError/index"
import { TaskLoading } from "../taskLoading"
import { TaskEmpty } from "../TaskEmpty"


function AppUI() {
// llamados de reac context
  const {
    error,
    loading,
    searchedTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Contador />
      <Buscador />

      <Lista>
        {error && <TaskError />}
        {loading && new Array(5).fill(1).map((a,
        i) => <TaskLoading key={i}/>)}
        {!loading && !searchedTask.length && <TaskEmpty />}
        {searchedTask.map((todo) => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
          />
        ))}
      </Lista>

      {/* Preguntamos si "openModal es = true 
          si es asi, entramos a las siguientes lineas de codigo.*/}
      {!!openModal && (
        <Modal>
          {/* '?' con esto estamos preguntado si existe el array de "searchedTask"
        para luego mostrar el texto ".text" */}
          {/* <p>{searchedTask[2]?.text}</p> */}
            <TaskForm />
        </Modal>
      )}
      <Button 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
