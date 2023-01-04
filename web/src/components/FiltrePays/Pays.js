import React, {useState, useEffect} from 'react';
import '../../styles/quiz/quiz.css';
import {useNavigate, useParams} from 'react-router-dom';

import { useTranslation, Trans } from 'react-i18next'
import i18next from 'i18next';


function Pays(){

    const [quiz, setQuiz] = useState([]);
    let navigate = useNavigate();
    let { country } = useParams();

    const { t, i18n } = useTranslation()

    const goToQuiz = (id_country, country_quiz) => {
        navigate("/Quiz", {state:{id: id_country, country:country_quiz}});
        console.log(id_country)
    } 
	useEffect(() => {
		let url="/ChoixPays/"+country;
		fetch(url).then(
			res => res.json()
		).then(
			data => {
                setQuiz(data)
			}
		)
	}, []);
   
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
    const leftSideCountries = {
        width:"60%"
    };
    const carreInformatif = {
        backgroundColor: "white",
        width: "80%",
        height: "110px",
        padding: "10px", 
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const base = {
        display: "flex",
        justifyContent: "space-between",
        width: "450px",
        height: "200px"
    };
    const rightSideCountries = {
        display: "flex",
        flexDirection: "column",
        width: "40%"
    };
    const lesboutons = {
        marginTop: "5px",
        marginBottom: "5px"
    };

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
			<div style={{...barreLateraleQ}}>
                <span>{country}</span>
			</div>

            <div className='app' style={base}>
                <div style={leftSideCountries}>
                    <div style={carreInformatif}>
                        <p>{t('Choix_quiz.badge')}</p>
                    </div>
                </div>
                                
                <div style={rightSideCountries}>
                    {quiz.map((q) => (
                        <button key={q.id} style={lesboutons} onClick={()=>goToQuiz(q.id_quiz, q.nom)}>{q.nom}</button>
                    ))}
                </div>
		    </div>
        </div>
    )
}

export default Pays;
