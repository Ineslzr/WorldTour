import React, {useState} from "react";
import '../../styles/home/home.css';
import {Link } from "react-router-dom";


function Accueil(props){
    return(
		<>
		<div className="menu-home">
			<div>
        		<button>Home</button>
        		<button>Contact</button>
        		<button>Presentation</button>
			</div>
			<div>	
       		 	<button>Se connecter</button> 
        		<button>S'inscrire</button>
			</div>
		</div>

		<nav>
			<Link to="/PropositionQuizByTheme" relative="path">Choisissez un quiz selon vos thèmes préférés !</Link><br/>	
			<Link to="/ChoixPays" relative="path">Choix du pays</Link><br/>
			<Link to="/Questionnaire" relative="path">Questionnaire</Link><br/>
			<Link to="/Feature2" relative='path'>Déposer un document pdf</Link><br/>
		</nav>
		
	</>
	)  
}

export default Accueil;