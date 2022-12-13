import React, {useState, useEffect} from 'react';
import '../../styles/quiz/quiz.css';

function Score(props){


    return(
        <div className='score-section'>
			Votre score est de {props.score} sur {props.nbQuestions} !<br></br>
             Vous avez remporté {props.score} points
		</div>
    )
}

export default Score;