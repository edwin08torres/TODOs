import React from "react";
import "../css/found.css"
function TaskEmptyResult(props){
    return(
        <p className="no--found"> No se ha encontrado la busquedad de : <span>{props.searchText}</span></p>
    )
}

export { TaskEmptyResult };