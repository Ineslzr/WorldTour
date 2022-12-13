import React from "react";
import '../../../styles/quiz/createInfoQuiz.css';

export default function CreateInfoQuiz(props){
    return(
        <label htmlFor="check">
            {" "}<input
                    className="inputInfoQuiz"
                    placeholder={props.label}
                    type="text"
                    name={props.name}
                    value={props.value}
                    onChange={props.handleInfoQuiz}
                />                          
        </label>
    )
}