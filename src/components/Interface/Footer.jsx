
import {BsFacebook,BsTiktok,BsInstagram,BsYoutube} from "react-icons/bs";
function Footer(){
    return (
        <div className="pt-10 pb-5 mt-3 text-white bg-gray-900 border-t-4 border-teal-500 w-[90%] mx-auto">
            <div className="flex flex-col justify-between 2xl:w-8/12 2xl:mx--auto">
                <div className="grid gap-4 px-4 md:gap-8 md:grid-cols-10 grid-row-4 md:grid-rows-1">
                    <div className="col-span-3 col">
                        <h3 className="font-serif text-4xl font-bold tracking-wider capitalize">Job <span className="text-teal-500">Center</span></h3>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium vitae hic iusto sit nulla?</h5>
                    </div>
                    <div className="col-span-2 col">
                        <h3 className="pb-4 text-2xl font-bold tracking-wide capitalizer">Userful Links</h3>
                        <ul className="">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>How it works</li>
                            <li>Easy to apply</li>
                        </ul>
                    </div>
                    <div className="col-span-2 col">
                        <h3 className="pb-4 text-2xl font-bold tracking-wide capitalizer">Quick Search</h3>
                        <ul className="">
                            <li>Search</li>
                            <li>Popular</li>
                            <li>New Added</li>
                            <li>Most Relevant</li>
                        </ul>
                    </div>  
                    <div className="col-span-3 col">
                        <h3 className="pb-4 text-2xl font-bold tracking-wide capitalizer">
                            Join ouer newsletter
                        </h3>
                        <p className="">Lorem ipsum dolor sit amet.</p>
                        <div className="flex justify-between py-3">
                            <input  type="email" id="email" placeholder="Email your address here"
                            className="px-2 py-1 border p-full rounded-1 focus:outline-none placeholder:sm" />
                            <label htmlFor="email" className="flex items-center justify-center px-5 py-2 text-white bg-teal-500 rounded-r cursor-pointer">
                                Join
                            </label>
                        </div>
                        <p className="text-xs tracking-wider ">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex items-end justify-between px-10 mt-20 2xl:px-0">
                    <div>0 2022 All right reserve</div>
                    <div>
                        <ul className="flex items-center space-x-3 text-sm">
                            <li><BsFacebook className="cursor-pointer " /></li>
                            <li><BsTiktok className="cursor-pointer " /></li>
                            <li><BsInstagram className="cursor-pointer " /></li>
                            <li><BsYoutube className="cursor-pointer " /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;