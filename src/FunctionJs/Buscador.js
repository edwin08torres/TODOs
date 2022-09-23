import React from "react";
import "../css/Buscador.css";
function Buscador({ searchValues, setSearchValue }) {
  const searchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="Container">
      <input
        className="search"
        placeholder="Buscar task"
        value={searchValues}
        onChange={searchValue}
      ></input>
    </div>
  );
}

export { Buscador };
