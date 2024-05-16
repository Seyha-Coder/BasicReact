import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {home} from "@fortawesome/free-brands-svg-icons";
// import Sidebar from "./sideNav";
function Navbar () {
     const Interface=(isActive)=>{
        
    }
    return(
        <div className="flex items-center h-auto bg-white shadow-md">
            <div className="justify-between hidden w-full p-10 idtems-center md:flex 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
                <div className="font-serif text-2xl font-bold text-gray-900 uppercase">
                    <p>Job <span className="text-green-500 ">Center</span></p>
                </div>
                <div className="flex space-x-4 font-serif font-semibold">
                    <Link to="/" className="focus:outline-none">Home</Link>
                    <span>|</span>
                    <Link to="/search" className="focus:outline-none">Search</Link>
                    <span>|</span>
                    <Link to="/contact" className="focus:outline-none">Contact</Link>
                    <span>|</span>
                    <Link to="/post-job" className="r focus:outline-none" id="link">
                        <button  className="p-2 text-white bg-teal-500 rounded-full ">Post Job</button>
                    </Link>
                    
                </div>
            </div>
            <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-900 cursor-pointer h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </div>
        </div>
    );
}
export default Navbar;