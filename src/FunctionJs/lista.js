import React from "react";
import '../css/lista.css'

function Lista(props){
    return(
        <section className="Container--list">
            <ul className="list">
                {props.children}
            </ul>
        </section>
    )
}

export { Lista };