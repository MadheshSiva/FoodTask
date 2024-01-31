import React from "react";

const Footer = () => {

    return (
        <>
            <div className=" w-full justify-around flex  my-2">
                <div >
                    <h1 className="font-bold text-neutral-300">About</h1>
                    <div>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">About us</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Culture</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Blog</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Careers</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Contact</h1>
                    </div>
                </div>
                <div >
                    <h1 className="font-bold text-neutral-300">Foodies</h1>
                    <div>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Burger</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Pizza</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Sub's</h1>
                       
                    </div>
                </div>
                <div >
                    <h1 className="font-bold text-neutral-300">Restaurants</h1>
                    <div>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Burger King</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Pizza Hut</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">KFC</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Mac Donalds</h1>
                        <h1 className="text-neutral-200 text-sm cursor-pointer">Dominos</h1>
                    </div>
                </div>
                
            </div>
            <h1 className="text-center text-sm text-neutral-200">Copyright © Your Website 2024</h1>
        </>
    )

}

export default Footer;