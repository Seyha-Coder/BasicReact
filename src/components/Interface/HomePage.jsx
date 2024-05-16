import Cart from "./Cart"
import Guiline from "./Giuline"

export const HomePage = () =>{

    return(
        <>
            <div className="w-full mx-auto ">
                <div className="mx-auto  w-[90%]">
                    <Cart/>
                </div>
                <div className="mx-auto  w-[90%] bg-gray-50">
                    <Guiline/>
                </div>
            </div>
        </>
    )
}