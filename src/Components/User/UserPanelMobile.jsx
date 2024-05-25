import React from "react";

const UserPanelMobile = () => {
    return(
        <>
        <seaction className="block  lg:hidden border-t-2 rounded-l-3xl rounded-r-3xl border-gray-500 w-[98%] mx-auto mt-14 ">
            {/* seaction 1 */}
             <div className="flex items-center justify-between px-8">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9673 0.398926H7.0454C3.47895 0.398926 0.584442 3.28052 0.584442 6.83405V15.8536C0.584442 19.4071 3.47895 22.2887 7.0454 22.2887H8.98369C9.33258 22.2887 9.79777 22.5213 10.0174 22.8056L11.9557 25.377C12.8086 26.5142 14.2041 26.5142 15.057 25.377L16.9953 22.8056C17.2408 22.4825 17.6285 22.2887 18.029 22.2887H19.9673C23.5338 22.2887 26.4283 19.4071 26.4283 15.8536V6.83405C26.4283 3.28052 23.5338 0.398926 19.9673 0.398926ZM14.7986 15.5822H7.0454C6.5156 15.5822 6.07626 15.1428 6.07626 14.6131C6.07626 14.0833 6.5156 13.6439 7.0454 13.6439H14.7986C15.3284 13.6439 15.7677 14.0833 15.7677 14.6131C15.7677 15.1428 15.3284 15.5822 14.7986 15.5822ZM19.9673 9.12123H7.0454C6.5156 9.12123 6.07626 8.68188 6.07626 8.15208C6.07626 7.62229 6.5156 7.18294 7.0454 7.18294H19.9673C20.4971 7.18294 20.9365 7.62229 20.9365 8.15208C20.9365 8.68188 20.4971 9.12123 19.9673 9.12123Z" fill="#A8A8A8"/>
                    </svg>
                    <div>
                      <img src="/img/USER.png" alt=""  className="relative -top-10  mx-auto "/>
                    </div>
                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0422 17.6595L19.6743 15.3887C19.387 14.8826 19.1271 13.925 19.1271 13.3642V9.9033C19.1255 8.37673 18.6916 6.88181 17.8758 5.59152C17.06 4.30122 15.8955 3.26827 14.5171 2.61218C14.1653 1.9875 13.6522 1.46878 13.0313 1.11023C12.4105 0.751682 11.7047 0.56647 10.9878 0.573948C9.49674 0.573948 8.15615 1.38103 7.44482 2.65322C4.77732 3.98012 2.93059 6.72968 2.93059 9.9033V13.3642C2.93059 13.925 2.67068 14.8826 2.38341 15.3751L1.00178 17.6595C0.454603 18.576 0.331487 19.5883 0.673474 20.5185C1.00178 21.435 1.78151 22.1464 2.79379 22.4883C5.44761 23.3912 8.23823 23.8289 11.0288 23.8289C13.8195 23.8289 16.6101 23.3912 19.2639 22.502C20.2215 22.1874 20.9602 21.4624 21.3158 20.5185C21.6715 19.5746 21.5757 18.535 21.0422 17.6595ZM14.8728 25.2105C14.5851 26.0069 14.0592 26.6954 13.3666 27.1824C12.674 27.6694 11.8482 27.9314 11.0015 27.9327C9.92081 27.9327 8.85381 27.495 8.10143 26.7153C7.66369 26.3049 7.33538 25.7577 7.14387 25.1969C7.3217 25.2242 7.49954 25.2379 7.69105 25.2653C8.00568 25.3063 8.33399 25.3473 8.66229 25.3747C9.44202 25.4431 10.2354 25.4841 11.0288 25.4841C11.8086 25.4841 12.5883 25.4431 13.3544 25.3747C13.6416 25.3473 13.9289 25.3337 14.2025 25.2926L14.8728 25.2105Z" fill="#336EBD"/>
                    </svg>
             </div>
             {/*seaction 2 */}
             <div className="border-2 mt-4 h-20 px-8 justify-between items-center flex rounded-2xl border-r-white border-l-white">
                <div className="flex items-center gap-x-2">
                    <img src="/img/fard.png" alt="" />
                    <h2 className="text-base font-normal">نام و نام خانوادگی</h2>
                </div>
                <div>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 12C13.8261 12 15.0979 11.4732 16.0355 10.5355C16.9732 9.59785 17.5 8.32608 17.5 7C17.5 5.67392 16.9732 4.40215 16.0355 3.46447C15.0979 2.52678 13.8261 2 12.5 2C11.1739 2 9.90215 2.52678 8.96447 3.46447C8.02678 4.40215 7.5 5.67392 7.5 7C7.5 8.32608 8.02678 9.59785 8.96447 10.5355C9.90215 11.4732 11.1739 12 12.5 12Z" stroke="#676767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.71 15.74L16.17 19.28C16.03 19.42 15.9 19.68 15.87 19.87L15.68 21.22C15.61 21.71 15.95 22.05 16.44 21.98L17.79 21.79C17.98 21.76 18.25 21.63 18.38 21.49L21.92 17.95C22.53 17.34 22.82 16.63 21.92 15.73C21.03 14.84 20.32 15.13 19.71 15.74Z" stroke="#676767" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.2 16.25C19.5 17.33 20.34 18.17 21.42 18.47" stroke="#676767" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.90997 22C3.90997 18.13 7.75997 15 12.5 15C13.54 15 14.54 15.15 15.47 15.43" stroke="#676767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
             </div>
             {/*seaction 3 */}
             <div className="flex px-8 text-center justify-between mt-8">
                <div>
                    <img src="/img/nar.png" alt="" className="pb-10"/>
                    <p className="text-sm font-normal text-center text-gray-500">۰  سفارش</p>
                    <span className="text-sm font-bold text-red-400 text-center">جاری</span>
                </div>

                <div className="">
                    <img src="/img/lis.png" alt="" className="pb-7"/>
                    <p className="text-sm font-normal text-center text-gray-500">۰ سفارش </p>
                    <span className="text-sm font-bold text-green-400 text-center ">تحویل داده شده</span>
                </div>

                <div className="">
                    <img src="/img/mok.png" alt="" className="pb-8"/>
                    <p className="text-sm font-normal text-center text-gray-500">۰  سفارش</p>
                    <span className="text-sm font-bold text-blue-400 text-center ">مرجوع شده</span>
                </div>
             </div>
             {/*seaction 4 */}
             <div className="mt-20 px-8">
                
                <div className="flex gap-x-1 justify-between items-center border-b-2 border-x-gray-800 pb-7 ">
                    <div className="flex gap-x-1 items-center">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.89999 6.5H16.1C19.5 6.5 19.84 8.09 20.07 10.03L20.97 17.53C21.26 19.99 20.5 22 17 22H8.00999C4.49999 22 3.73999 19.99 4.03999 17.53L4.93999 10.03C5.15999 8.09 5.49999 6.5 8.89999 6.5Z" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.5 8V4.5C8.5 3 9.5 2 11 2H14C15.5 2 16.5 3 16.5 4.5V8M20.91 17.03H8.5" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>کیف پول</p>
                    </div>
                    <span>۰ تومان</span>
                </div>

                <div className="flex gap-x-1 items-center mt-7 border-b-2 border-x-gray-800 pb-7">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.31 2L5.69 5.63M15.69 2L19.31 5.63" stroke="#414141" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.5 7.8501C2.5 6.0001 3.49 5.8501 4.72 5.8501H20.28C21.51 5.8501 22.5 6.0001 22.5 7.8501C22.5 10.0001 21.51 9.8501 20.28 9.8501H4.72C3.49 9.8501 2.5 10.0001 2.5 7.8501Z" stroke="#414141" stroke-width="1.5"/>
                        <path d="M10.26 14V17.55M14.86 14V17.55M4 10L5.41 18.64C5.73 20.58 6.5 22 9.36 22H15.39C18.5 22 18.96 20.64 19.32 18.76L21 10" stroke="#414141" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <p>سفارش ها</p>
                </div>

                <div className="flex gap-x-1 items-center mt-7 border-b-2 border-x-gray-800 pb-7">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.97 9.00006H2.97V17.0001C2.97 20.0001 3.97 21.0001 6.97 21.0001H14.97C17.97 21.0001 18.97 20.0001 18.97 17.0001V9.00006ZM20.5 6.00006V7.00006C20.5 8.10006 19.97 9.00006 18.5 9.00006H3.5C1.97 9.00006 1.5 8.10006 1.5 7.00006V6.00006C1.5 4.90006 1.97 4.00006 3.5 4.00006H18.5C19.97 4.00006 20.5 4.90006 20.5 6.00006ZM10.64 4.00006H5.12C4.95557 3.82172 4.8668 3.58651 4.8724 3.344C4.87799 3.10149 4.97752 2.87063 5.15 2.70006L6.57 1.28006C6.74972 1.10235 6.99226 1.00269 7.245 1.00269C7.49774 1.00269 7.74028 1.10235 7.92 1.28006L10.64 4.00006ZM16.87 4.00006H11.35L14.07 1.28006C14.2497 1.10235 14.4923 1.00269 14.745 1.00269C14.9977 1.00269 15.2403 1.10235 15.42 1.28006L16.84 2.70006C17.2 3.06006 17.21 3.63006 16.87 4.00006Z" stroke="#414141" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>کارت های هدیه</p>
                </div>

                <div className="flex gap-x-1 items-center mt-7 border-b-2 border-x-gray-800 pb-7">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V13M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 2H15" stroke="#414141" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>بازدید های اخیر</p>
                </div>

                <div className="flex gap-x-1 items-center mt-7 border-b-2 border-x-gray-800 pb-7">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.41 18.09L15.59 20.91M18.41 20.91L15.59 18.09M12 21.81C10.18 21.81 8.36999 21.35 6.98999 20.43C4.56999 18.81 4.56999 16.17 6.98999 14.56C9.73999 12.72 14.25 12.72 17 14.56M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C10.6822 10.831 9.59463 10.3468 8.79762 9.51995C8.0006 8.69307 7.55673 7.58844 7.55999 6.43999C7.55999 3.98999 9.53999 1.99999 12 1.99999C12.5824 1.98948 13.1612 2.0938 13.7033 2.30697C14.2454 2.52014 14.7402 2.838 15.1594 3.2424C15.5787 3.6468 15.9142 4.12982 16.1468 4.66388C16.3794 5.19794 16.5045 5.77258 16.515 6.35499C16.5255 6.9374 16.4212 7.51618 16.208 8.05828C15.9948 8.60038 15.677 9.09518 15.2726 9.51444C14.8682 9.9337 14.3852 10.2692 13.8511 10.5018C13.317 10.7344 12.7424 10.8595 12.16 10.87Z" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>حذف پروفایل</p>
                </div>

                <div className="flex  gap-x-2 items-center justify-center mt-7 border-b-2 border-x-gray-800 pb-3 mb-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.44 11.62L17 9.06L14.44 6.5M6.76001 9.06H16.93M8.76001 17C4.34001 17 0.76001 14 0.76001 9C0.76001 4 4.34001 1 8.76001 1" stroke="#FF4943" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-red-600 font-bold">خروج از حساب کاربری</p>
                </div>
             </div>
        </seaction>
        </>
    )
}
export default UserPanelMobile;