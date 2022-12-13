import React from "react";
import '../../../styles/quiz/creationChoix.css';

export default function CreateChoice(props){
    return(
        <div>
            <label htmlFor="check">
                {" "}<input
                        className="inputChoix"
                        name={props.name}
                        placeholder={props.label}
                        type="text"
                        value={props.value}
                        onChange={props.addChoice}
                    />                          
            </label>
            <input
                type="checkbox"
                id="check"
                onChange={props.handleIsCorrect}
            />
        </div>

    )
    
}