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
                <div className="flex mx-auto mt-10 gap-x-5  pb-10 justify-between  border-b border-solid border-blue-900 ">
                    <div className="hidden gap-x-1 items-center lg:flex">
                        <img src="/img/kar.png" alt="" />
                        <h2 className="font-bold text-base items-center">ارسال سریع و آسان</h2>
                    </div>
                    <div className="md:flex hidden gap-x-1 items-center">
                        <img src="/img/tik.png" alt="" />
                        <h2 className="font-bold text-base items-center">امکان پرداخت حضوری در محل</h2>
                    </div>
                    <div className="md:flex hidden gap-x-1 items-center">
                        <img src="/img/clock.png" alt="" />
                        <h2 className="font-bold text-base items-center">پاسخگویی سریع </h2>
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <img src="/img/kabra.png" alt="" />
                        <h2 className="font-bold text-base items-center">خدمات پس از فروش</h2>
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <img src="/img/tag.png" alt="" />
                        <h2 className="font-bold text-base items-center">سه روز ضمانت  بازگشت کالا</h2>
                    </div>
                </div>

                {/*seaction -- 3 */}
                <div className="block lg:flex mx-auto mt-10  gap-y-10 w-full lg:gap-x-28 items-center  pb-10  border-b border-solid border-blue-900">
                    <h2 className="text-center lg:text-start lg:text-lg text-base font-bold mb-8 lg:leading-[31px]">دانلود اپلیکیشن آرپی کالا</h2>
                    <div className="md:flex items-center lg:gap-x-28">
                        <img src="/img/maykt.png" alt="" className="w-[90%] mx-auto" />
                        <img src="/img/bazzar.png" alt=""  className="w-[90%] mx-auto"/>
                    </div>
                </div>



            </div>
        </div>
        </>
    )
}

export default Footer;