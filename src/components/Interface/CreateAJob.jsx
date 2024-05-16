import { useState } from "react";
import {TiTickOutline} from "react-icons/ti";
import {AiFillPlusCircle} from "react-icons/ai";
import PostJob from "./PostJobPage";
import CategoryList from "./CategoryList";
import LocationForm from "./LocationForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot,faFlag } from "@fortawesome/free-solid-svg-icons";
function CreateAJob(props){
    const {
        isOwnCompany,
        toggleOwnCompany,
        onBehalf,
        toggleOnBehalf,
        onBehalfOfOtherCompany,
        handleOnBehalfOfCompany,
        category,
        handleActiveCategory,
        handleClearActiveCategory,
        tittle,
        handleSetTittle,
        address,
        handleSetAddress
        } =props;

    const [categoryShow,setCategoryShow]=useState(false);
    const toggleCategoryShow = ()=>{
        setCategoryShow(!categoryShow);
    }

    const [locationShow,setLocationShow]=useState(false);
    const toggleLocationShow = ()=>{
        setLocationShow(!locationShow);
    }
    return(
        <>
            <div>
                {/* categorylist show */}
                <div 
                    className={`${categoryShow?
                    "fixed w-full inset-0 bg-gray-900 bg-opacity-30 justify-center transition-all duration-300 z-index-40"
                    : "w-0 h-0 overflow-hidden"}`}
                    >
                    
                    <CategoryList 
                    toggleCategoryShow={toggleCategoryShow}
                    category={category}
                    handleActiveCategory={handleActiveCategory}
                    handleClearActiveCategory={handleClearActiveCategory}
                     />
                    
                </div>
                {/* location show */}
                <div 
                    className={`${locationShow?
                    "fixed w-full inset-0 bg-gray-900 bg-opacity-30 justify-center transition-all duration-300 z-index-40"
                    : "w-0 h-0 overflow-hidden"}`}
                    >
                    
                    <LocationForm 
                        toggleLocationShow={toggleLocationShow}
                        address={address}
                        handleSetAddress={handleSetAddress}
                     />
                    
                </div>
                
                <div className="space-y-9">
                    <div className="flex items-end space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white bg-teal-500 rounded-full">
                            01
                        </div>
                        <div className="text-2xl font-bold text-gray-900">Create A Job</div>
                    </div>
                </div>
                <div className="pt-6 space-y-12">
                    <p className="font-bold text-gray-900 after:content-['*'] after:text-red-600 after:text-xl">
                        Create a tittle for your ads.
                    </p>
                    <input type="text" 
                    className="w-full p-3 text-gray-900 border rounded bg-gray-50 focus:outline-none" 
                    onChange={({target}) => handleSetTittle(target.value)}
                    placeholder={`${tittle ? tittle : "Ex. Full-Time Staff"}`}
                    required />
                </div>
                <div className="space-y-3">
                    <p className="font-bold text-gray-900 after:content-['*'] after:text-red-600 after:text-xl">
                        This is for {""} 
                    </p>
                    <div className="flex space-x-2">
                        <button 
                        onClick={toggleOwnCompany}
                        className="flex items-center px-5 py-1 space-x-2 border rounded focus:outline-none">
                            
                            <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24"
                              strokeWidth={1.5} 
                              stroke="currentColor"
                            //    className="w-5 p-px bg-green-500"
                                className={`${
                                    isOwnCompany? 
                                    " p-px text-green-600 w-5 transition-all duration-300" 
                                    :"w-0 h-0 overflow-hidden" }`}
                               
                               >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            
                            <p>My own company</p>

                        </button>
                        
                        <button 
                         onClick={toggleOnBehalf}
                        className="flex items-center px-5 py-1 space-x-2 border rounded focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24"
                              strokeWidth={1.5} 
                              stroke="currentColor"
                              className={`${
                                onBehalf? 
                                " p-px text-green-600 w-5 transition-all duration-300" 
                                :"w-0 h-0 overflow-hidden" }`}
                                >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            
                            <p>On behalf of other company</p>

                        </button>
                    </div>
                    
                    <div className={`${
                            onBehalf? 
                            " p-px w-full h-full transition-all duration-300" 
                            :"w-0 h-0 overflow-hidden" }`}>
                                
                        <input type="text"
                         placeholder={`${onBehalfOfOtherCompany? onBehalfOfOtherCompany : "Company name"}`}
                        className="w-full p-2 text-gray-900 border rounded bg-gray-50 focus:outline-none"
                        onChange={({target}) => handleOnBehalfOfCompany(target.value)}
                         />
                        
                    </div>
                </div>
                
                <div className="space-y-3">
                    <p className="font-bold text-gray-900">
                        Where do you want your ads display?
                    </p>
                    <div>
                        <button 
                        onClick={toggleCategoryShow}
                        className="flex items-center px-1 py-1 space-x-1 text-gray-900 border rounded focus:outline-none">
                            <AiFillPlusCircle/>
                            <p>Category</p>
                        </button>

                        <div>
                        {
                            category && (
                                <button 
                                onClick={toggleCategoryShow}
                                className="flex items-center px-1 py-1 space-x-1 text-gray-900 border rounded focus:outline-none"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 16a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L10 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6A1 1 0 0110 16z" clipRule="evenodd" />
                                    </svg>
                                    <p>{category}</p>
                                </button>
                            )
                        }

                        </div>
                    </div>
                </div>
                
                <div className="space-y-3">
                    <p className="font-bold text-gray-900">Where are your located?</p>
                    <div className="flex space-x-2 space-y-6">
                        <button
                         onClick={toggleLocationShow}
                         className="flex flex-col items-center px-16 py-8 space-y-1 text-gray-400 border rounded focus:outline-none">
                            <FontAwesomeIcon icon={faFlag} className="text-2xl"/>
                            <p className="font-normal text-gray-900 Capitalize">
                                    {address.country}
                            </p>
                        </button>
                        <button
                        onClick={toggleLocationShow}
                         className="flex flex-col items-center px-16 py-8 space-y-1 text-gray-400 border rounded focus:outline-none">
                            <FontAwesomeIcon icon={faLocationDot} className="text-2xl"/>
                            <p className="font-normal text-gray-900 Capitalize">
                                {address.city}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default CreateAJob;