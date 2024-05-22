import React from "react";

const Footer = () => {
    return (
        <>
        <div className="border-t-4 border-solid border-blue-900 mt-20">
            <div className="w-[83%] mx-auto mt-10">
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
                <div className="block lg:flex mx-auto mt-10  gap-y-10 w-full lg:gap-x-32 items-center  pb-10  border-b border-solid border-blue-900">
                    <h2 className="text-center lg:text-start lg:text-lg text-base font-bold mb-8 lg:leading-[31px]">دانلود اپلیکیشن آرپی کالا</h2>
                    <div className="md:flex items-center lg:gap-x-28">
                        <img src="/img/maykt.png" alt="" className="w-[90%] mx-auto" />
                        <img src="/img/bazzar.png" alt=""  className="w-[90%] mx-auto"/>
                    </div>
                </div>

                {/*seactiont -- 4 */}
                <div className="mt-10 lg:flex grid grid-cols-2 pb-10  lg:gap-x-4 xl:gap-x-8 gap-x-3  border-b border-solid border-blue-900">

                    <div className=" lg:w-[18%]">
                        <h2 className="text-lg font-bold leading-[31px] w-[70px] mb-5">پشتیبانی</h2>
                        <p className=" text-base font-bold mb-5 ">در روز های کاری از ساعت 8 تا ساعت 20 
                         ،میزبان صدای گرمتان هستیم</p>
                         <span className="text-xl text-blue-500 font-bold ">031 7702000</span>
                         <p><a href="#" className="font-bold text-lg mt-4 text-gray-300">Support@RpKala.co</a></p>
   
                    </div>

                    <div className=" lg:w-[18%]  mr-8">
                        <h2 className="text-lg  font-bold leading-[31px] w-[70px] mb-3">آرپی کالا</h2>
                        <ol>
                            <li className=" text-base font-bold mb-3 ">صفحه اصلی</li>
                            <li className=" text-base font-bold mb-3 ">تماس با ارپی کالا</li>
                            <li className="text-base font-bold mb-3 ">درباره ارپی کالا</li>
                            <li className=" text-base font-bold mb-3 ">فروشنده شوید</li>
                            
                        </ol>
                    </div>

                    <div className=" lg:w-[18%]  xl:block hidden ">
                        <h2 className="text-lg  font-bold leading-[31px]  mb-3">ارتباط با مدیریت</h2>
                        <ol>
                            <li className="flex gap-x-1 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <p href="" className=" text-base font-bold mb-2"> 1489 934 0921</p>
                            </li>
                            <li className="flex gap-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p href="" className=" text-base font-bold mb-3">اصفهان - گلزار جنوبی</p>
                            </li>
                            <li className="flex gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p className=" text-base font-bold mb-2">Salam@RPKala.co</p>
                            </li>

                        </ol>
                    </div>

                    <div className=" lg:w-[18%] ">
                        <h2 className="text-lg font-bold leading-[31px]  mb-5">خدمات مشتریان</h2>
                        <ol>
                            <li className=" text-base font-bold mb-3 ">پیگیری سفارش ها</li>
                            <li className=" text-base font-bold mb-3 ">بازگشت کالا</li>
                            <li className=" text-base font-bold mb-3 ">حریم خصوصی</li>
                            <li className=" text-base font-bold mb-3 ">سنجش رضایت مندی</li>
                        </ol>
                    </div>

                    <div className=" lg:w-[18%]">
                        <h2 className="text-lg font-bold leading-[31px] mb-5">نماد اعتماد الکترونیک</h2>
                        <div className="flex">
                            <img src="/img/zr.png" alt="" />
                            <img src="/img/ab.png" alt="" />
                            <img src="/img/lo.png" alt="" className="lg:flex hidden"/>
                        </div>
                    </div>

                </div>



            </div>
        </div>
        </>
    )
}

export default Footer;