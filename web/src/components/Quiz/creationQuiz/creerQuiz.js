import React, { useState } from 'react';
import '../../../styles/quiz/creerQuiz.css';
import CreateQuestion from './CreateQuestion';
import CreateChoice from './createChoice';
import CreateInfoQuiz from './CreateInfoQuiz';

function CreerQuiz(props){
    
    const [infoQuiz, setInfoQuiz] = useState({
        "nom" : "",
        "pays" : "",
        "theme" : ""
    });
    const keysInfo = Object.keys(infoQuiz);

    const [questions, setQuestion] = useState({
        question1 : "",
        question2 : "",
        question3 : "",
        question4 : "",
        question5 : ""
    })

    const isCorrect = [];

    const [choices, setChoices] = useState({
        c1 : "",
        c2 : "",
        c3 : "",
        c4 : "",
        c5 : "",
        c6 : "",
        c7 : "",
        c8 : "",
        c9 : "",
        c10 : "",
        c11 : "",
        c12 : "",
        c13 : "",
        c14 : "",
        c15 : "",
    }

    )

    const handleInfoQuiz = (e) => {
        setInfoQuiz({...infoQuiz, [e.target.name]:e.target.value});
    }

    const handleIsCorrect = (choix) => {
        isCorrect.push(choix);
    }

    const addQuestion = (e,index) => {
        let qu = e.target.value;
        setQuestion({...questions, [e.target.name]:qu});
    }

    const addChoice = (e,index) => {
        let choix = e.target.value;
        setChoices({...choices, [e.target.name] : choix});
    }

    const createQuiz = () => {
        let quiz = [];
        for (const [key, value] of Object.entries(questions)) {
            quiz.push({"intitule" : value, "choix" : []});
        }
        
        let i=0;
        for (const element of quiz) {
            {
                Object.entries(choices)
                    .slice(i*3,(i+1)*3)
                    .map(([key,value],i2) => {
                        if(isCorrect.includes(key)){
                            element.choix.push({"intitule" : value, "isCorrect" : 1 })
                        }else {
                            element.choix.push({"intitule" : value, "isCorrect" : 0 })
                        }                
                    })                 
            }
            i+=1;
        }

       return quiz;
    }

    const submitForm = async (e) => {
        e.preventDefault();
        let quiz=createQuiz();

        const data = new FormData();
        data.append('infoQuiz', JSON.stringify(infoQuiz));
        data.append('quiz',JSON.stringify(quiz));

        let rep = await fetch('/quiz/creation',
        {
            method: 'POST',
            body: data,
        });
        let res = await rep.json();
        console.log(JSON.stringify(res));

    }

    return(
        <div className="makeQuiz">
            <h1>Création de quiz</h1>
            <form className="ui form" onSubmit={submitForm} >
                <div className='infoQuizContainer' >
                    {
                    Object.entries(infoQuiz)
                        .map(([key,value],i) => 
                            <CreateInfoQuiz 
                                key={i} 
                                label={key} 
                                name={key}
                                value={value}
                                handleInfoQuiz={handleInfoQuiz}
                            />                           
                        )
                    }
                </div>
                <div className="quizInsert">
                {
                    Object.entries(questions)
                        .map(([key,value],i) => 
                            <div key={i} className="questionChoix">
                                <CreateQuestion 
                                    key={i}
                                    label= {`Question ${i+1}`}
                                    name={key} 
                                    value={value} 
                                    addQuestion={e => addQuestion(e,i)} 
                                />
                                <div className="choixContainer">
                                {
                                    Object.entries(choices)
                                        .slice(i*3,(i+1)*3)
                                        .map(([key2,value2],i2) => 
                                            <CreateChoice 
                                                key={i2}
                                                label={`Choix ${i2+1}`}
                                                name={key2}
                                                value={value2}
                                                addChoice={(e) => addChoice(e,i2)}
                                                handleIsCorrect={() => handleIsCorrect(key2)}
                                            />
                                        )                                           
                                }
                                </div>
                            </div>
                            
                        )
                } 
                <input className="submitNewQuiz" type="submit" value="Envoyer"/>                               
                </div>
            </form>
        </div>
    )
}

export default CreerQuiz;