import React, {useState} from "react";
import '../../styles/home/home.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo1.JPG';
import { changeLanguageApp } from "../Langue/appAction";
import { useTranslation, Trans } from 'react-i18next'
import i18next from 'i18next';



function Accueil(props){
	

	const[option, setOption]=useState('');
	const navigate = useNavigate();

	const goToRoute = (e) => {
		let value = e.target.value;
        navigate(value);
    } 

	function handleOptionButtonChange(event) {
        setOption(event.target.value);
    }

			
	const { t, i18n } = useTranslation()
	function changeLangue(language){
		i18next.changeLanguage(language)
	}

    return(
		<>
		<div>
			<img src={logo} width="300" height="128"></img>	
		</div>	
		<div className="menu-home">
			<div className="langue">
				<div className="langue-vi"><span onClick={() => changeLangue('vi')}>VN</span></div>
				<div className="langue-fr"><span onClick={() => changeLangue('fr')}>FR</span></div>
				<div className="langue-en"><span onClick={() => changeLangue('en')}>EN</span></div>	
			</div>
			<div className="menu-nav">
				<div className="menu-gauche">
					<button>Contact</button>
					<button>Contact</button>
					<button>Presentation</button>
				</div>

				<div className="menu-droit">	
					<button>Se connecter</button> 
					<button>S'inscrire</button>
				</div>
			</div>	
			<br></br>
			<span><label className="font">{t('Welcome')}</label></span>

		
			<br></br>
			
			<select name="route" id="routeChoix"  onChange={goToRoute}>
            	<option value="">
             		--Choisir une thème 
            	</option>
           		<option value="/PropositionQuizByTheme">Choisissez un quiz selon vos thèmes préférés !</option>
            	<option value="/ChoixPays">Choix du pays</option>
				<option value= "/Questionnaire">Questionnaire</option> 
				<option value= "/Feature2">Déposer un document pdf</option> 
				<option value= "/Historique">Historique</option> 
				<option value= "/CreerQuiz">Créer un quiz</option> 

        	</select>
			
		</div>
		
	</>
	)  
}



export default Accueil;