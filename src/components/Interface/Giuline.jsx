

function Guiline(){
    return(
        <>
            <div className='py-12 space-y-20 2xl:w-8/12 2xl:mx-auto'>
                <div className="space-y-2">
                    <h1 className="font-serif text-2xl font-bold text-gray-900 ">How to Post a job?</h1>
                    <h3 className="text-xl text-gray-900">It's quick to start and learn more</h3>
                </div>
                
                <div className="relative grid grid-cols-4 mt-5">
                    <hr className="absolute w-full border border-gray-200 top-7" />

                    <div className="space-y-5">
                        <div className="relative z-10 flex items-center justify-center font-mono text-2xl text-white bg-teal-500 rounded-full w-14 h-14">
                            01
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold ">Step 1</h1>
                            <h3>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi quo magnam officiis impedit cumque aliquid eius delectus itaque fuga.
                            </h3>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="relative z-10 flex items-center justify-center font-mono text-2xl text-white bg-teal-500 rounded-full w-14 h-14">
                            02
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold ">Step 2</h1>
                            <h3>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi quo magnam officiis impedit cumque aliquid eius delectus itaque fuga.
                            </h3>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="relative z-10 flex items-center justify-center font-mono text-2xl text-white bg-teal-500 rounded-full w-14 h-14">
                            03
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold ">Step 3</h1>
                            <h3>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi quo magnam officiis impedit cumque aliquid eius delectus itaque fuga.
                            </h3>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="relative z-10 flex items-center justify-center font-mono text-2xl text-white bg-teal-500 rounded-full w-14 h-14">
                            04
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold ">Step 4</h1>
                            <h3>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi quo magnam officiis impedit cumque aliquid eius delectus itaque fuga.
                            </h3>
                        </div>
                    </div>
                </div>
               
                <div className='space-y-10 2xl:space-y-0'>
                    <div className="space-y-2">
                        <h1 className="font-serif text-2xl font-bold text-gray-900 ">How to apply a job?</h1>
                        <h3 className="text-xl text-gray-900">It's quick to start and learn more</h3>
                    </div>
                    
                    <div className='flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0'>
                        <div className='relative grid lg:gap-y-4 2xl:gap-y-16'>
                            <hr className="absolute h-full border border-gray-200 left-7" />
                            <div className="flex h-full space-x-10">
                                <div className="relative z-10 flex items-center justify-center font-mono text-2xl text-white bg-teal-500 rounded-full w-14 h-14">
                                    01
                                </div>
                                <div className="w-10/12 space-y-3 md:w-4/6 2xl:w-7/12">
                                    <h1 className="text-xl font-bold ">Step 1</h1>
                                    <h3>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi quo magnam officiis impedit cumque aliquid eius delectus itaque fuga.
                                    </h3>
                                </div>
                            </div>
                            <div className="flex h-full space-x-10">
                                <div className="relative z-10 flex items-center justify-center font-mono text-2xl text-white bg-teal-500 rounded-full w-14 h-14">
                                    02
                                </div>
                                <div className="w-10/12 space-y-3 md:w-4/6 2xl:w-7/12">
                                    <h1 className="text-xl font-bold ">Step 2</h1>
                                    <h3>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi quo magnam officiis impedit cumque aliquid eius delectus itaque fuga.
                                    </h3>
                                </div>
                            </div>
                            <div className="flex h-full space-x-10">
                                <div className="relative z-10 flex items-center justify-center font-mono text-2xl text-white bg-teal-500 rounded-full w-14 h-14">
                                    03
                                </div>
                                <div className="w-10/12 space-y-3 md:w-4/6 2xl:w-7/12">
                                    <h1 className="text-xl font-bold ">Step 3</h1>
                                    <h3>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi quo magnam officiis impedit cumque aliquid eius delectus itaque fuga.
                                    </h3>
                                </div>
                            </div>
                            
                        </div>
                        <div className='w-full h-full'>
                            <img src={require('../assets/product1.png')} alt="image not found"
                            className='object-cover object-center w-full madx-h-full md:max-h-96 2xl:max-h-fit' />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Guiline;