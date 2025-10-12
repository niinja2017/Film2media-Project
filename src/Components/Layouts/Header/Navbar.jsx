import HomeSvg from "../../../Assets/Svg/Home";
import StarSvg from "../../../Assets/Svg/Star";
import SquaresSvg from "../../../Assets/Svg/Squares";
import UsersSvg from "../../../Assets/Svg/Users";
import BellSvg from "../../../Assets/Svg/Bell";
import SearchSvg from "../../../Assets/Svg/Search";

import { useEffect , useState } from "react";
import UseSearchValue from "../../../Hooks/useSearchValue";

import NavbarItem from "./NavbarItem";

export default function Navbar() {


    const ListItemDetails = [
        {
            ListText: 'صفحه اصلی',
            LinkAddres: 'https://www.f2mede.ir/',
            Svg: < HomeSvg />
        },
        {
            ListText: 'دسته بندی ها',
            LinkAddres: 'https://www.f2mede.ir/#',
            Svg: <SquaresSvg />
        },
        {
            ListText: 'بازیگران',
            LinkAddres: 'https://www.f2mede.ir/persons',
            Svg: <UsersSvg />,
        },
        {
            ListText: 'خرید اشتراک',
            LinkAddres: 'https://www.f2mede.ir/profile/subscription?new_subscription',
            Svg: <StarSvg />
        }
    ]

    const [search, setSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const searchValue = UseSearchValue(searchTerm, 1000)

    const clickHandler = () => {
        setSearch(!search)
    }

    useEffect(() => {
        return () => console.log('this is new Value')
    }, [searchValue])



    return (
        <div className="flex justify-between z-50">
            <div className="flex items-center space-x-10">
                <a href="https://www.f2mede.ir/"><svg className="cursor-pointer" width="149" height="29" fill="currentColor" viewBox="0 0 149 29"><path className="text-white" d="M106 6.8h-4.4a4.2 4.2 0 0 0-4.1 4.2v1.2c0 2.4 1.9 4.4 4.3 4.4h3.3c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.4-1.3-1.4h-3.3c-1 0-1.7-.7-1.7-1.6V11c0-.9.7-1.5 1.5-1.5h4.5c1.2 0 2.2 1 2.2 2.3v6.9c0 1-.7 1.7-1.7 1.7h-5.1c-.6 0-1.2-.2-1.8-.7-.6-.3-1.4-1.3-2.2-2.2-1-1.1-2-2.3-3.3-3.5-.9-.8-2.1-1-3.2-.5a3 3 0 0 0-1.8 2.8V20c0 .2 0 .2-.2.3h-.3L83 14.5l-.4-.3V8.1c0-.7-.7-1.3-1.4-1.3s-1.3.6-1.3 1.3v12l-.2.3h-.4l-6-4.9v-4.4c0-1.7-1-3.2-2.5-4a4.2 4.2 0 0 0-4.6.8l-12 13c-.5.5-.4 1.4.1 1.9a1.3 1.3 0 0 0 1.9-.1L68 9.8c.5-.3 1.1-.4 1.7-.2.5.3.9.8.9 1.5V20c0 .2-.2.3-.3.3 0 .1-.2.1-.4 0l-4.7-3.4c-.6-.5-1.5-.3-1.9.3-.4.6-.3 1.4.3 1.9l4.7 3.4a3 3 0 0 0 3.2.3 3 3 0 0 0 1.7-2.8v-1l4.4 3.5a3 3 0 0 0 3.3.3 3 3 0 0 0 1.7-2.8v-2l4.2 4.3a3 3 0 0 0 3.3.6A3 3 0 0 0 92 20v-3.8c0-.2 0-.2.2-.3h.3l3 3.3 2.7 2.7c1.1.7 2.2 1.1 3.4 1.1h5.1c2.4 0 4.4-2 4.4-4.4v-7a5 5 0 0 0-5-5ZM101.3 5.8c.8 0 1.4-.6 1.4-1.3V1.4c0-.8-.6-1.4-1.4-1.4-.7 0-1.3.6-1.3 1.4v3c0 .8.6 1.4 1.3 1.4ZM91.3 25h-5.6c-.7 0-1.3.6-1.3 1.3 0 .8.6 1.4 1.3 1.4h5.6c.8 0 1.4-.6 1.4-1.4 0-.7-.6-1.3-1.4-1.3ZM35.4 9.6c-1.5-.6-3-.2-4.1 1l-4 4.5c-.5.6-.4 1.5.2 2 .5.5 1.4.4 1.8-.2l4-4.5a1 1 0 0 1 1.1-.3c.2 0 .7.3.7 1v5.7c0 .9-.7 1.6-1.6 1.6H28c-.4 0-.8-.2-1-.5l-3.2-3.6v-5.5c0-.8-.6-1.4-1.3-1.4-.7 0-1.3.6-1.3 1.4v8.7c0 .5-.4.9-.9.9h-3.6c-.8 0-1.4.6-1.4 1.4 0 .7.6 1.3 1.4 1.3h3.6c1.7 0 3.1-1.2 3.5-2.8l1.1 1.4a4.2 4.2 0 0 0 3.2 1.4h5.4c2.4 0 4.3-2 4.3-4.3V13c0-1.6-1-3-2.4-3.5ZM10 25H4.4c-.7 0-1.3.6-1.3 1.3 0 .8.6 1.4 1.3 1.4H10c.8 0 1.4-.6 1.4-1.4 0-.7-.6-1.3-1.4-1.3ZM13.1 9.4c-.7 0-1.3.6-1.3 1.4v8.7c0 .5-.4.9-.9.9H3.5a.8.8 0 0 1-.8-.8V8.1c0-.7-.6-1.3-1.4-1.3C.6 6.8 0 7.4 0 8v11.5c0 2 1.6 3.5 3.5 3.5h7.4c2 0 3.6-1.6 3.6-3.6v-8.7c0-.8-.6-1.4-1.4-1.4Z"></path><path className="text-white" d="M137.1 29h-8.3c-3 0-5.6-1.9-6.5-4.8-1-3 0-6 2.5-7.8l8.2-6h-9.8c-.8 0-1.4-.6-1.4-1.5 0-.8.6-1.4 1.4-1.4h14.2c.7 0 1.2.4 1.4 1 .2.6 0 1.3-.5 1.6l-11.8 8.7a4 4 0 0 0-1.5 4.5 3.9 3.9 0 0 0 3.8 2.8h8.3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.5-1.4 1.5Z"></path><path className="text-[#96F207]" d="M51.4 23.1H41c-.6 0-1-.4-1.3-1-.1-.5 0-1.1.5-1.4l8.7-6.4c1.1-.8 1.2-2 1-3-.3-.8-1.1-1.8-2.5-1.8h-6.1c-.8 0-1.4-.6-1.4-1.3 0-.8.6-1.4 1.4-1.4h6c2.4 0 4.4 1.5 5.1 3.7.7 2.3 0 4.6-2 6l-5.2 3.9h6.2c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.3-1.4 1.3ZM147.6 22.4h-14.3c-.6 0-1.1-.4-1.3-1-.2-.6 0-1.3.5-1.6l11.8-8.7a4 4 0 0 0 1.5-4.5 3.9 3.9 0 0 0-3.8-2.8h-8.3c-.8 0-1.5-.6-1.5-1.4 0-.9.7-1.5 1.5-1.5h8.3c3 0 5.6 1.9 6.5 4.8 1 3 0 6-2.5 7.8l-8.2 6h9.8c.8 0 1.4.6 1.4 1.4 0 .9-.6 1.5-1.4 1.5Z"></path></svg></a>
                <ul className="items-center space-x-10 xl:flex hidden">
                    {ListItemDetails.map((item, index) => <NavbarItem key={index} ListText={item.ListText} LinkAddres={item.LinkAddres} Style={item.Style} Svg={item.Svg} />)}
                </ul>
            </div>
            <div className="flex items-center space-x-2">
                <div className="bg-[#484848] p-3 rounded-lg cursor-pointer">
                    <BellSvg />
                </div>
                <div className="bg-[#484848] rounded-lg  relative">
                    <div className="p-3 cursor-pointer" onClick={clickHandler} >
                        <SearchSvg />
                    </div>

                    <div className={`absolute top-[100%] mt-3 left-0 bg-[#0D0D0D] p-2 rounded-xl
                                transition-all duration-500
                                ${search ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
                            `}>
                        <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type="text" placeholder="جستجو براساس نام،بازیگر و..."
                            className="2xl:w-90 transition-shadow  focus:shadow focus:shadow-[#96f207] outline-0  border border-[#484848] focus:border-[#96f207] py-2 pr-4  pl-26 rounded-xl bg-[#1D1C21] text-[#9f9f9f]"
                        />
                    </div>
                </div>
                <a href="https://www.f2mede.ir/profile/" className="bg-[#96F207] p-3 xl:px-6 rounded-lg transition shadow hover:shadow-[#96F207]">
                    <p className="text-[#1d1c21] font-medium">ورود/ثبت‌نام</p>
                </a>
            </div>
        </div>
    )
}
