import Proposition from './proposition'
import React, {useState} from 'react';
import '../../css/featurePDF/feature2.css'; 
import LecteurPdf from './lecteurPdf';


function Feature2(){
    const [showLecteur, setShowLecteur] = useState(true);
    const [optionValue, setoptionValue]= useState('');

    console.log("SHOWLECTEUR:"+ showLecteur);
    const handleClickButton=()=>{
    if(showLecteur===true){setShowLecteur(false); }
    else setShowLecteur(true);
      
    }

    const handleOptionChangetoParent=(optionValue)=>{
        setoptionValue(optionValue);
        console.log(optionValue);
        alert("Vos modifications ont été prise en compte");
        
    }

	return(
    <div className='app'>
        {showLecteur ? ( <Proposition handleClickButton={handleClickButton} handleChange={handleOptionChangetoParent}/>):(<LecteurPdf  optionValue={optionValue} handleClickButton={handleClickButton} />)}
    </div>
	)
  
}

export default Feature2;