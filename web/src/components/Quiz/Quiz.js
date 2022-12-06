import React, {useState, useEffect} from 'react';
import '../../styles/quiz/quiz.css';
import Score from "./score";
import Question from "./question.js";
import Mail from "./ShowFormulaire.js";
import Acceptation from "./Acceptation.js";
import ShowFormulaire from './ShowFormulaire.js';
import ChoixQuestion from "./choixQuestion";
import {useLocation} from 'react-router-dom';

function Quiz(){

    const [questions,setQuestions] = useState([{}]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showForm,setShowForm]= useState(false);
	const location = useLocation();

	//const [country, setCountry] = useState("");

	const handleAnswerOptionClick = (event, isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const handleFormMail = () => {
		if(showForm === false){
			setShowForm(true);
		}
		else setShowForm(false);

	}

	useEffect(() => {
		let url="/Quiz/"+location.state.id;
		fetch(url).then(
			res => res.json()
		).then(
			data => {
				setQuestions(data["questions"])
			}
		)
	}, []);

	//CSS
	const barreLateraleQ = {
		display: "flex",
		justifyContent: "space-evenly",
		width: "450px",
		minHeight: "10px",
		borderRadius: "7px", 
		backgroundColor: "#B1E9A3",
		border: "2px solid #7ac38f",
		padding: "20px",
		fontSize:"large",
		fontWeight:"bold",
		marginBottom:"15px"
	};

    return(
		<div style={{display:"flex", flexDirection:"column"}}>

			<div style={barreLateraleQ}>
				<span>{location.state.country}</span>
			</div>

			<div className='app'>
				{showScore ? (
					<Score score={score} nbQuestions={questions.length} />
				) : (
					<>
						<Question 
							currentQuestion={currentQuestion + 1} 
							nbQuestions={questions.length} 
							intitule={questions[currentQuestion].intitule} 
						/>
						{ questions[currentQuestion].choix ?
							<ChoixQuestion 
								choix={questions[currentQuestion].choix} 
								currentQuestion={currentQuestion}
								handleAnswerOptionClick={handleAnswerOptionClick}
							/> 
						:
							<></>
						}
					</>
				)}
			</div>
			{showScore ? (<div className='form-validation'>
				{showForm ?(<ShowFormulaire/>):(
					<Acceptation handleFormMail={handleFormMail} />) }
				</div>
		) : 
		
		(<></>)}
		</div>
    )
}

export default Quiz;