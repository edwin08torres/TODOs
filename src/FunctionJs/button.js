import React from "react";
import '../css/button.css'

function Button(props/*{setOpenModal,openModal}*/){
    const buttonAction = ()=>{
        // mi solucion
    //    if(openModal){
    //     setOpenModal(false);
    //    }else{
    //     setOpenModal(true);
    //    }

    props.setOpenModal(prevState => !prevState);
    }

    return(
        <button className="btn" 
        onClick={buttonAction}>
            +
        </button>
    );
}

export { Button }; 