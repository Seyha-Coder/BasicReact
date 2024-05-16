import Cart from "../../components/Interface/Cart";
import Guiline from "../../components/Interface/Giuline";


export const Product = () => {
    return(
        <>
            <div className="w-full mx-auto ml-24">
                <div className="mx-auto 2xl:px-0 2xl:w8/12 2xl:mx-auto">
                    <Cart/>
                </div>
                <div className="mx-auto 2xl:px-0 2xl:w8/12 2xl:mx-auto">
                    <Guiline/>
                </div>
            </div>
        </>
    );
}