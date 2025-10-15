import HomeSvg from "../../../Assets/Svg/Home";
import StarSvg from "../../../Assets/Svg/Star";
import SquaresSvg from "../../../Assets/Svg/Squares";
import UsersSvg from "../../../Assets/Svg/Users";
import BellSvg from "../../../Assets/Svg/Bell";
import SearchSvg from "../../../Assets/Svg/Search";

import { useEffect , useState } from "react";
import UseSearchValue from "../../../Hooks/useSearchValue";

import NavbarItem from "./NavbarItem";
import Logo from "../../../Assets/Svg/Logo";

export default function Navbar({changePageHandler}) {


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
                <a href="https://www.f2mede.ir/"><Logo/></a>
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
                <a href="#" onClick={changePageHandler} className="bg-[#96F207] p-3 xl:px-6 rounded-lg transition shadow hover:shadow-[#96F207]">
                    <p className="text-[#1d1c21] font-medium">ورود/ثبت‌نام</p>
                </a>
            </div>
        </div>
    )
}
