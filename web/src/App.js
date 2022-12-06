import React from 'react';
import {Link} from "react-router-dom";

function App(){
	return(
		<>
		<div>
		<button>Se connecter</button>
        <button>S'inscrire</button>
        <button>Home</button>
        <button>Contact</button>
        <button>Presentation</button>
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

export default App;