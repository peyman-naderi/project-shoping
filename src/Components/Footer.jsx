import React from "react";

const Footer = () => {
    return (
        <>
        <div className="border-t-4 border-solid border-blue-900 mt-20">
            <div className="w-[83%]  mx-auto mt-10 h-96">
                {/*seaction -- 1 */}
                <div className="lg:flex  mx-auto justify-between items-center pb-10  border-b border-solid border-blue-900 ">
                    <div className="md:flex   md:justify-between lg:gap-x-10 ">
                        <div className="mb-5 md:mb-0">
                            <h2 className="text-center lg:text-start lg:text-lg text-base font-bold lg:leading-[31px]">15 % تخفیف با ثبت شماره موبایل</h2>
                            <p className="text-center font-medium lg:text-sm text-xs text-gray-500">با ثبت شماره برای سفارش های بعدی تخفیف بگیرید</p>
                        </div>
                        <button className="border md:flex  hidden mb-5 items-center  border-solid rounded-2xl bg-gray-800 text-white ">
                            <input type="text" placeholder="مثال : ۰۹۱۴۲۷۵۰۲۱۷" className="border rounded-r-2xl items-center  border-solid py-2 lg:py-3 mx-auto  text-black"/>
                            ثبت شماره
                        </button>
                    </div>
                    <div className="flex gap-x-1 md:mt-0 mt-6 lg:gap-x-3 justify-center items-center">
                        <img src="/img/insta.png" alt="" className="w-10 h-10 mb-2" />
                        <img src="/img/apa.png" alt="" className="w-11 h-11 mb-3" />
                        <img src="/img/e.png" alt="" className="" />
                        <img src="/img/to.png" alt="" className="" />
                    </div>
                </div>

                {/*seaction -- 2 */}
                <div className="flex mx-auto mt-10  gap-x-5 justify-between pb-10  border-b border-solid border-blue-900 ">
                    <div className="flex gap-x-2 items-center">
                        <img src="/img/kar.png" alt="" />
                        <h2 className="font-bold text-base items-center">ارسال سریع و آسان</h2>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <img src="/img/.png" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <img src="/img/.png" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <img src="/img/.png" alt="" />
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <img src="/img/.png" alt="" />
                    </div>
                </div>



            </div>
        </div>
        </>
    )
}

export default Footer;