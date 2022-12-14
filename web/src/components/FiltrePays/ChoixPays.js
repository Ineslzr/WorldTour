import React, {useState, useEffect} from 'react';
import '../../styles/quiz/quiz.css';
import CaseNClickable from '../Cases/CaseNClickable'
import { useNavigate } from 'react-router-dom';

function ChoixPays(){

    const continents = ["EUROPE"];
    const countries = ["France", "Allemagne", "Italie", "Espagne", "Pologne"];
    const [typeFilter, setTypeFilter] = useState('');
    const navigation = useNavigate();

    const goToCountryPage = (id_country, country_quiz) => {
        navigation("/ChoixPays/" + country_quiz , {state:{id: id_country, country:country_quiz}});
        console.log(id_country)
    } 

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
    const lesboutons = {
        marginTop: "5px",
        marginBottom: "5px"
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
                        Testez vos connaissances à l'aide de quiz sur le pays choisi !
                    </div>
                </div>

                    <div style={rightSideCountries}>
                    {countries.filter(c => c.startsWith(typeFilter.toUpperCase()) || c.startsWith(typeFilter.toLowerCase()) || typeFilter === '')
                    .map((c,index) =>     
                          <button key={index} style={lesboutons} onClick={()=>goToCountryPage(index, c)}>{c}</button>
                    )}</div>
		    </div>
        </div>
    )
}

export default ChoixPays;
