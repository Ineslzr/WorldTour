import React from "react";
import '../../../styles/quiz/creationQuestion.css';

export default function CreateQuestion(props){
    return(
        <label htmlFor="check">
            {" "}<input
            className="inputCreationQuestion"
            placeholder={props.label}
            type="text"
            name={props.name}
            value={props.value}
            onChange={props.addQuestion}                        
        />                          
         </label>   
    )
}