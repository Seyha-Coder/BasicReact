import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube,faTwitter, faTiktok} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import React from "react";
function SmallNavbar(){
    return(
        <div className="flex items-center py-3 bg-white shadow-sm boder-b">
            <div className="flex items-center justify-between w-full px-10 font-serif 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
                <div ClassName="flex items-center px-3 text-sm font-medium text-gray-900">
                    <Link to="/" className="px-3 text-red-600 focus:ouline-none">Home</Link>
                    <span>|</span>
                    <Link to="/" className="px-3 text-red-600 focus:ouline-none">About US</Link>
                    <span>|</span>
                    <Link to="/" className="px-3 text-red-600 focus:ouline-none">Contact US</Link>
                </div>

                <div className="flex items-center">
                    <ul className="flex items-center space-x-3 hover:cursor-pointer group-hover:">
                        <li className="relative justify-center px-1 text-white bg-blue-600">
                            <FontAwesomeIcon icon={faFacebook} className="" />
                        </li>
                        <li className="px-1 text-white bg-red-600">
                            <FontAwesomeIcon icon={faYoutube} className=""/>
                        </li>
                        <li className="px-1 text-white bg-yellow-900">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </li>
                        <li className="px-1 text-white bg-slate-900">
                            <FontAwesomeIcon icon={faTiktok}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default SmallNavbar;