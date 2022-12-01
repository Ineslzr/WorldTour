import React from 'react';
import '../../styles/quiz/quiz.css';

function Recapitulatif(props){
    return(
        <div>
            {props.questions.map((e,index) => 
                <p> </p>
            )}
		</div>
    )
}

export default Recapitulatif;