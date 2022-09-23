import React from "react";
import '../css/lista.css'

function Lista(props){
    return (
    <section className="Container--list">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && !props.searchedTask.length) && props.onEmpty()}

        {/* Podemos usar esta forma OOO */}
        {/* {props.searchedTask.map(todo => props.render(todo))} */}
        {/* O esta es lo mismo pero mas corto */}
        {props.searchedTask.map(props.render)}
        
        <ul 
        className="list">
            {props.children}
        </ul>
    </section>
    );
}

export { Lista };