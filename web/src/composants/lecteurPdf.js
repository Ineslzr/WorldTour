import React, {useState,useRef} from 'react';
import '../css/lecteurPdf.css'; 

function LecteurPdf(props){


    const [pdfSelected,setPdfSelcted]= useState({file:null});
    const [pdfbutton, setpdf] = useState(false);
    // const refdatas= useRef('#datas');
    const ref=useRef('#upload_document_form"');
    let params;
    // let b64;


    const handlePdfLecture=(e)=>{
       
        let test_pdf = e.target.files[0];
        setPdfSelcted({file:test_pdf}) ;
        params = new URLSearchParams();
       
        let reader = new FileReader();
        let filename;
        let mimetype;

        filename = test_pdf['name'];
        mimetype = test_pdf['type'];

        params.append('filename', filename);
        params.append('mimetype', mimetype);
        
        reader.readAsDataURL(test_pdf);

        // reader.onloadend =()=>{
        //     b64 = reader.result.replace(/^data:.+base64,/, '');
        //     params.append('datas', b64);
        // }
        const uploadFormData = new FormData(ref.current);
        
        for( const pair of uploadFormData.entries()){
            params.append(pair[0],pair[1]);
        }
        for( const pair of params){
            console.log(pair[1]);
        }
    }

    const handleClickButton=()=>{
    if(pdfbutton===false)
      { setpdf(true);} 
    
    fetch('http://localhost:5000/readPdf', {
        method:'POST',
        mode:'no-cors',
        body:params
    })
    .then(response => {
        // let jsonData = response.json();
        console.log(response);

    });}

    
    return (
        <div id='propositionsection'>
            <label for="doc-select">Choisissez le fichier pdf</label><br></br><br></br>
            <form ref={ref} id="upload_document_form">
                <input type='file' onChange={handlePdfLecture} value={pdfSelected.test_pdf} name="test_pdf" id='test_pdf' accept=".pdf"/>
                <input type="hidden" id="datas"/>  
            </form>
      <button onClick={handleClickButton}>envoyer</button>
       <button onClick={props.handleClickButton}>retour</button>
        </div>
    )
}

export default LecteurPdf;