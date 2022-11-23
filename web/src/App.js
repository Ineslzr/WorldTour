import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from "react-router-dom";
import ChoixPays from './components/FiltrePays/ChoixPays';
import Questionnaire from './components/Questionnaire/questionnaire';
import Quiz from './components/Quiz/Quiz';
import Feature2 from './composants/featurePDF/feature2';

function App(){
	return(
		<>
		<Router>
			<Routes>
				<Route path="/Questionnaire" element={<Questionnaire/>}/>
				<Route path="/ChoixPays" element={<ChoixPays/>}/>
				<Route path="/Quiz" element={<Quiz/>}/>
				<Route path="/Feature2" element={<Feature2/>}/>
			</Routes>
		</Router>	

		<a href="/Quiz" class="active">Quiz</a> <br/>
		<a href="/ChoixPays" class="active">Choix du pays</a><br/>
		<a href="/Questionnaire" class="active">Questionnaire</a><br/>
		<a href="/Feature2" class="active">Déposer un document pdf</a><br/>
	</>
	)  
}

export default App;