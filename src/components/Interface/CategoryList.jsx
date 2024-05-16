import { categories } from "../../mocks/categories";
import {FaAngleRight} from "react-icons/fa";
import {TiTick} from "react-icons/ti";
function CategoryList(props){
    const {toggleCategoryShow,
        category,
        handleActiveCategory,
        handleClearActiveCategory}=props;
    
    //  const category="Social Service";
    return(
        <div className="z-30 h-auto max-w-lg px-5 mx-auto mt-32">
            <div className="p-5 bg-white rounded">
                <div className="grid grid-cols-5 border border-gray-300 h-96">
                    <ul className="overflow-hidden overflow-y-auto cols-span-3 element">
                        {
                            //check categories has value or not
                            categories.length>0 && categories.map((item,i) => 
                            (<li 
                                onClick={handleActiveCategory}
                                key={item+i} className="flex items-center justify-between p-2 text-xl font-bold tracking-wide text-gray-900 border-b border-gray-300 cursor-pointer bg-gray-50">
                                <span>{item.name}</span>
                                {
                                    category===item.name? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 text-teal-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      ) : 
                                      (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    )
                                }
                                
                            </li>))
                        }
                    </ul>
                    
                    {/* for apply style */}
                    <div className="border-l cols-span-2"></div>
                </div>

                <div className="w-full my-5 border border-gray-300"></div>

                <div className="flex items-center justify-between">
                    <button 
                    onClick={handleClearActiveCategory}
                    className="px-10 py-2 font-bold text-white bg-gray-900 border rounded focus:outline-none"
                    >
                        Clear All
                    </button>
                    <button 
                    className="px-10 py-2 font-bold text-white bg-teal-500 border rounded focus:outline-none"
                    onClick={toggleCategoryShow}
                    >
                        Continue
                    </button>
                </div>
                
            </div>
        </div>
    )
}
export default CategoryList;