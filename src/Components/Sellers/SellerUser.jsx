


const SellerUser = () => {
    return (
        <div>

            <div className="flex justify-center mt-8"> 
                <img src="/img/111.png" alt="" />
            </div>

            <div className="flex mt-14 justify-center items-center gap-x-4">
                <img src="/img/33.png" alt="" />
                <span className="w-44 h-1 bg-purple-300 rounded-full"></span>

                <img src="/img/22.png" alt="" />
                <span className="w-44 h-1 bg-purple-300 rounded-full"></span>

                <img src="/img/11.png" alt="" />
            </div>


            <h1 className="flex mt-14 justify-center text-lg font-bold">لطفا اطلاعات کسب و کارتان را وارد کنید</h1>


            <div className="w-[85%] mx-auto mt-16">
                <div>
                    <button className="w-40 h-16 bg-blue-400 rounded-xl ml-4 text-white text-lg font-semibold">شخص حقوقی</button>
                    <button className="w-40 h-16 rounded-xl text-lg font-semibold border-blue-400 border">شخص حقیقی</button>
                </div>

                <div className="mt-10 flex gap-x-24">
                    <div className="w-[30%]">
                        <h2 className="text-lg font-semibold">کد ملی</h2>
                        <input type="text" className="w-[100%] border-blue-400 border h-14 rounded-xl pr-6 text-lg font-bold"/>
                    </div>
                    
                    <div  className="w-[30%]"> 
                        <h2 className="text-lg font-semibold">شماره   کارت</h2>
                        <input type="text" className="w-[100%] border-blue-400 border h-14 rounded-xl pr-6 text-lg font-bold"/>
                    </div>
                </div>

                <div className="mt-10 flex gap-x-24">
                    <div  className="w-[30%]"> 
                        <h2 className="text-lg font-semibold">نام فروشگاه</h2>
                        <input type="text" className="w-[100%] border-blue-400 border h-14 rounded-xl pr-6 text-lg font-bold"/>
                    </div>
                </div>

                <div className="flex mt-8 justify-end pb-8">
                    <button className="w-[30%] h-16 bg-blue-400 rounded-xl ml-4 text-white text-lg font-semibold">تایید</button>
                </div>

            </div>
        </div>
    )
}

export default SellerUser;