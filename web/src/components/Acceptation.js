import React, { useState } from 'react';
import '../styles/quiz/quiz.css';
import Question from "./question.js";
import Mail from "./ShowFormulaire.js";




function Acceptation(props){
    const [mailValide, setMailValide] = useState(true);
    const handleFormMail = () => {
        if(mailValide === true){
            setMailValide(true);
        }
    
    }
   
    return(
        <div  className='button-valide'>
				<button style={{backgroundColor:"#C37857", border:"#C37857 1px solid"}} onClick={props.handleFormMail}> Voulez-vous recevoir votre résultat par mail ?</button>
		</div>
    )
}

export default Acceptation;