import React, {useState, useEffect} from 'react';
import '../styles/mail/envoieMail.css';
import Score from "./score";

function ShowFormulaire(prop){
    const [mail, setMail] = useState("")
    const validerMail = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('mail', mail)
       // data.append('score',prop.score)
        let rep= await fetch('/SendMail',
        {
            method : 'post',
            body: data,
        }
        );
        let res  = await rep.json();
        console.log(mail)
    }

    
    const handlechangeInput = (event) => {
       setMail(event.target.value)
    }
    
    return(
        <div className='mail'>
		    <div><div className='titre'> Veuillez saisir votre mail</div>
                <div className='champ-text' style={{marginTop: "10px"}}>
                <input type={'text'} value = {mail} onChange = {handlechangeInput}  />
                </div>
            </div>
            <button style={{marginTop : "10px", marginRight: "50px", width: "20%"}} onClick = {(event) => validerMail(event)}>Valider</button>	
		</div>
    )
}
export default ShowFormulaire;