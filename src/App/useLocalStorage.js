import React from "react";

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
  // ¡Podemos utilizar otros hooks!
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  // Estado inicial :  NO ha habido un error!
  const [error, setError] = React.useState(false);

  // Este estado nos dira si estamos sincronizados con todas las pestañas y ventanas del navegador o no 
  const [sincronizedItem, setSincronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Guardamos nuestro item en una constante
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 5000);
  }, [sincronizedItem]);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveTask = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () =>{
    setLoading(true);
    setSincronizedItem(false);
    setItem(initialValue);
  }
  // Regresamos los datos que necesitamos
  return {
    item,
    saveTask,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };
