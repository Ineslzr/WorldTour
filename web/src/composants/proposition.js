import React, { useState } from 'react';
import '../css/proposition.css'; 
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
            <span>pour les billets d'avions = 30 points</span><br></br>
            <span>pour les tickets d'expositions = 20 points</span><br></br><br></br>
        <select name="typeDoc" id="docselect"  onChange={handleOptionChange}>
            <option value="">
             --type de doc   
            </option>
            <option value="Avion">Billet d'avion</option>
            <option value="Exposition">Ticket d'expositions</option>
        </select> 
        <button onClick={()=>props.handleChange(option)}> valider</button>
        <button onClick={props.handleClickButton}> go</button>
        </div>
       
    )
}

export default Proposition;