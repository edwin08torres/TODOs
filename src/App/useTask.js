import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTask() {
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const {
    item: task,
    saveTask,
    sincronizeItem: sincronizeTask,
    loading,
    error,
    
  } = useLocalStorage("TASK_V1", []);
  const [searchValues, setSearchValue] = React.useState("");
  const completedTask = task.filter((todo) => !!todo.completed).length;
  const totalTask = task.length;
  const [openModal, setOpenModal] = React.useState(false);
  let searchedTask = [];

  if (!searchValues >= 1) {
    searchedTask = task;
  } else {
    searchedTask = task.filter((todo) => {
      const taskText = todo.text.toLowerCase();
      const searchText = searchValues.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  // Función para añadir un nuevo TODO
  const addTask = (text) => {
    const newTask = [...task];
    newTask.push({
      completed: false,
      text,
    });
    saveTask(newTask);
  };

  const completeTask = (text) => {
    const taskIndex = task.findIndex((todo) => todo.text === text);
    const newTask = [...task];
    newTask[taskIndex].completed = true;
    saveTask(newTask);
    /* Esto es lo mismo que lo que tenemos en la parte de arriba.
      task[taskIndex] ={
        text: task[taskIndex].text,
        completed:true, 
    }*/
  };

  const deleteTask = (text) => {
    const taskIndex = task.findIndex((todo) => todo.text === text);
    const newTask = [...task];
    newTask.splice(taskIndex, 1);
    saveTask(newTask);
  };
  return {
        loading,
        error,
        totalTask,
        completedTask,
        searchValues,
        setSearchValue,
        searchedTask,
        addTask,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        sincronizeTask,
  }
}

export { useTask };
