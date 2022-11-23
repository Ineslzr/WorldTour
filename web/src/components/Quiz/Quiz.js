import React, {useState, useEffect} from 'react';
import '../../styles/quiz/quiz.css';
import Score from "./score";
import Question from "./question.js";
import ChoixQuestion from "./choixQuestion";

function Quiz(props){

    const [questions,setQuestions] = useState([{}]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);

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

	useEffect(() => {
		fetch("/Quiz").then(
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
				<span> Quiz FRANCE </span>
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

		</div>
    )
}

export default Quiz;