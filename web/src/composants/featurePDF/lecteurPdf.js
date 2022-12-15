import React, {useState} from 'react';
import '../../css/featurePDF/lecteurPdf.css'; 

function LecteurPdf(props){

    const [filetoupload, setFiletoupload] = useState();
    const [points, setPoints] = useState(false);
    const [pdfKey, setPdfKey] = useState(['']);
    const [pdfCat, setPdfCat] = useState('');
    const [choix,setChoix] = useState(false);
   
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
            console.log(props.optionValue);
            data.append('option_from_react',props.optionValue)
            let response = await fetch('/readPdf',
            {
                method: 'post',
                body: data,
            }
            );
            let res = await response.json();
            setPdfKey(res['key']);
            setPoints(res['score']);
            setPdfCat(res['typefichier']);
            // console.log(points);
            if(Number.isInteger(res['score'])){
                setChoix(true);
                console.log(choix);
            }
            else setChoix(false);
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
                <center>
                <br></br><button onClick={handleClickButton}>Envoyer pour verification</button><br></br><br></br>
                <button onClick={props.handleClickButton}>retour</button></center>
                </>
            :choix == 0 ?
            <><div>OHH le tricheur </div></>
                 : 
                 <div> <center><span>..... Apres verification du fichier {pdfCat}......</span></center><br></br>
                 <span> Nous avons trouver les mots {pdfKey[0]}, {pdfKey[1]}, {pdfKey[2]}, {pdfKey[3]}</span><br></br><br></br>
                   <center>Bravo, vous avez gagné {points} points ! </center> 
                   </div>
            }
        </div>
    )
}

export default LecteurPdf;
