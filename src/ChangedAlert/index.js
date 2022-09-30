import React from "react";
import { useStorageListener } from "./useStorageListener";
import "../css/change.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="Container--change">
        <div className="container--messageC">
          <p className="message--change">Hubo cambios</p>
        </div>
        <button className="btn--change" onClick={() => toggleShow(false)}>
          Actualizar
        </button>
      </div>
    );
  } else {
    return null;
  }
}



export { ChangeAlert };
