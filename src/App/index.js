import React from "react";
import { AppUI } from "./appUI";
import { TodoPriveder } from "../TodoContext";
// import { useLocalStorage } from "../TodoContext/useLocalStorage"

// function App() {
//   const [state, setState] = React.useState('estado compartido');

//   return (
//     <React.Fragment>
//       <TaskHeader>
//         <TaskCounter></TaskCounter>
//         <TaskSearch></TaskSearch>
//       </TaskHeader>
//       <TaskList>
//         <TaskItem state={state} />
//       </TaskList>
//     </React.Fragment>
//   );
// }

// function TaskHeader({ children }) {
//   return (
//     <header>
//       {children}
//     </header>
//   )
// }

// function TaskList({ children }) {
//   return (
//   <section className="TaskList--container">
//     {children}
//   </section>
//   )
// }


// function TaskCounter(){
//   return (
//     <p>Hola maricon soy un task counter</p>
//   )
// }

// function TaskSearch() {
//   return <p>Hola maricon soy un task search</p>;
// }

// function TaskItem({state}) {
//   return <p>Hola maricon soy un task item :{state}</p>;
// }


function App() {
  return (
    <TodoPriveder>
      {/* // Enviando propiedas al archivo AppUI */}
      <AppUI />
    </TodoPriveder>
  );
}

export default App;
