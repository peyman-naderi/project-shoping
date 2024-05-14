import React from "react";
import Journal from "./Journal";
const Photo3 = () => {
    return(
        <>
        <div className="w-[84%] hidden lg:flex mt-20 mx-auto justify-center items-center ">
            <div className="lg:w-[25%] w-full">
                <img src="./img/a1.png" alt="" />
            </div>
            <div className="lg:w-[25%] w-full">
                <img src="./img/a2.png" alt="" />
            </div>
            <div className="lg:w-[25%] w-full">
                <img src="./img/a3.png" alt="" />
            </div>
            <div className="lg:w-[25%] w-full">
                <img src="./img/a4.png" alt="" />
            </div>
        </div>

        <div className="w-[82%] hidden lg:flex  mt-20 mx-auto justify-center items-center ">
            <img src="/img/last.png" alt="" />
        </div>

        <Journal />
        </>
)}

export default Photo3;