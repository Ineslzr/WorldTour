import React from 'react';
import {Link} from "react-router-dom";

function App(){
	return(
		<>
		<nav>
			<Link to="/PropositionQuizByTheme" relative="path">Choisissez un quiz selon vos thèmes préférés !</Link><br/>
			<Link to="/CreerQuiz" relative='path'>Créer un quiz</Link><br/>	
			<Link to="/ChoixPays" relative="path">Choix du pays</Link><br/>
			<Link to="/Questionnaire" relative="path">Questionnaire</Link><br/>
			<Link to="/Feature2" relative='path'>Déposer un document pdf</Link><br/>
			<Link to="/Historique" relative='path'>Visualiser l'historique de vos points</Link><br/>
		</nav>
		
	</>
	)  
}

export default App;