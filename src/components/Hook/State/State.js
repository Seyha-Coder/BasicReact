import React from "react";
import { useState } from "react";
import Increment from "./increment";
import Student from "./Student";
import AddItem from "./AddItems";
import Input from "./Input";

function State(){
    const [color, setColor]= useState('red');
    return (
        <div className=" m-7 w-4/2" >
            <h2 style={{backgroundColor: color}}>My color is: {color}</h2>
            <button  className="inline-block px-3 py-2 mx-3 my-3 text-white bg-blue-500 rounded" onClick={()=>setColor('blue')}>Blue</button>
            <button  className="inline-block px-3 py-2 mx-3 text-white bg-green-500 rounded" onClick={()=>setColor('green')}>green</button>
            <button  className="inline-block px-3 py-2 mx-3 text-white rounded bg-info-500" onClick={()=>setColor('aqua')}>aqua</button>
            <button  className="inline-block px-3 py-2 mx-3 text-white bg-red-300 rounded" onClick={()=>setColor('tomato')}>tomato</button>
           <Increment/> <br/>
           <Student/> <br/>
           <AddItem/>
           <Input/>
        </div>
    );
}

export default State;