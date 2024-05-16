function Details(props){
    const {
        salary,
        handleSetSalary,
        salaryType,
        handleSetSalaryType,
        jobType,
        handleSetJobType,
        experience,
        handleSetExperience,
        companyName,
        handleSetCompanyName,
        companyWebiste,
        handleSetCompanyWebsite,
    } =props;
    return(
        <div className="space-y-9 ">
            <div className="flex items-end space-x-3">
                <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full font-normalal-500 font-">
                    03
                </div>
                <div className="text-2xl font-bold text-gray-900">Details</div>
            </div>

            <div className="pt-6 space-y-6">
                <div className="flex items-center pt-3 space-x-3">
                    <p className="w-2/12 font-bold text-gray-900">Details</p>
                    <hr className="w-10/12 border-t border-gray-200"/>
                </div>
                
                <div className="flex justify-between pt-3 space-x-3">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="font-bold text-gray-900 ">
                            Salary
                        </label>
                        <div className="flex">
                            <p className="px-5 py-2 font-bold text-white bg-teal-500 border-gray-200 rounded-l">$</p>
                            <input type="text"
                                onChange={({target}) => handleSetSalary(target.value)}
                                placeholder={`${salary}`} 
                                className="w-full px-2 text-gray-900 border-l-0 border-gray-200 rounded-r bg-gray-50 focus:outline-none"/>
                        </div>
                    </div>
                    
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="font-bold text-gray-900">Salary Pricing</label>
                        <select 
                            onChange={({target}) => handleSetSalaryType(target.value)}
                            value={salaryType}
                            name="" id="" 
                            className="block w-full px-3 py-2.5 bg-gray-50 text-gray-500 border-gray-200 rounded tracking-wider text-sm cursor-pointer focus:outline-none">
                            <option value="hourly">Hour Rate</option>
                            <option value="monthly">Fixed Salary {"monthly"}</option>
                            <option value="yearly">Fixed Salary {"anually"}</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between pt-3 space-x-3">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="font-bold text-gray-900">Job Type</label>
                        <select 
                            onChange={({target}) => handleSetJobType(target.value)}
                            value={jobType}
                            name="" id="" 
                            className="block w-full px-3 py-2.5 bg-gray-50 text-gray-500 border-gray-200 rounded tracking-wider text-sm cursor-pointer focus:outline-none">
                            <option value="part-time">Part Time</option>
                            <option value="full-time">Full Time </option>
                            <option value="internship">Internship </option>
                            <option value="contract">Contract </option>
                        </select>
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="font-bold text-gray-900">Experience</label>
                        <select 
                            onChange={({target}) => handleSetExperience(target.value)}
                            value={experience}
                            name="" id="" 
                            className="block w-full px-3 py-2.5 bg-gray-50 text-gray-500 border-gray-200 rounded tracking-wider text-sm cursor-pointer focus:outline-none">
                            <option value="hight-school-degree">High School deploma or equivalent</option>
                            <option value="associate-degree">Associate Degree</option>
                            <option value="bachelor-degree">Bachelor Degree </option>
                            <option value="master-degree">Master Degree</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="space-y-8">
                <div className="flex items-center pt-3 space-x-3">
                    <p className="w-2/12 font-bold text-gray-900">Company Details</p>
                    <hr className="w-10/12 border-t border-gray-200"/>
                </div>
                <div className="flex justify-between space-x-3">
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="block font-bold text-gray-900">Company Name</label>
                        <input 
                            onChange={({target}) => handleSetCompanyName(target.value)}
                            placeholder={`${companyName ? companyName : "Company Name"}`}
                            type="text"
                            className="w-full p-2 text-gray-900 border border-gray-200 rounded bg-gray-50 focus:outline-none"  />
                    </div>
                    <div className="w-full space-y-2">
                        <label htmlFor="" className="block font-bold text-gray-900">Company Website</label>
                        <input 
                            onChange={({target}) => handleSetCompanyWebsite(target.value)}
                            placeholder={`${companyWebiste ? companyWebiste : "Company Website"}`}
                            type="url" 
                            className="w-full p-2 text-gray-900 border border-gray-200 rounded bg-gray-50 focus:outline-none"  />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;