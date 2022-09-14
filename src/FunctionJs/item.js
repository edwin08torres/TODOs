import React from "react";
import "../css/item.css";

function Item(props) {
  //  const onComplete = () => {
  //    alert("Ya completamos una tarea : " + props.text);
  //  };

  // const onDelete = () => {
  //   alert("Acaba de borrar un TODOs : " + props.text);
  // };
  return (
    <section className="containers">
      <li className="container--item">
        <span
          onClick={props.onComplete}
          className={`Icon fa fa-check ${
            props.completed && "Icon--check__active"
          }`}
        ></span>
        <p className={`text  ${props.completed && "text-complete"}`}>
          {props.text}
        </p>
        <span className="delete fa-solid fa-trash" onClick={props.onDelete}></span>
      </li>
    </section>
  );
}

export { Item };
