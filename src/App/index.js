import React from "react";
import { Contador } from "../FunctionJs/contador";
import { Buscador } from "../FunctionJs/Buscador";
import { Lista } from "../FunctionJs/lista";
import { Item } from "../FunctionJs/item";
import { Button } from "../FunctionJs/button";
import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";
import { TaskError } from "../taskError/index";
import { TaskLoading } from "../taskLoading";
import { TaskEmpty } from "../TaskEmpty";
import { TaskHeader } from "../Header";
import { useTask } from "./useTask"

function App() {
  // llamados de reac context
  const {
    error,
    loading,
    searchedTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
    totalTask,
    completedTask,
    searchValues,
    setSearchValue,
    addTask,
  } = useTask();
  return (
    <React.Fragment>
      <TaskHeader>
        <Contador totalTask={totalTask} completedTask={completedTask} />
        <Buscador searchValues={searchValues} setSearchValue={setSearchValue} />
      </TaskHeader>
      <Lista>
        {error && <TaskError />}
        {loading && new Array(5).fill(1).map((a, i) => <TaskLoading key={i} />)}
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
          <TaskForm 
          addTask={addTask}
          setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <Button openModal={openModal} setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;