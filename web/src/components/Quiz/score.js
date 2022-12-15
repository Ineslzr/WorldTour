import React, {useState} from 'react';
import '../../styles/quiz/quiz.css';

function Score(props){
    const [showResults, setShowResults] = useState(false);

    const handleShowResults = () => {
        setShowResults(true)
    }

    const centrage = {
        margin: "0 auto"
    };    
    const qu_styles = {
        fontStyle : "italic",
        margin:"1px"
    };
    const rep_right = {
        color: "green",
        margin:"1px"
    };
    const line_correction = {
        display:"flex",
        flexDirection:""
    };
    const rep_false = {
        color: "red",
        margin:"1px",
        textDecoration:"line-through"
    };
    const btn = {
        margin: "0 auto",
        fontSize: "12px"
    };

    return(
        <div style={centrage} className='score-section'>
			<h2>Votre score est de {props.score} sur {props.nbQuestions} !</h2>
            <br></br>
            <h2>Vous avez remporté {props.score} points</h2>

            <> {showResults ? <></> : 
            <div><button style={btn} onClick={handleShowResults}>Voir mes réponses</button></div>}

            {showResults ?
                <>
                    {props.questions.map((e,index) => 
                        <>  <p style={qu_styles}>{e.intitule}</p>
                            <span style={line_correction}> <p style={{...props.choixUser[index].correct ? rep_right : rep_false}}>{props.choixUser[index].rep} </p> &nbsp;&nbsp;
                            {!props.choixUser[index].correct ? <p style={rep_right}>{props.choixUser[index].correction}</p> : <></>}
                            </span>
    
                        </>
                    )}
                </>
            : 
                <></>
            }</>

    
		</div>
    )
}

export default Score;