
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SignIn =()=>{
    
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
        <div  className="flex items-center justify-center w-full h-full">
          <div className="flex items-center justify-center w-[30%] mx-auto bg-red-200 h-[50%] rounded">
           <form onSubmit={handleLogin}>
                <h1 className="text-xl text-center">Log In</h1>
                <label>Username: </label> <br/>
                <input type="text" className="border" onChange={({target})=> setUsername(target.value)} /><br/>
                <label>Password: </label> <br/>
                <input type="password" className="border" onChange={({target})=> setPassword(target.value)} /><br/>
                <button type="submit" className="px-4 py-2 mt-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                  Button
                </button>
           </form>
        </div>
        </div>
    )
}
