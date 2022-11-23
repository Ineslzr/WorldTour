import React, {useState} from "react";
//import Question from "./question";
//import Propositions from "./propositions";
import '../../styles/questionnaire/questionnaire.css';
import Propositions from "./propositions";

function Questionnaire(props){
    const [data, setData] = useState({
        questionnaire: [
          { question : 'Quels sont vos centres d\'intérêt ?',
          propositions: [
              { id:1, value: 'Cuisine', checked: false},
              { id:2, value: 'Musique', checked: false},
              { id:3, value: 'Sport', checked: false},
              { id:4, value: 'Art', checked: false},
          ]},
          { question: 'Quelles langues parlez-vous ?',
          propositions: [
              { id:5, value: 'Anglais', checked: false},
              { id:6, value: 'Allemand', checked: false},
              { id:7, value: 'Arabe', checked: false},
              { id:8, value: 'Italien', checked: false},
          ]},
          { question: 'Quels pays avez-vous visité ?',
          propositions: [
              { id:9, value: 'Maroc', checked: false},
              { id:10, value: 'Italie', checked: false},
              { id:11, value: 'Belgique', checked: false},
              { id:12, value: 'Angleterre', checked: false},
          ]},
          { question: 'Qu\'est-ce qui vous intéresse dans la culture d\'un pays ?',
          propositions: [
              { id:13, value: 'Son histoire', checked: false},
              { id:14, value: 'Sa gastronomie', checked: false},
              { id:15, value: 'Les paysages', checked: false},
              { id:16, value: 'L\'art', checked: false},
          ] }
        ]

    });

    const [reponse, setReponse] = useState([]);
    const [isSend, setIsSend] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        setIsSend(true);

        if (reponse != null) {
            const data = new FormData();
            data.append('reponse_questionnaire', reponse);

            let rep = await fetch('/Questionnaire',
            {
                method: 'post',
                body: data,
            }
            );
            let res = await rep.json();
            console.log("RES:"+res);
        }

        
            
    }

    const updateState = (id,index) => {
        
        //On passe checked à true pour la réponse cochée
        const newData = data.questionnaire;
        const updatedItems = [data.questionnaire[index].propositions]; 
        const itemId = updatedItems[0].findIndex((obj) => obj.id === id);
        updatedItems[0][itemId].checked = !updatedItems[0][itemId].checked;
        newData[index].propositions = updatedItems[0];
        
        setData({
            ...data,
            questionnaire: newData,
        });

    
        //on ajoute la réponse coché à la liste de réponse
        let rep=updatedItems[0][itemId].value;
        setReponse(current => [...current,rep]);

        console.log(reponse);
        
      };
    
    const {questionnaire} = data;

    return(
        <div  className="questionnaire">
            {isSend == false ?
            (<><h1>Questionnaire : </h1>
            <form className="ui form" onSubmit={submitForm}>
                {questionnaire.map((quest, index) => {
                    return (
                    <div key={index}>
                        <h2>{quest.question}</h2>
                        
                            {quest.propositions.map((prop, index2) => {
                            return(
                                <div key={index2}>
                                    <li>
                                        <label htmlFor="check">
                                            <input
                                            type="checkbox"
                                            id="check"
                                            value={prop.value}
                                            checked={prop.checked}
                                            onChange={() => updateState(prop.id,index )}
                                            />{" "}
                                            {prop.value} {prop.checked}
                                        </label>
                                    </li>
                                </div>
                            );
                            })}                
                        
                    </div>
                    );
                })}

            <input type="submit" value="Envoyer" className="submitQuestionnaire" />
        </form></>) : <h1>Merci d'avoir répondu !</h1>}
            
    </div>
    )







    /*const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const goBack = () => {
        const precQuestion = currentQuestion - 1;
        if(precQuestion >= 0){
            setCurrentQuestion(precQuestion);
        }
    };

    const goNext = () => {
        const nextQuestion = currentQuestion + 1;      
        if(nextQuestion < 4){
            setCurrentQuestion(nextQuestion);
        }
    };

        return (
            <div className="questionnaire">
                <div className="wrapper">
                    <h2>{questionnaire[currentQuestion].question}</h2>

                    <div className="prop">
                        {currentQuestion > 0 ?
                            <button 
                                className="buttonPrecNext"
                                onClick={() => goBack()}
                            > 
                                PREC 
                            </button>
                        : 
                            <></>
                        }

                        <div className="listeProp">
                            <Propositions propositions={questionnaire[currentQuestion].propositions}/>  
                            <div className='question-count'>
                                <span>{currentQuestion + 1}</span>/{questionnaire.length}
                            </div>
                         </div>                 
                        
                        {currentQuestion +1 < 4 ?
                            <button 
                                className="buttonPrecNext"
                                onClick={() => goNext()}
                            > 
                                NEXT 
                            </button>
                    
                        : 
                            <></>
                        }
                    </div>           
                </div>               
            </div>
        )*/
    
}
export default Questionnaire;