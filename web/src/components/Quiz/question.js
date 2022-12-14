import React from 'react';
import '../../styles/quiz/question.css';
import IntituleQuestion from './intituleQuestion';
import CompteurQuestion from './compteurQuestion';

function Question(props){
    return(
        <div className='question-section'>
			<CompteurQuestion currentQuestion={props.currentQuestion} nbQuestions={props.nbQuestions}/>
			<IntituleQuestion intitule={props.intitule}/>
		</div>
    )
}

export default Question;