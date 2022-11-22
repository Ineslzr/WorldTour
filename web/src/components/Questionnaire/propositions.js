import React, {useState} from "react";

function Propositions(props){

    return(
        <div key={props.index2}>
            <li>
                <label htmlFor="check">
                    <input
                        type="checkbox"
                        id="check"
                        value={props.value}
                        checked={props.checked}
                        //onChange={() => updateState(props.id,props.index )}
                    />{" "}
                    {props.value} {props.checked}
                </label>
            </li>
        </div>
    );
}

export default Propositions;