import React from "react";
import { useState } from "react";

function AddItem(){
    const [items, setItems]= useState([]);
    const [item, setItem]=useState(null);

    const handleChange = ({target}) =>{
        setItem(target.value);
    }
    const handleAdd = () => {
        if(item) {
            setItems((prev) => ([...prev,item]));
            setItem(null);
        }else{
            alert("Item must be exist");
        }
    }
    return (
        <div className=" m-7 w-4/2" >
            <div>
                <ul className="list-disc">
                    {items.map((item) =>( <li key={item}>{item}</li>))}
                </ul>
            </div>
            <div>
                <p>Add new Item</p>
                <input type="text" value={item ? item: ""} onChange={handleChange} className="border" />
                <button onClick={handleAdd} className="p-2 mx-3 border" >Add</button>
            </div>
        </div>
    );
}

export default AddItem;