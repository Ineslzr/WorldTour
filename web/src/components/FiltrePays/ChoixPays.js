import React, {useState} from 'react';
import '../../styles/quiz/quiz.css';
import CaseNClickable from '../CaseNClickable'
import CaseClickable from '../CaseClickable'


function ChoixPays(){

    //Ajout des pays à l'aide de la bdd
    //const [countries, setCountries] = useState([{}]);
    const countries = ["FRANCE", "ALLEMAGNE", "ITALIE", "ESPAGNE", "POLOGNE"];
    const [typeFilter, setTypeFilter] = useState('');

    //On remplacera par des données dans la base
    const continents = ["EUROPE"];
    
    //CSS    
    const barreLateraleQ = {
		display: "flex",
		justifyContent: "space-evenly",
		width: "450px",
		minHeight: "10px",
		borderRadius: "7px", 
		backgroundColor: "#B1E9A3",
		border: "2px solid #7ac38f",
		padding: "20px",
		fontSize:"large",
		fontWeight:"bold",
		marginBottom:"15px"
    };
    const barreLateraleQFiltres = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "7px"
    };
    const leftSideCountries = {
        width:"60%"
    };
    const carreInformatif = {
        backgroundColor: "white",
        width: "80%",
        height: "110px",
        padding: "10px", 
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const base = {
        display: "flex",
        justifyContent: "space-between",
        width: "450px",
        height: "200px"
    };
    const rightSideCountries = {
        display: "flex",
        flexDirection: "column",
        width: "40%"
    };

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
			<div style={{...barreLateraleQ, ...barreLateraleQFiltres}}>
				<span> Choisissez un pays </span>
				<div> Filtre 
                    <input style={{marginLeft:"8px"}} name="filtre" type="search" value={typeFilter} onChange={e => setTypeFilter(e.target.value)} />
                </div>  
			</div>

            <div className='app' style={base}>
                <div style={leftSideCountries}>
                    <CaseNClickable intitule={continents[0]}/>
                    
                    <div style={carreInformatif}>
                        Testez vos connaissances du pays choisi pour avoir un badge du niveau supérieur !
                    </div>
                </div>
                                
                <div style={rightSideCountries}>
                    {countries.filter(e => e.startsWith(typeFilter.toUpperCase()) || e.startsWith(typeFilter.toLowerCase()) || typeFilter === '')
                        .map(e => 
                    <CaseClickable intitule={e} />
                    )}
                </div>
		    </div>
        </div>
    )
}

export default ChoixPays;
