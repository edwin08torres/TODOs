import React from "react";
import { AppUI } from "./appUI";
import { TodoPriveder } from "../TodoContext";
// import { useLocalStorage } from "../TodoContext/useLocalStorage"


function App() {

  

  return (
    <TodoPriveder>
      {/* // Enviando propiedas al archivo AppUI */}
      <AppUI />
    </TodoPriveder>
  );
}

export default App;
