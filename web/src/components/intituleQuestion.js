import React from 'react';
import '../styles/quiz/intituleQuestion.css';

function IntituleQuestion(props){
    return(
        <div className='question-text'>
            {props.intitule}
        </div>
    )
}

export default IntituleQuestion;