import React, { useEffect } from "react";
import { useState } from "react";

function Counter(){
    const [count, setCount]= useState(1);
    useEffect(() => {
        alert("You have increment by 1");
    });
    const handleIncrement= ()=>{
        setCount((prev) => prev+1); //change state from prevuise value 
    }
    return (
        <div className=" m-7 w-4/2" >
            <p>Count= {count}</p>
           <button onClick={handleIncrement}  className="inline-block px-3 py-2 mx-3 my-3 text-white bg-blue-500 rounded" >click</button> 
        </div>
    );
}

export default Counter;