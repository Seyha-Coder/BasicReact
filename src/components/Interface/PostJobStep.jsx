function PostJobStep (){
    return(
        <>
            <div className="items-center hidden w-full px-10 my-10 space-x-3 overflow-hidden lg:flex 2xl:px-0">
                <div className="grid items-center w-full grid-cols-6 gap-2">
                    <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-teal-500 rounded-full">
                        01
                    </div>
                    <p className="text-sm font-bold">Basic</p>
                    <hr className="col-span-4 border border-gray-200" />
                </div>

                <div className="grid items-center w-full grid-cols-6 gap-2">
                    <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-teal-500 rounded-full">
                        02
                    </div>
                    <p className="text-sm font-bold">Description</p>
                    <hr className="col-span-4 border border-gray-200" />
                </div>

                <div className="grid items-center w-full grid-cols-6 gap-2">
                    <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-teal-500 rounded-full">
                        03
                    </div>
                    <p className="text-sm font-bold">Details</p>
                    <hr className="col-span-4 border border-gray-200" />
                </div>

                <div className="grid items-center w-full grid-cols-6 gap-2">
                    <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-teal-500 rounded-full">
                        04
                    </div>
                    <p className="text-sm font-bold">Media</p>
                    <hr className="col-span-4 border border-gray-200" />
                </div>
            </div>
        </>
    )
}
export default PostJobStep;