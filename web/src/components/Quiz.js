import React, {useState, useEffect} from 'react';
import '../styles/quiz/quiz.css';
import Score from "./score";
import Question from "./question.js";
import ChoixQuestion from "./choixQuestion";
import Mail from "./ShowFormulaire.js";
import Acceptation from "./Acceptation.js";
import ShowFormulaire from './ShowFormulaire.js';


function Quiz(props){

    const [questions,setQuestions] = useState([{}]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showForm,setShowForm]= useState(false);


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

	// const handleFormMail = () => {
	// 	if(mailValide === true){
	// 		setShowEnvoieMail(true);
	// 	}

	// }

	useEffect(() => {
		fetch("/Quiz").then(
			res => res.json()
		).then(
			data => {
				setQuestions(data["questions"])
			}
		)
	}, []);
	 

    return(
		<div>

        <div className='app'>
			{showScore ? (
				<><Score score={score} nbQuestions={questions.length} />
				
			</>
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


				
)}

export default Quiz;
