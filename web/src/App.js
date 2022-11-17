import React, {useState, useEffect} from 'react';
import Quiz from './components/Quiz/Quiz.js';
import ChoixPays from "./components/FiltrePays/ChoixPays"

function App(){
	return(
        <div className='application'>
			<ChoixPays/>
		</div>
	)  
}

export default App;