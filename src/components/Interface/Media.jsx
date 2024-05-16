import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
     faTrash,
     faFileImage,
     faBan
     } from "@fortawesome/free-solid-svg-icons";
const types =["image/jpg","image/jpeg","image/png", "image/svg"];
function Media(props){
    const {
        logoUrl,
        uploadLogoUrl,
        photoUrls,
        upLoadPhotoUrls,
        removePhoto
    }=props;
    const handleUploadImage = (e) =>{
        const selected = e.target.files[0];
        if(selected && types.includes(selected.type) &&  e.target.alt=="logo"){
            uploadLogoUrl(selected.name);
        }
        if(selected && types.includes(selected.type) &&  e.target.alt=="photo"){
            if(photoUrls.includes(selected.name)){
                alert("Photo already added...!");
            }else{
                upLoadPhotoUrls(selected.name);
            }
            
        }
    }
    const handleRemoveImage = (url) => {
        if(!url){
            uploadLogoUrl("");
        }else{
            removePhoto(url);
        }
    }

    return(
        <div className="space-y-9">
           <div className="flex items-end space-x-3">
                <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full font-normalal-500 font-">
                    04
                </div>
                <div className="text-2xl font-bold text-gray-900">Media</div>
            </div>
            
           <div className="pt-6 space-y-6">
                <div className="flex items-center pt-3 space-x-3">
                    <p className="w-3/12 font-bold text-gray-900">Company Logo</p>
                    <hr className="w-9/12 border-t border-gray-200"/>
                </div>
                
                <label
                    onClick={handleUploadImage}
                     htmlFor="file" className="flex flex-col items-center justify-center w-1/4 h-32 space-y-1 border rounded cursor-pointer">
                    <FontAwesomeIcon icon={faFileImage} className="w-10 h-10 text-teal-600" />
                    <span className="text-gray-600 uppercase select-none">Select a photo</span>
                    <input type="file" name="" id="file" className="hidden" alt="logo" />
                </label>
            </div>
            
           <div className="space-y-6">
                <div className="flex items-center pt-3 space-x-3">
                    <p className="w-2/12 font-bold text-gray-900">My Photo</p>
                    <hr className="w-8/12 border-t border-gray-200"/>
                    <p className="w-2/12 font-bold text-gray-900">
                        <span className="text-teal-600">2</span>
                    </p>
                </div>
                <div>
                    <label htmlFor="new" className="flex flex-col items-center justify-center w-1/4 py-4 space-y-2 border rounded cursor-pointer">
                        <FontAwesomeIcon icon={faFileImage}  className="w-10 h-10 text-teal-600" />
                        <span className="text-gray-600 uppercase select-none">Add new </span>
                        <input type="file" name="" id="new" className="hidden" alt="photo" />
                    </label>
                    <span className="flex items-center mt-1 space-x-1 text-sm font-bold text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>

                        <span>We support .jpg, .jpeg, .png and .svg image only.</span>
                    </span>
                </div>
                <ul>
                    
                </ul>
           </div>

        </div>
    )
}
export default Media;