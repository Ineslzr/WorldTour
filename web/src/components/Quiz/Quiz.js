import React, {useState, useEffect} from 'react';
import '../../styles/quiz/quiz.css';
import Score from "./score";
import Question from "./question.js";
import Acceptation from "./Acceptation.js";
import ShowFormulaire from './ShowFormulaire.js';
import ChoixQuestion from "./choixQuestion";
import {useLocation} from 'react-router-dom';

function Quiz(){

    const [questions,setQuestions] = useState([{}]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [choixUser, setChoixUser] = useState([]);
	const [showForm,setShowForm]= useState(false);
	const location = useLocation();
	const handleAnswerOptionClick = (event, isCorrect) => {

		let valueUser = {rep : event.target.innerText, correct : false};
		let goodResp = questions[currentQuestion].choix.filter(obj => obj.isCorrect);
		//console.log(goodResp[0].intitule);

		if (isCorrect) {
			setScore(score + 1);
			valueUser = {rep : event.target.innerText, correct : true}
		} 

		valueUser["correction"] = goodResp[0].intitule;

		setChoixUser(current => [...current, valueUser]);
		console.log(choixUser)

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

	const sendScoreHistorique = async (e)=>{
		e.preventDefault();
		if (currentQuestion!= questions.length+1) {
			const scoreResult = new FormData();
			scoreResult.append('scoreHistorique',score);
			scoreResult.append('typeHistorique','quiz')
			let response = await fetch('/scoreQuiz',
			{
				method: 'post',
				body: scoreResult,
			}
			);
			// console.log(response);
	
			let res = await response.json();
			console.log(res);
	}
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
	const displayQuiz = {
		display: "flex",
		flexDirection: "space-around",
		width: "420px",
	};
	const choices = {
	};
	

    return(
		<div style={{display:"flex", flexDirection:"column"}}>

			<div style={barreLateraleQ}>
				<span>{location.state.country}</span>
			</div>

			<div className='app'>
				{showScore ? (
					<div className='score'><Score score={score} nbQuestions={questions.length} questions={questions} choixUser={choixUser} g={questions[currentQuestion].choix} /><button onClick={sendScoreHistorique}>save</button></div>) 
					: (
					<div style={displayQuiz}>
						<Question 
							currentQuestion={currentQuestion + 1} 
							nbQuestions={questions.length} 
							intitule={questions[currentQuestion].intitule} 
						/>
						{questions[currentQuestion].choix ?
							<div style={choices}>
								<ChoixQuestion
									choix={questions[currentQuestion].choix} 
									currentQuestion={currentQuestion}
									handleAnswerOptionClick={handleAnswerOptionClick}
								/> 
							</div>
						:
							<></>
						}
					</div>
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