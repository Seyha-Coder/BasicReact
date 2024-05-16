import { NavLink ,Link,Outlet} from "react-router-dom";
function Products(){

        return (
            <div className="p-10 mx-auto space-y-10 w-96">
                <div className="space-x-5 font-30">
                    <Link to="product" className="text-gray-900 " >
                       product1
                    </Link>
                </div>
                <Outlet/>
            </div>
     
        );
}
export default Products;