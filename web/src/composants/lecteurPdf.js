import React, {useState} from 'react';
import '../css/lecteurPdf.css'; 

function LecteurPdf(props){

    const [filetoupload, setFiletoupload] = useState();
    const [points, setPoints] = useState(false);

    const handleFileChange = async (e) =>{
        const file = e.target.files[0];
        console.log(file);
        setFiletoupload(file);
    }

    const handleClickButton = async (e) => {
        e.preventDefault();
        console.log("FILE:" +JSON.stringify(filetoupload));
        //const file = e.target.files[0];

        if (filetoupload != null) {
            const data = new FormData();
            data.append('file_from_react', filetoupload);

            let response = await fetch('/readPdf',
            {
                method: 'post',
                body: data,
            }
            );
            let res = await response.json();
            setPoints(res);
            console.log("RES:"+res);
        }
            
    }

    return (
        <div id='propositionsection'>
            {points == 0 ? 
            <>
                <label for="doc-select">Choisissez le fichier pdf</label><br></br><br></br>
                <form id="upload_document_form">
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                    <input type="hidden" id="datas"/> 
                </form>
                <button onClick={handleClickButton}>envoyer</button>
                <button onClick={props.handleClickButton}>retour</button>
                </>
            :
            <div>Bravo, vous avez gagné {points} points ! </div>
            }
            
        </div>
    )
}

export default LecteurPdf;
