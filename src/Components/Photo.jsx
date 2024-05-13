import React from "react"

import SliderProduct2 from "./SliderProduct2";


const Photo = () => {
    return(
        <>
        <div className="w-[82%] flex flex-wrap mt-24 mx-auto justify-center items-center gap-y-5">
            <div className="lg:w-[50%] w-[100%]">
                <img src="./img/pril.png" alt="" />
            </div>
            <div className="lg:w-[50%] w-[100%]">
                <img src="./img/coler2.png" alt="" />
            </div>
        </div>

        <div className="w-[82%] hidden lg:flex mt-20 mx-auto justify-center items-center">
            <img src="/img/farm.png" alt="" />
        </div>

        <SliderProduct2 />
        </>
    )
}

export default Photo;