import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    
    const navigate=useNavigate();
    let [username,setUsername]=useState(null);
    let [password,setPassword]=useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if(username && password){
            navigate("/");
            setUsername("");
            setPassword(null);
        }else{
            alert("Invalid password or username");
        }
    }
    return (
        <div>
           <form onSubmit={handleLogin}>
                <label>Username: </label> <br/>
                <input type="text" className="border" onChange={({target})=> setUsername(target.value)} /><br/>
                <label>Password: </label> <br/>
                <input type="password" className="border" onChange={({target})=> setPassword(target.value)} /><br/>
                <input type="submit" value="Login" className="m-2 text-white bg-blue-500" />
           </form>
        </div>
    )
}
export default Login;