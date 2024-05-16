import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    AiFillPhone,
    AiFillMail,
    
 } from "react-icons/ai";
 import { 
    
    BsFillEnvelopeAtFill,
 } from "react-icons/bs";
 import { 
    
    FaLocationDot
 } from "react-icons/fa6";
export const ContactPage =()=>{
    
    return(
        <>
       
            <div className="border border-b bg-gray-50 ">
                <div className="w-[90%] mx-auto">
                    <div className="border border-l-0 border-r-0">
                        <div className="2xl:w-8/12 2xl:mx-auto">
                            <div className="px-6 py-10 text-2xl font-semibold tracking-wider 2xl:px-0">
                                Contact
                            </div>
                        </div>
                        
                    </div>
                    <div className="py-16 2xl:w-8/12 2xl:mx-auto">
                        <div className="flex flex-col px-10 md:space-x-10 md:flex-row 2xl:px-0">
                            <div className="w-full h-full">
                                <img src={require('../assets/product1.png')} className="w-full h-full" alt="image not found" />
                            </div>
                            <div className="max-w-lg p-5 space-y-6">
                                <p className="text-lg font-semibold text-teal-500 uppercase">Let's talk</p>
                                <p className="text-3xl font-black text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                                <p className="text-xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                                <div className="flex items-center space-x-5">
                                <FaLocationDot className="text-teal-500" />
                                    <div>
                                        <p className="text-xl font-black text-gray-900">Address</p>
                                        <p>Tuektla, Sensok, Phnom Penh</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-5">
                                <AiFillPhone className="text-teal-500" />
                                    <div>
                                        <p className="text-xl font-black text-gray-900">Phone</p>
                                        <p>+855 88 951 404</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-5">
                                <BsFillEnvelopeAtFill className="text-teal-500" />
                                    <div>
                                        <p className="text-xl font-black text-gray-900">Email</p>
                                        <p>chanseyha123456789@gmail.com</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="py-16 border-y-2">
                        <div className="flex flex-col p-10 space-y-5 bg-white border rounded shadow md:space-x-5 2xl:w-8/12 2xl:mx-auto md:space-y-0 md:flex-row">
                            <div className="w-full space-y-5">
                                <AiFillMail className="text-teal-500 w-14 h-14" />
                                <p className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="text-lg font-semibold break-all">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Illum ipsam quas repudiandae voluptas voluptate? Necessitatibus
                                    magni vero hic id obcaecati.
                                </p>
                            </div>
                            <div className="w-full space-y-5">
                                <div className="flex space-x-4 ">
                                    <input type="text" placeholder="Full Name"
                                    className="w-full p-2 border rounded shadow-inner bg-gray-50 focus:outline-none" />
                                    <input type="email" placeholder="email"
                                    className="w-full p-2 border rounded shadow-inner bg-gray-50 focus:outline-none" />
                                </div>
                                <textarea name="" id="" cols="30" rows="7" placeholder="messages"
                                className="w-full p-2 border rounded shadow-inner bg-gray-50 focus:outline-none">
                                    
                                </textarea>
                                <button className="py-2 font-semibold text-white bg-teal-500 rounded px-7 focus:outline-none">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}