

function Description(props){
    const {
        characterCount,
        calculateCharacterCount,
        description,
        handleSetDescription,
        keywords,
        handleSetKeywords
    }=props;

    const handleOnChange = ({target}) => {
        calculateCharacterCount(target.value.length);
        handleSetDescription(target.value);
    }
    return(
        <div className="space-y-9">
            
            <div className="flex items-end space-x-3">
                <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full font-normalal-500 font-">
                    02
                </div>
                <div className="text-2xl font-bold text-gray-900">Description</div>
            </div>
            
            <div className="pt-6">
                <span className="inline-block w-full text-sm text-gray-500 text-end">
                    Character remaining
                    <span className="font-bold text-teal-600"> {" "}{characterCount} </span>
                </span>
                <p className="font-bold text-gray-900 after:content-['*'] after:text-red-600 after:text-xl ">
                    Description
                </p>
                <textarea
                onChange={handleOnChange}
                maxLength={200} 
                value={description ? description : ""}
                 className="w-full p-3 tracking-wider text-gray-900 border bg-gray-50 h-60 focus:outline-none"></textarea>
            </div>
            <div className="space-y-3">
                <p className="font-bold text-gray-900">
                    Keywords
                </p>
                <input 
                onChange={({target}) => handleSetKeywords(target.value)}
                type="text" name="" id="" value={keywords ? keywords : ""}
                    className="w-full p-3 text-gray-900 border rounded bg-gray-50 focus:outline-none" />
                <span className="text-sm text-gray-500 ">
                    Separate each keywords with a comma,
                </span>
            </div>
        </div>
    )
}
export default Description;