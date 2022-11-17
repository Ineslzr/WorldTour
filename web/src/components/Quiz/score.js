import React, {useState, useEffect} from 'react';
import '../../styles/quiz/quiz.css';

function Score(props){
    return(
        <div className='score-section'>
			Votre score est de {props.score} sur {props.nbQuestions} !
		</div>
    )
}

export default Score;