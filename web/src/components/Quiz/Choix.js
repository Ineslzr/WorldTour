import React from 'react';
import '../../styles/quiz/choix.css';

function Choix(props){
        
    const btn_choix = {
        marginTop: "12px",
        marginBottom: "15px",
        width:"150px"
    };

    return(
        <button style={btn_choix} key={props.index} onClick={props.handleAnswerOptionClick}>{props.intitule}</button>
    )
}

export default Choix;