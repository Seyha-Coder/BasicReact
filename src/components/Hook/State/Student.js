import React from "react";
import { useState } from "react";

function Student(){ 
    const [info, setInfo]= useState({name: "sara", age: 18,score:90});
    const handleChange= ({target})=>{
        const {name,value}=target; //equal as const name=target.name and const value=target.value
        if(name === "name"){
            setInfo((prev) => ({...prev,[name]: value})); //... is split operator use to separate value of object
        }else if(name === "age"){
            setInfo((prev) => ({...prev,[name]: value}));
        }else{
            setInfo((prev) => ({...prev,[name]: value}));
        }
        
    }
    return (
        <div>
            <div className=" m-7 w-4/2" >
                <p>My name is: {info.name}</p>
                <input type="text" value={info.name} name="name" className="border peer" onChange={handleChange}/>
           
            </div>
            <div className=" m-7 w-4/2" >
                <p>My name is: {info.age} years old</p>
                <input type="number" value={info.age} name="age" className="border peer" onChange={handleChange}/>
           
            </div>
            <div className=" m-7 w-4/2" >
                <p>My name is: {info.score}</p>
                <input type="number" value={info.score} name="score" className="border peer" onChange={handleChange}/>
           
            </div>
        </div>
    );
}

export default Student;