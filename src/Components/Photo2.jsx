import React from "react";
import SliderProduct3 from "./SliderProduct3";
const Photo2 = () => {
    return(
        <>
        <div className="w-[82%] flex flex-wrap mt-20 mx-auto justify-center items-center gap-y-5">
            <div className="lg:w-[50%] w-full">
                <img src="./img/ger.png" alt="" />
            </div>
            <div className="lg:w-[50%] w-full">
                <img src="./img/kaf.png" alt="" />
            </div>
        </div>
        <SliderProduct3 />
        </>
)}

export default Photo2;