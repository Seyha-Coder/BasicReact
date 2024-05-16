import { NavLink ,Outlet} from "react-router-dom";
function Nav(){
    //we can apply style active by use ===>
    // const StyleActive = ({isActive}) =>{
    //     return{
    //         fontWeight: isActive ? 'bold': 'normal',
    //         //.....
    //     }
    // }
        return (
            <div className="p-10 mx-auto space-y-10 w-96">
                <div className="space-x-5 font-30">
                    <NavLink to="/" className={({isActive}) =>
                        isActive ? "bg-blue-900 text-white"
                        : "bg-white text-red-400"
                    } >
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) =>
                        isActive ? "bg-blue-900 text-white"
                        : "bg-white text-red-400"
                    } >
                        About
                    </NavLink>
                    <NavLink to="/products" className={({isActive}) =>
                        isActive ? "bg-blue-900 text-white"
                        : "bg-white text-red-400"
                    } >
                        Products
                    </NavLink>
                    <NavLink to="/login" className={({isActive}) =>
                        isActive ? "bg-blue-900 text-white"
                        : "bg-white text-red-400"
                    } >
                        Login
                    </NavLink>
                    <Outlet/>
                </div>
            </div>
        );
}
export default Nav;