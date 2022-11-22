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

function App(){
	return(
		<>
		<Router>
			<Routes>
				<Route path="/Questionnaire" element={<Questionnaire/>}/>
				<Route path="/ChoixPays" element={<ChoixPays/>}/>
				<Route path="/Quiz" element={<Quiz/>}/>
			</Routes>
		</Router>	

		<a href="/Quiz" class="active">Quiz</a> <br/>
		<a href="/ChoixPays" class="active">Choix du pays</a><br/>
		<a href="/Questionnaire" class="active">Questionnaire</a><br/>
	</>
	)  
}

export default App;