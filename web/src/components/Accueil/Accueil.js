import React, {useState} from "react";
import '../../styles/home/home.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo1.JPG';
import { changeLanguageApp } from "../Langue/appAction";
import { useTranslation, Trans } from 'react-i18next'
import i18next from 'i18next';

import { Link } from 'react-router-dom';


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
				<div className="langue-vn"><span onClick={() => changeLangue('vn')}>VN</span></div>
				<div className="langue-fr"><span onClick={() => changeLangue('fr')}>FR</span></div>
				<div className="langue-en"><span onClick={() => changeLangue('en')}>EN</span></div>	
			</div>
			<div className="menu-nav">
				<div className="menu-gauche">
					<button>{t('Gauche.Home')}</button>
					<button>{t('Gauche.Contact')}</button>
					<button>{t('Gauche.Presentation')}</button>
				</div>

				<div className="menu-droit">	
					<button>{t('Connexion.connect')}</button> 
					<Link to="/SignUpUser">
					<button>{t('Inscription.inscription')}</button>
					</Link>
				</div>
			</div>	
			<br></br>
			<span><label className="font">{t('Welcome.welcome')}</label></span>

		
			<br></br>
			
			<select name="route" id="routeChoix"  onChange={goToRoute}>
            	<option value="">
             		--{t('Menu.choix')}
            	</option>
           		<option value="/PropositionQuizByTheme">{t('Menu.choix_quiz_theme')}</option>
            	<option value="/ChoixPays">{t('Menu.choix_pays')}</option>
				<option value= "/Questionnaire">{t('Menu.questionnaire')}</option> 
				<option value= "/Feature2">{t('Menu.Depose_document')}</option> 
				<option value= "/Historique">{t('Menu.historique')}</option> 
				<option value= "/CreerQuiz">{t('Menu.creation_quiz')}</option> 
				<option value= "/UsersPointsInMap">{t('Menu.carte_points')}</option> 
        	</select>
			
		</div>
		
	</>
	)  
}



export default Accueil;