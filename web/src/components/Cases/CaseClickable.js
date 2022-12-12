import React from 'react';
import "../../styles/components/caseC.css"

// Case cliquable / bouton
//Boutons pour aller d'une page à une autre
function CaseClickable(props){



    return(
        <button onClick={()=>console.log("z")} className='btn'>{props.intitule}</button>
    )
}

export default CaseClickable;
