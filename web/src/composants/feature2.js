import Proposition from './proposition'
import React, {useState} from 'react';
import '../css/feature2.css'; 
import LecteurPdf from './lecteurPdf';


function Feature2(props){
    const [showLecteur, setShowLecteur] = useState(true);
    
    const handleClickButton=()=>{
      setShowLecteur(false); 
    }
	return(
    <div className='app'>
        {showLecteur ? ( <Proposition handleClickButton={handleClickButton}/>):(<LecteurPdf/>)}
    </div>
	)
  
}

export default Feature2;