import React from "react";
import "../css/lista.css";

function Lista(props) {
//   const renderFunct = props.children || props.render;

  return (
    <section className="Container--list">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTask && props.onEmpty()}

      {!!props.totalTask &&
        !props.searchedTask.length &&
        props.onEmptySearchResult(props.searchText)}

      {/* Podemos usar esta forma OOO */}
      {/* {props.searchedTask.map(todo => props.render(todo))} */}
      {/* O esta es lo mismo pero mas corto */}
      {props.searchedTask.map(props.render ?? props.children)}

      <ul className="list">{props.children}</ul>
    </section>
  );
}

export { Lista };
