import React from "react";
import {
    FaTh,
    FaUserAlt,
    FaCommentAlt,
    FaShoppingBag,
    FaBars,
  
} from "react-icons/fa";
import {BiSolidContact,BiLogInCircle} from "react-icons/bi";
import { NavLink,Link } from "react-router-dom";
import { useState } from "react";
import './Menu.css';
export const Sidebar=({children})=>{
    const [isOpen, setIsOpen]=useState(false);
    const toggle=()=> setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dasboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<BiSolidContact/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/signin",
            name:"SignIn",
            icon:<BiLogInCircle/>
        },
    ];
    const lastItem = menuItem[menuItem.length - 1];
    return(
        <>
            <div className="flex w-full header h-[50px] justify-between bg-black text-white sticky top-0 py-2 z-10 absolute" >
                <div className="mx-4 search">
                    <div className="mb-3">
                        <div className="relative flex flex-wrap items-stretch w-full mb-4">
                            <input
                            type="search"
                            className="bg-white relative m-0 -mr-0.5 block w-[200px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.1rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon1" />

                            {/* <!--Search button--> */}
                            <button
                            className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                            type="button"
                            id="button-addon1"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5">
                                <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" /> 
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-10 login"> 
                {
                    
                    <NavLink to={lastItem.path} className="flex justify-between w-[50px]" isActiveClassName="active">
                        <span className="mx-2 my-1"> {lastItem.icon}</span>
                        <span>{lastItem.name}</span>
                    </NavLink>
                    
                }
                </div>
            </div>
            <div className="container ">
                <div style={{width: isOpen ? "250px": "60px"}} className="sidebar">
                    <div className="top_section">
                        <h1 style={{display: isOpen? "block" : "none"}} className="logo">Logo</h1>
                        <div style={{marginLeft: isOpen? "60px" : "0px"}} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    
                    {
                    
                        menuItem.map((item,index) => (
                            <NavLink to={item.path} key={index} className="link" isActiveClassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{display: isOpen? "block" : "none"}} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    
                </div>
                <main>{children}</main>
            </div>
        </>
    );
}