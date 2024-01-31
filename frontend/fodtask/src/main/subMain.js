import React,{useEffect, useState} from "react";
import axios from "axios";
const SubMain = ({restaurant,food,price,distance,delivery}) => {


    return(
        <>
         <div className="font-sans border p-3 rounded-lg transition duration-200 hover:transform hover:scale-105 cursor-pointer bg-neutral-100 hover:shadow-lg hover:shadow-[#E84A3A]">
            <h1 className="text-xl font-bold">{restaurant}</h1>
            <div className="flex items-center justify-between">
                <p className="text-[#E84A3A] text-sm font-semibold">{food}</p>
                <p className="text-[#42BFD7] text-sm font-semibold">{price}₹</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-green-400 text-sm font-semibold">{delivery}</p>
                <p className="text-[#CF3421] text-sm">{distance}</p>
            </div>
         </div>
        </>
    )
}

export default SubMain;