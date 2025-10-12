import Film2Media from "../../../Assets/Svg/Film2Media";
import InstagramSvg from "../../../Assets/Svg/Instagram";
import Telegram from "../../../Assets/Svg/Telegram";
import FooterItem from "./FooterItem";

export default function Footer() {
    const FooterItemDetails = [
        {
            svg: <Telegram />,
            message: 'کانال تلگرام',
            style: 'cursor-pointer sm:w-1/2 xl:w-1/4 shadow-[0_0_6px_#62BCE9] hover:shadow-[0_0_2px_gray] duration-300 flex space-x-3 my-3 bg-gradient-to-l to-[#93D4F5] from-[#62BCE9] py-3 rounded',
            textStyle : 'text-white font-bold'
        },
        {
            svg: <InstagramSvg />,
            message: 'کانال اینستاگرام',
            style: 'cursor-pointer sm:w-1/2 xl:w-1/4 shadow-[0_0_6px_#FA6E7B] hover:shadow-[0_0_2px_gray] duration-300 flex space-x-3 my-3 bg-gradient-to-l to-[#FA9C6F] from-[#FA6E7B] py-3 rounded',
            textStyle : 'text-white font-bold'
        },
    ]
    return (
        <>
            <footer className="w-[85%] mx-auto">
                <div className="border-t border-b border-[#484848]">
                    {FooterItemDetails.map((item, index) => <FooterItem key={index} textStyle={item.textStyle} svg={item.svg} style={item.style} message={item.message} />)}
                </div>
                <FooterItem svg={<Film2Media />} textStyle={'text-[#979797] text-sm'} message={'کلیه حقوق مادی و معنوی این وبسایت متعلق به فیلم 2 مدیا میباشد.'} style={'flex my-5 space-x-3 items-center'}/>
            </footer>
        </>
    )
}
