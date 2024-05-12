import React from "react"
import SliderProducts from "./SliderProducts";

const Products = () => {
    return(
        <>
        <div className="hidden lg:flex w-[83%] mx-auto mt-9">
            <div className="w-[25%] ">
                <img src="/img/sport.png" alt="" />
            </div>
            <div className="w-[25%]">
                <img src="/img/lamp.png" alt="" />
            </div>
            <div className="w-[50%] mt-1">
                <img src="/img/coler.png" alt="" />
            </div>
        </div>
        <SliderProducts/>
        </>
    )
}

export default Products;