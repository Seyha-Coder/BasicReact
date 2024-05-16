import React from "react";
import {useNavigate,useState} from "react";
function Input(){

    const [userInput, setUserInput]=useState();
    const handleChange = ({target}) =>{
        setUserInput(target.value);
    }
    return(

        <div className="m-5">
            <input type="text" value={userInput} onChange={handleChange} className="border" />
            <p>User Input: {userInput}</p>
        </div>
    );
}
export default Input;