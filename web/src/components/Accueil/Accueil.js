import React, {useState} from "react";
import '../../styles/quiz/question.css';


function Accueil(props){
    return(
		<>
        <button>Se connecter</button>
        <button>S'inscrire</button>
        <button>Home</button>
        <button>Contact</button>
        <button>Presentation</button>

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