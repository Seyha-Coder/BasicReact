

function LocationForm(props){
    const {toggleLocationShow,address,handleSetAddress}=props;
    return(
        <>
            <div className="z-30 h-auto max-w-lg px-5 mx-auto mt-36">
                <form onSubmit={(e) => e.preventDefault()} action="" className="p-5 space-y-8 bg-white rounded">
                    <h1 className="text-3xl font-bold text-gray-900">Location Form</h1>
                    <div className="space-y-4">
                        <label htmlFor="" className="block font-bold">Address</label>
                        <input type="text" name="" id=""
                         disabled
                        className="w-full px-1 py-2 capitalize border border-gray-300 rounded focus:outline-none"
                        placeholder={`${(address.city, address.country)}`}
                         />

                    </div>
                    <div className="flex items-center justify-between space-x-3">
                        <div className="w-full">
                            <label htmlFor="country">Country</label>
                            <input type="text" className="w-full px-1 py-2 capitalize border border-gray-300 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-offset-blue-300 placeholder-tracking-wide placeholder-text-gray-500"
                             id="country"
                             placeholder={address.country}
                             onChange={ ({target}) => handleSetAddress({country: target.value}) }
                             />
                        </div>
                        
                        <div className="w-full">
                            <label htmlFor="city">City</label>
                            <input type="text" className="w-full px-1 py-2 capitalize border border-gray-300 rounded focus:outline-none focus:ring focus:ring-offset-1 focus:ring-offset-blue-300 placeholder-tracking-wide placeholder-text-gray-500"
                            placeholder={address.city} 
                            onChange={ ({target}) => handleSetAddress({city: target.value}) }
                            id="city"/>
                        </div>
                    </div>
                    <button 
                    onClick={toggleLocationShow}
                    className="px-10 py-2 font-bold text-white bg-teal-500 rounded focus:outline-none">
                        Continue
                    </button>
                </form>
            </div>
        </>
    )
}
export default LocationForm;