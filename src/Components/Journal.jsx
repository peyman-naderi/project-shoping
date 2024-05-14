import React from "react"

const Journal = () => {
    return(
        <>
        <div className="w-[83%] rounded-2xl border  pb-8 px-4 border-solid border-blue-100 gap-x-8 hidden lg:block mt-32 mx-auto  items-center ">
            <div>
                <h3 className="relative right-12 -top-24 font-extrabold text-2xl leading-[38px]">مجلـــــــه<br />
آرپی کالا  </h3>
          <img src="/img/abi.png" alt="" className="relative  -top-28 right-2" />
            </div>

            <div className="flex gap-x-8">    
            <div className="w-[33%]">
                <img src="/img/rp1.png" alt="" className="mb-4"/>
                <h6 className="font-bold text-center text-lg leading-[31px]">
                رد مجیک 8S پرو، آیفون و گلکسی را <br /> به خاک‌و‌خون می‌کشد
                </h6>
                <p className="mt-7 text-gray-500 text-base font-medium leading-[26px] text-center">
                رد مجیک 8S پرو که هفته‌ی آینده رونمایی می‌شود، باتری ۶٬۰۰۰ میلی‌آمپرساعتی،‌ تراشه‌ی پرچمدار و ۲۴ گیگابایت رم خواهد داشت.
                </p>
            </div>

            <div className="w-[33%]">
                <img src="/img/rp2.png" alt="" />
                <h6 className="font-bold mt-3 text-center  text-lg leading-[31px]">
                این‌ بار هوش مصنوعی، تصاویری از کارخانه تولید عروس دریایی را افشا می‌کند!
                </h6>
                <p className="mt-7 text-gray-500 text-base font-medium leading-[26px] text-center">
                اکنون هوش مصنوعی توانایی تصاویرسازی مخفی‌ترین تجارت‌های دنیا را دارد. تصاویر این شاتر واقعاً شبیه به تصاویر لورفته کارخانه تولید عروس دریایی هستند.
                </p>
            </div>

            <div className="w-[33%]">
                <img src="/img/rp3.png" alt="" />
                <h6 className="font-bold mt-3 text-center  text-lg leading-[31px]">
                هدفون ریزر Moray، با کیفیت صدای استثنائی برای گیمرها و استریمرها معرفی شد
                </h6>
                <p className="mt-7 text-gray-500 text-base font-medium leading-[26px] text-center">
                ریزر هدفون جدیدی به‌نام Moray معرفی کرده که از طراحی موسوم‌به In-ear Monitor بهره می‌برد و به‌طور خاص استریمرها و گیمرها را هدف قرار داده است.
                </p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Journal;