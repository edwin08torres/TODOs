import React from "react";
import "../css/Buscador.css";
function Buscador({ searchValues, setSearchValue , loading}) {
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
        disabled={loading}
      ></input>
    </div>
  );
}

export { Buscador };
