import React from 'react';

const caseNC = {
    backgroundColor: "#7ac38f",
    border: "1px solid #5c966d",
    borderRadius: "7px",
    width: "150px",
    height: "35px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0"
};


//Case non-cliquable
function CaseNClickable(props){

    return(
        <div style={caseNC}>
			<span>{props.intitule}</span>
        </div>
    )
}

export default CaseNClickable;
