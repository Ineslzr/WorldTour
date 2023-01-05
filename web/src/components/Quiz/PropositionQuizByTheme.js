import React, {useState,useEffect} from "react";
import '../../styles/quiz/PropositionQuizByTheme.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'
import i18next from 'i18next';

function PropositionQuizByTheme(props){

    const [quiz,setQuiz] = useState([{}]);
    const navigate = useNavigate();

    const goToQuiz = (quiz_id,quiz_nom) => {
        navigate('/Quiz',{state:{id:quiz_id, nom:quiz_nom}});
    } 

    const { t, i18n } = useTranslation()

    useEffect(() => {
		fetch("/quiz/1").then(
			res => res.json()
		).then(
			data => {
				setQuiz(data)
			}
		)
	}, [console.log(quiz)]);

    return(
        <div>
            {quiz ?
                <div className="wrapperPropositionQuiz">
                    <h1>{t('Choix_quiz.theme')} {quiz[0].Theme}</h1>
                    {quiz.map((qu, index) => (
                        <div className="buttonQuiz">                           
                            <button onClick={()=>goToQuiz(qu.id_quiz,qu.nom)}>{qu.nom}</button>
                        </div>
                    ))}

                </div>           
            :
            <></>}
        </div>
    )
}

export default PropositionQuizByTheme;