import Proposition from './proposition'
import React, {useState} from 'react';
import '../css/feature2.css'; 
import LecteurPdf from './lecteurPdf';


function Feature2(props){
    const [showLecteur, setShowLecteur] = useState(true);
    console.log("SHOWLECTEUR:"+ showLecteur);
    const handleClickButton=()=>{
    if(showLecteur===true){setShowLecteur(false); }
    else setShowLecteur(true);
      
    }
	return(
    <div className='app'>
        {showLecteur ? ( <Proposition handleClickButton={handleClickButton}/>):(<LecteurPdf  handleClickButton={handleClickButton}/>)}
    </div>
	)
  
}

export default Feature2;