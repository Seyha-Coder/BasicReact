import { useEffect, useState } from "react";
import {TiTickOutline} from "react-icons/ti";

import CategoryList from "./CategoryList";
import CreateAJob from "./CreateAJob";
import LocationForm from "./LocationForm";
import PostJobStep from "./PostJobStep";
import Description from "./Description";
import Details from "./Details";
import Media from "./Media";



function PostJob (){
    
    //start createAjob state
    let [displayComponent,setDisplayComponent]= useState(0); //if use number in state, we should use let instead of const
    const handleIncreaseDisplayComponentIndex = () =>{ //use in button next
        displayComponent +=1;
        setDisplayComponent(displayComponent);
    };
    const handleDecreaseDisplayComponentIndex = () => { //use in button back
        displayComponent -=1;
        setDisplayComponent(displayComponent);
    }

    const [tittle,setTittle] = useState("");
    const handleSetTittle= (value) =>{
        setTittle(value);
    };
    
    const [isOwnCompany,setIsOwnCompany]= useState(false);
    const toggleOwnCompany = () => {
        setIsOwnCompany(!isOwnCompany);
        setOnBehalf(false);
        setOnBehalfOfOtherCompany("");
    };

    const [onBehalf,setOnBehalf] = useState(false);
    const toggleOnBehalf = () =>{
        setOnBehalf(!onBehalf);
        setIsOwnCompany(false);
    }

    const [onBehalfOfOtherCompany,setOnBehalfOfOtherCompany]=useState("");
    const handleOnBehalfOfCompany  =(value) =>{
        setOnBehalfOfOtherCompany(value); 
        console.log(value);
    }

    const [category,setCategory]=useState("");
    const handleActiveCategory = ({target}) =>{
        setCategory( target.innerText); 
    }
    const handleClearActiveCategory = () =>{
        setCategory("");
    }

    const [address,setAddress]=useState({
        country: "Cambodia",
        city: "Phnom Penh"
    });
    const handleSetAddress =(location) =>{
        setAddress((prev) => ({...prev,...location}))
    }
    //end createAjob state

    //start Description state
    let [characterCount, setcharacterCount]=useState(0);
    const calculateCharacterCount= (characterLength) =>{
        let maxLength =200;
        maxLength-=characterLength;
        setcharacterCount(maxLength);
    }
    useEffect(() => {
        setcharacterCount(200); //run only one time
    },[]);

    const [description,setDescription] = useState(null);
    const handleSetDescription = (value) => {
        setDescription(value);
    };
    const [keywords,setKeywords] = useState([]);
    const handleSetKeywords = (keywords) => {
        keywords= keywords.toLowerCase().split(","); //separate length of array  ["a,b,c"] => ["a","b","c"]
        setKeywords(keywords);  //...prev  mean to separate array of state
    }
    
    //end Description state

    //start Details state
    let [salary,setSalary] =useState(0);
    const handleSetSalary = (value) => {
        setSalary(value);
    }
    
    let [salaryType,setSalaryType] =useState("monthly");
    const handleSetSalaryType = (value) => {
        setSalaryType(value);
    }

    let [jobType,setJobType] =useState("full-time");
    const handleSetJobType = (value) => {
        setJobType(value);
    }
    let [experience, setExperience] =useState("bachelor-degree");
    const handleSetExperience = (value) => {
        setExperience(value);
    }

    let [companyName, setCompanyName] = useState(null);
    const handleSetCompanyName = (value) => {
        setCompanyName(value);
    }

    let [companyWebiste, setCompanyWebsite] = useState(null);
    const handleSetCompanyWebsite = (value) => {
        setCompanyWebsite(value);
    }
    //end Details state
    
    //start Media state
    const [logoUrl, setLogoUrl] = useState(null);
    const uploadLogoUrl = (value) => {
        setLogoUrl(value);
    }

    const [photoUrls, setPhotoUrls] = useState([]);
    const upLoadPhotoUrls = (url) => {
        setPhotoUrls((prev) => [...prev,url])
    }
    const removePhoto = (url) => {
        setPhotoUrls((prev) => prev.filter((photoUrl) => photoUrl !== url));
    }
    //end Media state

    return(
        <>

            <div className="py-12 w-[90%] mx-auto px-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto border
             border-l-0 border-r-0 border-gray-50">
                <div>Alert warning</div>

                <div className="flex ">
                    <div className="relative w-4/12 h-auto rounded shadow">
                       <img src={require("../assets/product2.png")} alt="post job"
                       className="object-cover object-center h-full rounded-l" />
                       <div className="absolute top-0 w-full h-full bg-teal-500 rounded-l bg-opacity-40 ">
                        
                       </div>
                    </div>
                    <div className="w-8/12 h-full p-10 bg-white rounded-r shadow space-y-9">
                        {/* dynamic component */}
                        <div>
                            {displayComponent === 0 ? 
                                <CreateAJob 
                                    tittle={tittle}
                                    handleSetTittle={handleSetTittle}
                                    isOwnCompany={isOwnCompany}
                                    toggleOwnCompany={toggleOwnCompany}
                                    onBehalf={onBehalf} 
                                    toggleOnBehalf={toggleOnBehalf}
                                    onBehalfOfOtherCompany={onBehalfOfOtherCompany}
                                    handleOnBehalfOfCompany={handleOnBehalfOfCompany}
                                    category={category}
                                    handleActiveCategory={handleActiveCategory}
                                    handleClearActiveCategory={handleClearActiveCategory}
                                    address={address}
                                    handleSetAddress={handleSetAddress}
                                />
                             : displayComponent === 1? <Description
                                                            characterCount={characterCount}
                                                            calculateCharacterCount={calculateCharacterCount}
                                                            description={description}
                                                            handleSetDescription={handleSetDescription}
                                                            keywords={keywords}
                                                            handleSetKeywords={handleSetKeywords}
                                                        />
                             : displayComponent === 2 ? <Details
                                                            salary={salary}
                                                            handleSetSalary={handleSetSalary}
                                                            salaryType={salaryType}
                                                            handleSetSalaryType={handleSetSalaryType}
                                                            jobType={jobType}
                                                            handleSetJobType={handleSetJobType}
                                                            experience={experience}
                                                            handleSetExperience={handleSetExperience}
                                                            companyName={companyName}
                                                            handleSetCompanyName={handleSetCompanyName}
                                                            companyWebiste={companyWebiste}
                                                            handleSetCompanyWebsite={handleSetCompanyWebsite}
                                                        
                                                        />
                             : <Media
                                    logoUrl={logoUrl}
                                    uploadLogoUrl={uploadLogoUrl}
                                    photoUrls={photoUrls}
                                    upLoadPhotoUrls={upLoadPhotoUrls}
                                    removePhoto={removePhoto}
                                />
                            }
                        </div>
                        <div className="w-full border-t border-gray-200"></div>
                        <div className="flex items-center justify-between" >
                            <div>
                                <button 
                                    onClick={handleDecreaseDisplayComponentIndex}
                                    className={`flex items-center px-6 py-2 space-x-2 text-xl text-gray-900 border rounded shadow select-none focus:outline-none ${displayComponent<1 && "hidden"}`}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                    </svg>
                                    <span>Back</span>
                                </button>
                            </div>
                            <div>
                                {
                                    displayComponent < 3 ?
                                    <button 
                                    onClick={handleIncreaseDisplayComponentIndex}
                                    className={`flex items-center px-6 py-2 space-x-2 text-xl text-gray-900 border rounded shadow select-none focus:outline-none `} 
                                    >
                                    <span>Next</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                               
                                    </button>
                                    :
                                    
                                    <div className="w-32 h-12 relatiive">
                                        <button 
                                            className="w-full h-full text-xl text-white bg-teal-500 border rounded shadow select-none focus:outline-none"
                                            // id="button"
                                        >
                                            Save
                                        </button>
                                    </div>
                                    
                                }
                            </div>
                            
                    
                        </div>
                    </div>
                </div>

                
                <PostJobStep/>
                
            </div>
        </>
    )
}
export default PostJob;