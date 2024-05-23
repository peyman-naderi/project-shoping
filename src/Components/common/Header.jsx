import Services from "../Home/Services";
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return(
      <>

<div className='w-full h-2 bg-blue-700'>
    
    </div>
    
        <div className="flex justify-between items-center lg:gap-x- w-[82%] h-42  mx-auto mt-5">
            {/* search input */}
            <div className="flex items-center justify-center gap-x-5">
              <div className="flex lg:none gap-x-5 md:gap-x-10 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex  lg:hidden w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            <img src="/img/logo.png" alt="logo-web" className=" lg:w-32 w-28 h-24 lg:h-28"/>
              </div>
                <div>
                    <form className="hidden lg:flex lg:gap-x-3 justify-center items-center  lg:w-[300px] 2xl:w-[505px] h-11 rounded-b-2xl border-2 border-white border-b-blue-700">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /> 
                        </svg>
                       <input type="text" name="" id="" placeholder="جستجو در کالا ها" className="w-[505px] h-11 flex justify-center items-center   font-normal text-base text-gray-400  border-2 border-white border-b-blue-700" />
                    </form>
                </div>
            </div>
            {/* user in mobile*/}
            <Link to="/Login">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 flex lg:hidden">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </Link>
            <div className="lg:flex hidden gap-x-10">
               {/* UserName */}
      
               <div className="flex items-center justify-center gap-x-2">
               <Link to="/Login" className="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <div>
                    <div className="flex items-center justify-center gap-x-1">
                <h2 className="font-semibold text-base leading-7">سلام ! سعید کریمی</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                    </div>
                    <div className="ml-6 font-bold text-xs leading-5 text-gray-400 top-6">
                      <span className="top-6 text-blue-500">کد تخفیف </span>
                      <span className="top-6 ">برای اولین خرید</span>
                    </div>
                </div> 

               
                </Link>
               </div>
               {/* basket */}
               <a className="flex items-center justify-center gap-x-2">
               <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.50635 2.06079L3.67502 2.04876C5.02109 2.0413 6.08693 3.19455 5.98215 4.52878L5.01651 16.9484C4.97879 17.4295 5.04141 17.9132 5.20043 18.3689C5.35944 18.8246 5.61136 19.2423 5.94024 19.5955C6.26912 19.9487 6.66778 20.2298 7.11097 20.4209C7.55415 20.6119 8.0322 20.7089 8.51481 20.7056L21.7886 20.632C23.5833 20.622 25.1456 19.1426 25.2728 17.3595L25.894 8.00801C26.0321 5.93821 24.4524 4.26432 22.3709 4.27587L6.28038 4.3651M10.2724 9.49062L25.2287 9.40768M19.4053 26.8897C19.8185 26.8874 20.2138 26.721 20.5044 26.4272C20.7949 26.1334 20.9569 25.7363 20.9546 25.3231C20.9523 24.9099 20.786 24.5145 20.4922 24.224C20.1984 23.9334 19.8012 23.7715 19.388 23.7737C18.9748 23.776 18.5794 23.9424 18.2889 24.2362C17.9983 24.53 17.8364 24.9271 17.8387 25.3403C17.841 25.7535 18.0073 26.1489 18.3011 26.4395C18.5949 26.73 18.9921 26.892 19.4053 26.8897ZM9.43436 26.945C9.84755 26.9427 10.2429 26.7763 10.5335 26.4825C10.824 26.1887 10.986 25.7916 10.9837 25.3784C10.9814 24.9652 10.815 24.5698 10.5212 24.2792C10.2275 23.9887 9.83027 23.8267 9.41708 23.829C9.00388 23.8313 8.60852 23.9977 8.31797 24.2915C8.02741 24.5853 7.86547 24.9824 7.86776 25.3956C7.87005 25.8088 8.03639 26.2042 8.33018 26.4948C8.62398 26.7853 9.02116 26.9473 9.43436 26.945Z" stroke="#414141" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg> 
                <div>
                <div className="flex items-center justify-center gap-x-1">      
                <h2 className="font-semibold text-base leading-7">سبد خرید شما</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
                <span className="ml-10 font-bold text-xs leading-5 text-gray-400 top-6">سبد خالی است</span>
                </div>
               </a>
            </div>
        </div>

        <Services/>
        </>
      )
} 
export default Header;