import { NavLink } from "react-router-dom";
import React from "react";
import {AiFillHome} from "react-icons/ai";
function View({children}){

   
    const MenuItems=[
        {
            path: "/",
            name: <AiFillHome className="text-2xl"/>,
        },
        {
            path: "/contact",
            name: "Contact",
        },
        {
            path: "/about",
            name: "About",
        },
        {
            path: "/post-job",
            name: "Post-Job",
        },
    ]
    return (
        <>
            <div className="w-full h-auto">
                
                <div className="w-[90%] mx-auto ">
                    <ul className="w-[40%] mt-2 h-[48px] bg-teal-500  flex items-center mb-3">
                        {
                        MenuItems.map((item,index) => (
                            <NavLink to={item.path} key={index} className="p-3 text-white hover:bg-gray-200 hover:text-gray-800" isActiveClassName=""> {item.name}</NavLink>
                        ))

                        }
                    </ul>
                    
                </div>
               
                {/* <main className="w-full p-3">{children}</main> */}
            </div>
        </>
    )
}
export default View;