import React from "react";
import "../css/Buscador.css";
import { TodoContext } from "../TodoContext";

function Buscador() {
  const { searchValues,setSearchValue} = React.useContext(TodoContext);

  const searchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="Container">
      <input
        className="search"
        placeholder="Cebolla"
        value={searchValues}
        onChange={searchValue}
      ></input>
    </div>
  );
}

export { Buscador };
