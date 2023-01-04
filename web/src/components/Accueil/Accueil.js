import React, {useState} from "react";
import '../../styles/home/home.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo1.JPG';
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

    return(
		<>
		<div>
			<img src={logo} width="300" height="128"></img>	
		</div>	
		<div className="menu-home">
			<div className="menu-nav">
				<div className="menu-gauche">
					<button>Home</button>
					<button>Contact</button>
					<button>Presentation</button>
				</div>

				<div className="menu-droit">	
					<button>Se connecter</button> 
					<Link to="/SignUpUser">
						<button>S'inscrire</button>
					</Link>

				</div>
			</div>	
			<br></br>
			<span><label className="font">Welcome to our site World Tour </label></span>
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