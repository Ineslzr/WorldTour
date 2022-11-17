import React, {useState, useEffect} from 'react';
import '../styles/mail/envoieMail.css';

function ShowFormulaire(prop){
    const validerMail = () => {

    }
    return(
        <div className='mail'>
		    <div><div className='titre'> Veuillez saisir votre mail</div>
                <div className='champ-text' style={{marginTop: "10px"}}>
                <input type={'text'}/>
                </div>
            </div>
            <button style={{marginTop : "10px", marginRight: "50px", width: "20%"}} onClick={ validerMail()}>Valider</button>	
		</div>
    )
}
export default ShowFormulaire;