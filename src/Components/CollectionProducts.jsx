import React from "react";
import Photo from "./Photo";


const CollectionProducts = () => {
    return(
        <>
        <div className="w-[81%] mx-auto mt-20">
            <div className="flex justify-center items-center gap-x-2">
                <svg width="26" height="26" viewBox="0 0 28 28" color="black" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 11.5H7.75C10.25 11.5 11.5 10.25 11.5 7.75V5.25C11.5 2.75 10.25 1.5 7.75 1.5H5.25C2.75 1.5 1.5 2.75 1.5 5.25V7.75C1.5 10.25 2.75 11.5 5.25 11.5ZM20.25 11.5H22.75C25.25 11.5 26.5 10.25 26.5 7.75V5.25C26.5 2.75 25.25 1.5 22.75 1.5H20.25C17.75 1.5 16.5 2.75 16.5 5.25V7.75C16.5 10.25 17.75 11.5 20.25 11.5ZM20.25 26.5H22.75C25.25 26.5 26.5 25.25 26.5 22.75V20.25C26.5 17.75 25.25 16.5 22.75 16.5H20.25C17.75 16.5 16.5 17.75 16.5 20.25V22.75C16.5 25.25 17.75 26.5 20.25 26.5ZM5.25 26.5H7.75C10.25 26.5 11.5 25.25 11.5 22.75V20.25C11.5 17.75 10.25 16.5 7.75 16.5H5.25C2.75 16.5 1.5 17.75 1.5 20.25V22.75C1.5 25.25 2.75 26.5 5.25 26.5Z" stroke="#414141" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1 className="font-bold text-xl leading-9">دسته بندی کالاها</h1>
            </div>
            <div className="flex flex-wrap items-center justify-around mx-auto mt-12 lg:gap-x-14 gap-x-5">
                <div>
                    <img src="/img/khane.png" alt=""  className="w-32 h-32"/>
                    <p className="mt-14 font-bold text-gray-400">ساختمان و تاسیسات</p>
                </div>
                <div>
                    <img src="/img/mashin.png" alt="" className="w-32 h-32" />
                    <p className="mt-14 font-bold text-gray-400">ساختمان و تاسیسات</p>
                </div>
                <div>
                    <img src="/img/laptap.png" alt="" className=" w-32 h-32"/>
                    <p className=" mt-14 font-bold text-gray-400">کالاهای دیجیتال</p>
                </div>
                <div>
                    <img src="/img/mive.png" alt="" className=" w-32 h-32 pb-3"/>
                    <p className=" mt-14 font-bold text-gray-400">کالاهای سوپر مارکت</p>
                </div>
                <div>
                    <img src="/img/lebas.png" alt="" className=" w-32 h-32 pb-2"/>
                    <p className=" mt-14 font-bold text-gray-400">مد و پوشاک</p>
                </div>
                <div>
                    <img src="/img/araish.png" alt="" className=" w-32 h-32 pb-3"/>
                    <p className=" mt-14 font-bold text-gray-400">زیبایی و سلامت</p>
                </div>
            </div>
        </div>

        <Photo/>
        </>
    )
}

export default CollectionProducts;