import React, {useState} from 'react';
import '../../css/featurePDF/historique.css'; 


function Historique(){

    const [data, setData] = useState([]);

    const handleClickButton = async (e) => {
        e.preventDefault();

            let response = await fetch('/Historique',
            {
                method: 'post'
            }
            );
            let res = await response.json();
            setData(res);

            
    }

	return(
    <div className='app'>
        <div className='title'>
            <span>historique des points gagnés</span>
            <button onClick={handleClickButton}>Refresh</button>
        </div>
        <div className='historique'>
        {
            data.map((element)=>
           <>
                <span>
                    {element.nom} <span> | </span>{element.score} <span> | </span>{element.type} <span> | </span>{element.date}
                </span>
            </>
            )
        }</div>
    </div>
	)
  
}

export default Historique;