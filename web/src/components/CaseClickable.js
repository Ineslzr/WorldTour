import React from 'react';
import "../styles/components/caseC.css"

// Case cliquable / bouton
//Boutons pour aller d'une page à une autre
function CaseClickable(props){

    function clickable() {
        console.log("passed");
    }

    return(
        <button className='btn' onClick={clickable()} >{props.intitule}</button>
    )
}

export default CaseClickable;
