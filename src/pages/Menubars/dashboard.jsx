import React from "react";
import watch1 from "./image/watch1.png";
import watch2 from "./image/watch2.png";
import watch3 from "./image/watch3.png";
import watch4 from "./image/watch4.png";
import './dashboard.css';
import {
    
    FaShoppingBag,
   
  
} from "react-icons/fa";
import {
    AiFillStar,
  
} from "react-icons/ai";

export const Dashboard = () => {
    return(
        <div className="">
            <div className=" w-[100%] h-auto">
                {/* ===========row */}
                <div className="flex justify-between w-[100%] rounded p-0 mx-20 gap-5" >
                    <div className="w-[24%] h-[350px]  ml-2 bg-gray-400 rounded overflow-hidden  columns ">
                        <div className="w-full h-[50%] image">
                            <img src={watch1} alt="" className="w-full h-full rounded" />
                        </div>
                        <div className="z-10 p-3 text-white description">
                            <h2 className="text-center hover:text-xl text-[20px] ">Boliver</h2>
                            <h4 className="text-xl text-[20px]">200$</h4>
                            <h4>Made in Cambodia</h4>
                            
                            <div className="flex justify-between my-2 ">
                                <div className="flex my-2 text-yellow-300 ">
                                    <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        class=" my-2 flex justify-between inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        data-te-ripple-init>
                                        <FaShoppingBag className="mx-1" /> Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============== */}
                    <div className="w-[24%] h-[350px]  ml-2 bg-gray-400 rounded overflow-hidden  columns ">
                        <div className="w-full h-[50%] image">
                            <img src={watch2} alt="" className="w-full h-full rounded" />
                        </div>
                        <div className="p-3 text-white description">
                            <h2 className="text-center hover:text-xl text-[20px] ">Hanami</h2>
                            <h4 className="text-xl text-[20px]">250$</h4>
                            <h4>Made in Cambodia</h4>
                            
                            <div className="flex justify-between my-2">
                                <div className="flex my-2 text-yellow-300">
                                    <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        class=" my-2 flex justify-between inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        data-te-ripple-init>
                                        <FaShoppingBag className="mx-1" /> Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============ */}
                    <div className="w-[24%] h-[350px]  ml-2 bg-gray-400 rounded overflow-hidden  columns ">
                        <div className="w-full h-[50%] image">
                            <img src={watch3} alt="" className="w-full h-full rounded" />
                        </div>
                        <div className="p-3 text-white description">
                            <h2 className="text-center hover:text-xl text-[20px] ">Mamito</h2>
                            <h4 className="text-xl text-[20px]">200$</h4>
                            <h4>Made in Cambodia</h4>
                            
                            <div className="flex justify-between my-2">
                                <div className="flex my-2 text-yellow-300">
                                    <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        class=" my-2 flex justify-between inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        data-te-ripple-init>
                                        <FaShoppingBag className="mx-1" /> Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ==== */}
                    <div className="w-[24%] h-[350px]  ml-2 bg-gray-400 rounded overflow-hidden  columns ">
                        <div className="w-full h-[50%] image">
                            <img src={watch4} alt="" className="w-full h-full rounded" />
                        </div>
                        <div className="p-3 text-white description">
                            <h2 className="text-center hover:text-xl text-[20px] ">Suki</h2>
                            <h4 className="text-xl text-[20px]">200$</h4>
                            <h4>Made in Cambodia</h4>
                            
                            <div className="flex justify-between my-2">
                                <div className="flex my-2 text-yellow-300">
                                    <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        class=" my-2 flex justify-between inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        data-te-ripple-init>
                                        <FaShoppingBag className="mx-1" /> Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* ===========row */}
                
                
            </div>
            
        </div>
    );
}