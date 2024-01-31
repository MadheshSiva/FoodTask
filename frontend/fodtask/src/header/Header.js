import React from "react"
import logo from "../images/foodie.png"
const Header = () => {

    return(
        <>
       <div className="bg-neutral-100 flex justify-between items-center">
        <img src={logo} alt="food_image" className="w-16"/>

        <div className="w-3/5 flex items-center gap-14 cursor-pointer">
            <h1  className="hover:text-[#FF3131] transition duration-200 text-md hover:font-semibold">Home</h1>
            <h1 className="hover:text-[#FF3131] transition duration-200 text-md hover:font-semibold">Offers <span className="bg-[#FF3008] px-[0.15rem] text-[9px] pb-[0.04rem] font-sans text-white rounded-sm ">New</span></h1>
            <h1  className="hover:text-[#FF3131] transition duration-200 text-md hover:font-semibold">Restaurants</h1>
            <h1  className="hover:text-[#FF3131] transition duration-200 text-md hover:font-semibold">My Accounts</h1>
        </div>
       </div>
        </>
    )
}

export default Header;