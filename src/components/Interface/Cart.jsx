import { Link } from 'react-router-dom';
import './Cart.css';
import {AiOutlineHeart,AiOutlineQrcode} from "react-icons/ai";
import { QRCodeSVG } from 'qrcode.react';

const jobs=[
    {
        id: Date.now(),
        photoUrls: ["product1.png"],
        featured: false,
        category: "Media",
        title: "Video Editor",
        address: {
            city: "Bathambong",
            country: "Cambodia",
        },
        jobType: "Full-Time",
        salary: 1000,
        salaryType: "monthly",
        companyWebsite: "www.facebook.com",
    },
    {
        id: Date.now(),
        photoUrls: ["product2.png"],
        featured: true,
        category: "Doctor",
        title: "Heart",
        address: {
            city: "Phnom Penh",
            country: "Cambodia",
        },
        jobType: "Full-Time",
        salary: 2000,
        salaryType: "monthly",
        companyWebsite: "www.facebook.com",
    },
    {
        id: Date.now(),
        photoUrls: ["product3.png"],
        featured: false,
        category: "Developer",
        title: "Full Stack",
        address: {
            city: "Phnom Penh",
            country: "Cambodia",
        },
        jobType: "Full-Time",
        salary: 2000,
        salaryType: "monthly",
        companyWebsite: "www.facebook.com",
    },
    {
        id: Date.now(),
        photoUrls: ["product4.png"],
        featured: true,
        category: "teacher",
        title: "Math",
        address: {
            city: "Phnom Penh",
            country: "Cambodia",
        },
        jobType: "Full-Time",
        salary: 2000,
        salaryType: "monthly",
        companyWebsite: "www.facebook.com",
    }
];
function Cart(){

    return (
        <>
            <ul className="grid w-full grid-cols-1 gap-8 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {jobs.length > 0 &&
                    jobs.map((job) => {
                        return (
                            <li className="w-full max-w-sm mx-auto text-center bg-white rounded shadow-md" key={job.id}>
                                <div className="relative">
                                    <img className="w-full h-52" src={require(`../assets/${job.photoUrls[0]}`)} alt="not found" />
                                    {
                                        !job.featured && (
                                         
                                            <div className='absolute top-10 -right-2'>
                                                
                                                <div className="z-10 flex items-center justify-center w-24 font-bold text-white bg-red-500 shadow rounded-1 h-7">
                                                    featured
                                                </div>
                                                <div className="absolute right-0 arrow-top-right">
                                                    
                                                </div>
                                            </div>
                                        
                                        )
                                    }
                                </div>
                                <div className='p-3 space-y-4 border-b border-gray-100'>
                                    <p className='text-sm font-bold text-gray-400'>{job.category}</p>
                                    <Link to="job detail page /job id" className='text-xl font-bold focus:outline-none'>
                                        {job.title}
                                    </Link>
                                    <div className='flex items-center justify-between capitalize'>
                                        <p className='text-gray-900'>{job.address.city}</p>
                                        <p className='px-1 py-px text-sm font-bold text-white bg-teal-500 rounded'>{job.jobType}</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div className='flex items-center justify-between p-3' >
                                        <div className='relative'>
                                            {/* icons +tooltip */}
                                            <AiOutlineQrcode
                                             data-bs-toggle="collapse"
                                              data-bs-target={`#tooltip-${job.id}`} 
                                              aria-expanded="false"
                                              aria-controls={`tooltip-${job.id}`}  />
                                            <div id={`tooltip-${job.id}`} className='absolute text-white bg-gray-900 rounded collapse -top-52 -left-10'>
                                                <QRCodeSVG value={job.companyWebsite} className='p-px border-2 border-white'/>
                                                <p>Scan Qrcode on mobile device</p>
                                            </div>
                                            <AiOutlineHeart className='hover:bg-red-600 hover:overflow-hidden' />
                                            
                                        </div>
                                        <div className='flex items-center text-lg'>
                                           ${job.salary} <span className='text-xs font-bold'>
                                                {
                                                    job.salaryType === "annualy" ? "P.A" :
                                                    job.salaryType === "monthly" ? "P.M" : "P.H"
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}
export default Cart;