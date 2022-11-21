import React from "react";
import '../../styles/quiz/choixQuestion.css';
import Choix from "./Choix";


function ChoixQuestion(props){
    
    return (
        <div className='answer-section'>
            {                
                props.choix.map((ch, index) => (
                    <Choix 
                        key={index} 
                        handleAnswerOptionClick={event => props.handleAnswerOptionClick(event,ch.isCorrect)}
                        intitule={ch.intitule}
                    />
                ))           
            }
        </div>
    )
}

export default ChoixQuestion;