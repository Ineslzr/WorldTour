import React, { useState } from 'react';
import '../../css/featurePDF/proposition.css'; 
function Proposition(props){

    const[option, setOption]=useState('');

    function handleOptionChange(event) {
        setOption(event.target.value);
    }
            
    
    return (
        <div className='proposition-section'>
        <label for="doc-select"><center>Choisissez le document que vous allez déposer</center></label><br></br><br></br>
        <span>
            Le fichier vous permettera de gagner des points.
            Vous pouvez par exemple nous transmettre 
            un pdf avec votre billet d'avion ou encore un ticket d'exposition
            </span><br></br><br></br>
            <span> les billets d'avions = 10 points</span><br></br>
            <span> les tickets d'expositions =3 points</span><br></br><br></br>
        <select name="typeDoc" id="docselect"  onChange={handleOptionChange}>
            <option value="">
             --type de doc   
            </option>
            <option value="Avion">Billet d'avion</option>
            <option value="Exposition">Ticket d'expositions</option>
        </select> <br></br><br></br>
            <div className="buttonProp">
                <center><button onClick={()=>props.handleChange(option)}> valider le type de document</button><br></br><br></br>
                <button onClick={props.handleClickButton}> suivant</button></center>
            </div>
        </div>
       
    )
}

export default Proposition;