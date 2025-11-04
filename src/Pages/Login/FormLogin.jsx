import { useState } from "react"
import InputFormLogin from "./InputFormLogin"
import { Form, Formik } from "formik"

export default function FormLogin({ changePageHandler }) {

    const [active, setActive] = useState('login')

    const loginSubmitHandler = async (values) => {
        let res = await fetch('https://68c7e9885d8d9f5147338df4.mockapi.io/Login', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(values)
        })
        res = await res.json()
        console.log(values)
        console.log(res)
    }
    const signupSubmitHandler = async (values) => {
        let res = await fetch('https://68c7e9885d8d9f5147338df4.mockapi.io/SignUp', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(values)
        })
        res = await res.json()
        console.log(res)
        console.log(values)
    }
    const validateSignUP = (values) => {
        const errors = {}

        // userName
        if (!values.userName || !values.userName.trim()) {
            errors.userName = 'نام کاربری الزامی است'
        } else if (values.userName.length < 2) {
            errors.userName = 'نام کاربری باید حداقل 2 کاراکتر باشد'
        }

        // Email (ریجکس عمومی و ایمن برای ایمیل)
        if (!values.Email || !values.Email.trim()) {
            errors.Email = 'ایمیل الزامی است'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(values.Email)) {
                errors.Email = 'ایمیل معتبر نیست (مثال: example@gmail.com)'
            }
        }

        // Phone (فرمت ایران: 11 رقم و با 09 شروع)
        if (!values.Phone || !values.Phone.trim()) {
            errors.Phone = 'شماره تلفن الزامی است'
        } else if (!/^09\d{9}$/.test(values.Phone)) {
            errors.Phone = 'شماره تلفن باید معتبر و ۱۱ رقم باشد'
        }

        // Password
        if (!values.Password || !values.Password.trim()) {
            errors.Password = 'رمز عبور الزامی است'
        } else if (values.Password.length < 8) {
            errors.Password = 'رمز عبور باید حداقل ۸ کاراکتر باشد'
        }

        // Password2
        if (!values.Password2 || !values.Password2.trim()) {
            errors.Password2 = 'تکرار رمز عبور الزامی است'
        } else if (values.Password2 !== values.Password) {
            errors.Password2 = 'تکرار رمز عبور با رمز عبور مطابقت ندارد'
        }

        // SecurityCode
        if (!values.SecurityCode || !values.SecurityCode.trim()) {
            errors.SecurityCode = 'کد امنیتی الزامی است'
        }

        return errors
    }


    const validateLogin = (values) => {
        let errors = {}
        if (!values.userName.trim()) {
            errors.userName = 'لطفا فیلد نام کاربری را وارد کنید'
        } else if (values.userName.length < 2) {
            errors.userName = 'نام کاربری باید حداقل 2 کاراکتر باشد'
        }

        if (!values.Password.trim()) {
            errors.Password = 'لطفا پسورد خود را وارد کنید'
        } else if (values.Password.length < 7) {
            errors.Password = 'پسور باید بیشتر از 7 کاراکتر داشته باشد'
        }

        if (!values.SecurityCode.trim()) {
            errors.SecurityCode = 'لطفا کد امنیتی را وارد کنید'
        }

        return errors
    }
    return (
        <div className="flex flex-col space-y-5 items-center justify-center h-screen w-full bg-[#0D0D0D]">
            <div className="flex flex-col bg-[#1D1C21] w-[95%] sm:w-[80%] lg:w-[45%] xl:w-[35%] 2xl:w-[30%]  p-14 rounded-2xl space-y-5">
                <div className="flex justify-center">
                    <a href="https://www.f2mede.ir/"><svg className="cursor-pointer" width="149" height="29" fill="currentColor" viewBox="0 0 149 29"><path className="text-white" d="M106 6.8h-4.4a4.2 4.2 0 0 0-4.1 4.2v1.2c0 2.4 1.9 4.4 4.3 4.4h3.3c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.4-1.3-1.4h-3.3c-1 0-1.7-.7-1.7-1.6V11c0-.9.7-1.5 1.5-1.5h4.5c1.2 0 2.2 1 2.2 2.3v6.9c0 1-.7 1.7-1.7 1.7h-5.1c-.6 0-1.2-.2-1.8-.7-.6-.3-1.4-1.3-2.2-2.2-1-1.1-2-2.3-3.3-3.5-.9-.8-2.1-1-3.2-.5a3 3 0 0 0-1.8 2.8V20c0 .2 0 .2-.2.3h-.3L83 14.5l-.4-.3V8.1c0-.7-.7-1.3-1.4-1.3s-1.3.6-1.3 1.3v12l-.2.3h-.4l-6-4.9v-4.4c0-1.7-1-3.2-2.5-4a4.2 4.2 0 0 0-4.6.8l-12 13c-.5.5-.4 1.4.1 1.9a1.3 1.3 0 0 0 1.9-.1L68 9.8c.5-.3 1.1-.4 1.7-.2.5.3.9.8.9 1.5V20c0 .2-.2.3-.3.3 0 .1-.2.1-.4 0l-4.7-3.4c-.6-.5-1.5-.3-1.9.3-.4.6-.3 1.4.3 1.9l4.7 3.4a3 3 0 0 0 3.2.3 3 3 0 0 0 1.7-2.8v-1l4.4 3.5a3 3 0 0 0 3.3.3 3 3 0 0 0 1.7-2.8v-2l4.2 4.3a3 3 0 0 0 3.3.6A3 3 0 0 0 92 20v-3.8c0-.2 0-.2.2-.3h.3l3 3.3 2.7 2.7c1.1.7 2.2 1.1 3.4 1.1h5.1c2.4 0 4.4-2 4.4-4.4v-7a5 5 0 0 0-5-5ZM101.3 5.8c.8 0 1.4-.6 1.4-1.3V1.4c0-.8-.6-1.4-1.4-1.4-.7 0-1.3.6-1.3 1.4v3c0 .8.6 1.4 1.3 1.4ZM91.3 25h-5.6c-.7 0-1.3.6-1.3 1.3 0 .8.6 1.4 1.3 1.4h5.6c.8 0 1.4-.6 1.4-1.4 0-.7-.6-1.3-1.4-1.3ZM35.4 9.6c-1.5-.6-3-.2-4.1 1l-4 4.5c-.5.6-.4 1.5.2 2 .5.5 1.4.4 1.8-.2l4-4.5a1 1 0 0 1 1.1-.3c.2 0 .7.3.7 1v5.7c0 .9-.7 1.6-1.6 1.6H28c-.4 0-.8-.2-1-.5l-3.2-3.6v-5.5c0-.8-.6-1.4-1.3-1.4-.7 0-1.3.6-1.3 1.4v8.7c0 .5-.4.9-.9.9h-3.6c-.8 0-1.4.6-1.4 1.4 0 .7.6 1.3 1.4 1.3h3.6c1.7 0 3.1-1.2 3.5-2.8l1.1 1.4a4.2 4.2 0 0 0 3.2 1.4h5.4c2.4 0 4.3-2 4.3-4.3V13c0-1.6-1-3-2.4-3.5ZM10 25H4.4c-.7 0-1.3.6-1.3 1.3 0 .8.6 1.4 1.3 1.4H10c.8 0 1.4-.6 1.4-1.4 0-.7-.6-1.3-1.4-1.3ZM13.1 9.4c-.7 0-1.3.6-1.3 1.4v8.7c0 .5-.4.9-.9.9H3.5a.8.8 0 0 1-.8-.8V8.1c0-.7-.6-1.3-1.4-1.3C.6 6.8 0 7.4 0 8v11.5c0 2 1.6 3.5 3.5 3.5h7.4c2 0 3.6-1.6 3.6-3.6v-8.7c0-.8-.6-1.4-1.4-1.4Z"></path><path className="text-white" d="M137.1 29h-8.3c-3 0-5.6-1.9-6.5-4.8-1-3 0-6 2.5-7.8l8.2-6h-9.8c-.8 0-1.4-.6-1.4-1.5 0-.8.6-1.4 1.4-1.4h14.2c.7 0 1.2.4 1.4 1 .2.6 0 1.3-.5 1.6l-11.8 8.7a4 4 0 0 0-1.5 4.5 3.9 3.9 0 0 0 3.8 2.8h8.3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.5-1.4 1.5Z"></path><path className="text-[#96F207]" d="M51.4 23.1H41c-.6 0-1-.4-1.3-1-.1-.5 0-1.1.5-1.4l8.7-6.4c1.1-.8 1.2-2 1-3-.3-.8-1.1-1.8-2.5-1.8h-6.1c-.8 0-1.4-.6-1.4-1.3 0-.8.6-1.4 1.4-1.4h6c2.4 0 4.4 1.5 5.1 3.7.7 2.3 0 4.6-2 6l-5.2 3.9h6.2c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.3-1.4 1.3ZM147.6 22.4h-14.3c-.6 0-1.1-.4-1.3-1-.2-.6 0-1.3.5-1.6l11.8-8.7a4 4 0 0 0 1.5-4.5 3.9 3.9 0 0 0-3.8-2.8h-8.3c-.8 0-1.5-.6-1.5-1.4 0-.9.7-1.5 1.5-1.5h8.3c3 0 5.6 1.9 6.5 4.8 1 3 0 6-2.5 7.8l-8.2 6h9.8c.8 0 1.4.6 1.4 1.4 0 .9-.6 1.5-1.4 1.5Z"></path></svg></a>
                </div>
                <div className="bg-[#0D0D0D] rounded-3xl mt-6">
                    <button onClick={() => setActive('login')} className={`font-bold rounded-3xl cursor-pointer p-3 w-[50%] ${active === 'login' ? `text-[#1d1c21] bg-[#96F207] shadow hover:shadow-[#96F207] transition` : `text-white bg-[#0D0D0D]`}`}>ورود</button>
                    <button onClick={() => setActive('signup')} className={`font-bold rounded-3xl cursor-pointer p-3 w-[50%] ${active === 'signup' ? `text-[#1d1c21] bg-[#96F207] shadow hover:shadow-[#96F207] transition` : `text-white bg-[#0D0D0D]`}`}>عضویت</button>
                </div>
                {active === 'login'
                    ?
                    <Formik
                        initialValues={{
                            userName: '',
                            Password: '',
                            SecurityCode: '',
                        }}
                        validate={validateLogin}
                        onSubmit={loginSubmitHandler}
                    >
                        <Form className="space-y-5">
                            <InputFormLogin name='userName' InputType='text' TitleLabel='نام کاربری' styleWidth='w-full' />
                            <InputFormLogin name='Password' InputType='password' TitleLabel='رمز عبور' styleWidth='w-full' />
                            <div className="flex space-x-3">
                                <InputFormLogin name='SecurityCode' InputType='text' TitleLabel='کد امنیتی' styleWidth='w-[70%]' />
                                <button className="w-[30%] cursor-pointer">
                                    <img src="https://www.f2mede.ir/captcha.php?w=150&amp;h=50" alt="کپچا" width="150" height="50" className="w-full h-full rounded-xl" />
                                </button>
                            </div>
                            <button type="submit" className="cursor-pointer w-full text-[#1d1c21] bg-[#96F207] px-3 py-5 hover:shadow hover:shadow-[#96F207] font-bold rounded-xl">ورود به حساب</button>
                            <div className="flex justify-center">
                                <a href="" className="text-[#979797]">رمز عبورم را فراموش کرده‌ام</a>
                            </div>
                        </Form>
                    </Formik>
                    :
                    <Formik
                        initialValues={{
                            userName: '',
                            Phone: '',
                            Email: '',
                            Password: '',
                            Password2: '',
                            SecurityCode: '',
                        }}
                        validate={validateSignUP}
                        onSubmit={signupSubmitHandler}
                    >
                        <Form className="space-y-5">
                            <InputFormLogin name='userName' InputType='text' TitleLabel='نام کاربری' styleWidth='w-full' />
                            <InputFormLogin name='Phone' InputType='text' TitleLabel='تلفن همراه' styleWidth='w-full' />
                            <InputFormLogin name='Email' InputType='email' TitleLabel='ایمیل شما' styleWidth='w-full' />
                            <div className="flex space-x-3">
                                <InputFormLogin name='Password' InputType='password' TitleLabel='رمز عبور' styleWidth='w-[50%]' />
                                <InputFormLogin name='Password2' InputType='password' TitleLabel='تکرار رمز عبور' styleWidth='w-[50%]' />
                            </div>
                            <div className="flex space-x-3">
                                <InputFormLogin name='SecurityCode' InputType='text' TitleLabel='کد امنیتی' styleWidth='w-[70%]' />
                                <button className="w-[30%] cursor-pointer">
                                    <img src="https://www.f2mede.ir/captcha.php?w=150&amp;h=50" alt="کپچا" width="150" height="50" className="w-full h-full rounded-xl" />
                                </button>
                            </div>
                            <button type="submit" className="cursor-pointer w-full text-[#1d1c21] bg-[#96F207] px-3 py-5 hover:shadow hover:shadow-[#96F207] font-bold rounded-xl">ثبت نام و ورود</button>
                        </Form>
                    </Formik>
                }


            </div>
            <div className="text-white">
                <a href="#" onClick={changePageHandler}>بازگشت به صفحه اصلی</a>
            </div>
        </div>
    )
}
