import React from "react";
import Slider from "./Slider";

const Services = () => {
    return(
        <>
        <div className="flex flex-row gap-x-2 w-[86%] lg:w-full  mx-auto  mt-5 h-[61px]">
            <div className="lg:bg-blue-700 rounded-r-lg rounded-l-lg lg:rounded-l-3xl w-full bg-blue-700 lg:w-[1740px] ">
                <div className="flex gap-x-10 lg:gap-x-4 text-sm xl:text-base items-center mt-5 justify-center lg:justify-start lg:mr-24 xl:mr-32">
                    <a href="" className="lg:flex  flex items-center justify-center gap-x-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4.1665 8.33342H5.83317C7.49984 8.33342 8.33317 7.50008 8.33317 5.83341V4.16675C8.33317 2.50008 7.49984 1.66675 5.83317 1.66675H4.1665C2.49984 1.66675 1.6665 2.50008 1.6665 4.16675V5.83341C1.6665 7.50008 2.49984 8.33342 4.1665 8.33342ZM14.1665 8.33342H15.8332C17.4998 8.33342 18.3332 7.50008 18.3332 5.83341V4.16675C18.3332 2.50008 17.4998 1.66675 15.8332 1.66675H14.1665C12.4998 1.66675 11.6665 2.50008 11.6665 4.16675V5.83341C11.6665 7.50008 12.4998 8.33342 14.1665 8.33342ZM14.1665 18.3334H15.8332C17.4998 18.3334 18.3332 17.5001 18.3332 15.8334V14.1667C18.3332 12.5001 17.4998 11.6667 15.8332 11.6667H14.1665C12.4998 11.6667 11.6665 12.5001 11.6665 14.1667V15.8334C11.6665 17.5001 12.4998 18.3334 14.1665 18.3334ZM4.1665 18.3334H5.83317C7.49984 18.3334 8.33317 17.5001 8.33317 15.8334V14.1667C8.33317 12.5001 7.49984 11.6667 5.83317 11.6667H4.1665C2.49984 11.6667 1.6665 12.5001 1.6665 14.1667V15.8334C1.6665 17.5001 2.49984 18.3334 4.1665 18.3334Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                       <p className="text-white">دسته بندی کالاها</p>
                    </a>
                    <a href="" className="lg:flex  flex items-center justify-center gap-x-1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.49992 12.5L12.4999 7.5M3.32409 12.2167L2.05742 10.95C1.54076 10.4333 1.54076 9.58333 2.05742 9.06667L3.32409 7.8C3.54076 7.58333 3.71576 7.15833 3.71576 6.85833V5.06667C3.71576 4.33333 4.31576 3.73333 5.04909 3.73333H6.84075C7.14076 3.73333 7.56576 3.55833 7.78242 3.34167L9.04909 2.075C9.56576 1.55833 10.4158 1.55833 10.9324 2.075L12.1991 3.34167C12.4158 3.55833 12.8408 3.73333 13.1408 3.73333H14.9324C15.6658 3.73333 16.2658 4.33333 16.2658 5.06667V6.85833C16.2658 7.15833 16.4408 7.58333 16.6574 7.8L17.9241 9.06667C18.4408 9.58333 18.4408 10.4333 17.9241 10.95L16.6574 12.2167C16.4408 12.4333 16.2658 12.8583 16.2658 13.1583V14.95C16.2658 15.6833 15.6658 16.2833 14.9324 16.2833H13.1408C12.8408 16.2833 12.4158 16.4583 12.1991 16.675L10.9324 17.9417C10.4158 18.4583 9.56576 18.4583 9.04909 17.9417L7.78242 16.675C7.56576 16.4583 7.14076 16.2833 6.84075 16.2833H5.04909C4.31576 16.2833 3.71576 15.6833 3.71576 14.95V13.1583C3.71576 12.85 3.54076 12.425 3.32409 12.2167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>  
                     <p className="text-white">شگفت انگیز ها</p>
                    </a>
                    <a href="" className="md:flex hidden gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_2546_1474)">
                        <path d="M7.08353 11.8751C7.08353 13.4751 8.4002 14.7917 10.0002 14.7917C11.6002 14.7917 12.9169 13.4751 12.9169 11.8751M7.34186 1.66675L4.3252 4.69175M12.6585 1.66675L15.6752 4.69175" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.6665 6.54167C1.6665 5 2.4915 4.875 3.5165 4.875H16.4832C17.5082 4.875 18.3332 5 18.3332 6.54167C18.3332 8.33333 17.5082 8.20833 16.4832 8.20833H3.5165C2.4915 8.20833 1.6665 8.33333 1.6665 6.54167Z" stroke="white" stroke-width="1.5"/>
                        <path d="M2.9165 8.33325L4.0915 15.5333C4.35817 17.1499 4.99984 18.3333 7.38317 18.3333H12.4082C14.9998 18.3333 15.3832 17.1999 15.6832 15.6333L17.0832 8.33325" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2546_1474">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p className="text-white">پرفروش ترین ها</p>
                    </a> 
                    <a href="" className="lg:flex hidden gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_2546_1976)">
                        <path d="M7.34186 1.66675L4.3252 4.69175M12.6585 1.66675L15.6752 4.69175" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.6665 6.54167C1.6665 5 2.4915 4.875 3.5165 4.875H16.4832C17.5082 4.875 18.3332 5 18.3332 6.54167C18.3332 8.33333 17.5082 8.20833 16.4832 8.20833H3.5165C2.4915 8.20833 1.6665 8.33333 1.6665 6.54167Z" stroke="white" stroke-width="1.5"/>
                        <path d="M8.13317 11.6666V14.6249M11.9665 11.6666V14.6249M2.9165 8.33325L4.0915 15.5333C4.35817 17.1499 4.99984 18.3333 7.38317 18.3333H12.4082C14.9998 18.3333 15.3832 17.1999 15.6832 15.6333L17.0832 8.33325" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2546_1976">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p className="text-white">جدید ترین ها</p>
                    </a>
                    <a href="" className="lg:flex hidden gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                        <path d="M5.24986 6.39155V5.58322C5.24986 3.70822 6.75819 1.86655 8.63319 1.69155C9.15417 1.64037 9.68009 1.69883 10.1771 1.86317C10.6741 2.02751 11.1312 2.29409 11.519 2.64576C11.9068 2.99742 12.2166 3.42638 12.4286 3.90503C12.6406 4.38367 12.75 4.9014 12.7499 5.42489V6.57489M6.49986 18.3332H11.4999C14.8499 18.3332 15.4499 16.9916 15.6249 15.3582L16.2499 10.3582C16.4749 8.32489 15.8915 6.66655 12.3332 6.66655H5.66652C2.10819 6.66655 1.52486 8.32489 1.74986 10.3582L2.37486 15.3582C2.54986 16.9916 3.14986 18.3332 6.49986 18.3332Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-white">تخفیف ها و پیشنهاد ها</p>
                    </a>
                </div>
            </div>
            <div className=" lg:basis-80 lg:ml-3 lg:flex hidden  items-center justify-center text-xs lg:text-base font-semibold">در RpKala فروشنده شوید!</div>
            <div className="bg-blue-700 lg:basis-32 rounded-r-3xl"></div>
        </div>
        <Slider />
        </>
    )
}
export default Services;
 