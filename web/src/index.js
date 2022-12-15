import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoixPays from './components/FiltrePays/ChoixPays';
import Questionnaire from './components/Questionnaire/questionnaire';
import Quiz from './components/Quiz/Quiz';
import Feature2 from './composants/featurePDF/feature2';
import PropositionQuizByTheme from './components/Quiz/PropositionQuizByTheme';
import CreerQuiz from './components/Quiz/creationQuiz/creerQuiz';
import Pays from '../src/components/FiltrePays/Pays'
import Historique from './composants/featurePDF/historique';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Questionnaire" element={<Questionnaire/>}/>
        <Route path="/ChoixPays" element={<ChoixPays/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/Feature2" element={<Feature2/>}/>
        <Route path="/Historique" element={<Historique/>}/>
        <Route path="/PropositionQuizByTheme" element={<PropositionQuizByTheme/>}/>
        <Route path="/CreerQuiz" element={<CreerQuiz/>}/>
        <Route path="/ChoixPays/:country" element={<Pays/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
