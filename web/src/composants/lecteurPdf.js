import React from 'react';

function LecteurPdf(){
    return (
        <div className='proposition-section'>
       <label for="doc-select">Choisissez le fichier pdf</label>
        <input type="file"
       id="doc" name="doc-select"
       accept=".pdf"/>
        </div>
    )
}

export default LecteurPdf;