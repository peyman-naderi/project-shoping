const LoginForm = () => {
    return (
        <>
        <div className="w-full h-[773px] opacity-80 pt-28 bg-gradient-to-r from-sky-500 to-indigo-500">
        <svg class="animate-bounce w-7 h-7 mx-auto text-indigo-800 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
        </svg>
            <div className="w-[90%] md:w-[50%] md:h-[70%] lg:w-[40%] h-[70%] m-auto shadow-lg  shadow-indigo-800/90  bg-white/85">
                <div className=" pt-10">
                    <img src="/img/Login.png" alt="" className="w-24 mx-auto h-24" />
                </div>
                <div className="mr-14 xl:mr-36 pt-10">
                    <h2 className="font-bold text-xl">ورود | ثبت نام</h2>
                    <p className="mt-4">سلام!</p>
                    <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                    <input type="text" className="xl:w-[331px] xl:h-[51px] mt-8  bg-gray-300 text-lg font-bold pr-4 rounded-md border border-blue-900 border-solid" />
                    <button className="xl:w-[331px] w-[228px] h-[45%] xl:h-[51px] mt-8 bg-blue-600 text-lg font-bold rounded-md">ثبت</button>
                </div> 

            </div>
        </div>
        </>
    )
}

export default LoginForm;