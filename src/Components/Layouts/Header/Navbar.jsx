import HomeSvg from "../../../Assets/Svg/Home";
import StarSvg from "../../../Assets/Svg/Star";
import SquaresSvg from "../../../Assets/Svg/Squares";
import UsersSvg from "../../../Assets/Svg/Users";
import BellSvg from "../../../Assets/Svg/Bell";
import SearchSvg from "../../../Assets/Svg/Search";
import Logo from "../../../Assets/Svg/Logo";

import { useEffect, useState, useRef } from "react";
import UseSearchValue from "../../../Hooks/useSearchValue";
import NavbarItem from "./NavbarItem";

export default function Navbar({ changePageHandler }) {
    // داده‌ی داینامیکِ دسته‌بندی‌ها
    const categories = [
        {
            title: "بخش ها",
            subItems: ["فیلم ها", "سریال ها", "250 فیلم برتر", "باکس آفیس"],
        },
        {
            title: "ژانر فیلم",
            subItems: ["اکشن", "درام", "کمدی", "علمی-تخیلی"],
        },
        {
            title: "ژانر سریال",
            subItems: ["درام", "کمدی", "جنایی", "فانتزی"],
        },
    ];

    // لیست آیتم‌های navbar
    const ListItemDetails = [
        { ListText: "صفحه اصلی", LinkAddres: "https://www.f2mede.ir/", Svg: <HomeSvg /> },
        {
            ListText: "دسته بندی ها",
            LinkAddres: "https://www.f2mede.ir/#",
            Svg: <SquaresSvg />,
            style: "relative",
        },
        { ListText: "بازیگران", LinkAddres: "https://www.f2mede.ir/persons", Svg: <UsersSvg /> },
        {
            ListText: "خرید اشتراک",
            LinkAddres: "https://www.f2mede.ir/profile/subscription?new_subscription",
            Svg: <StarSvg />,
        },
    ];

    // search states
    const [search, setSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const searchValue = UseSearchValue(searchTerm, 1000);

    // states برای dropdown دسته‌بندی‌ها
    const [catOpen, setCatOpen] = useState(false);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    // ref برای نگهداری timeout
    const closeTimeoutRef = useRef(null);

    const clickHandler = () => setSearch((s) => !s);

    useEffect(() => {
        return () => console.log('send value');
    }, [searchValue]);


    // تابعی برای پاک کردن تایمر بسته شدن
    const clearCloseTimeout = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    // هنگام خروج، منو رو بعد از یک تأخیر کوتاه می بنده
    const scheduleClose = (delay = 250) => {
        clearCloseTimeout();
        closeTimeoutRef.current = setTimeout(() => {
            setCatOpen(false);
            closeTimeoutRef.current = null;
        }, delay);
    };

    // تمیزکاری اگر کامپوننت آن‌مونت شد
    useEffect(() => {
        return () => clearCloseTimeout();
    }, []);

    return (
        <div className="flex justify-between z-50">
            <div className="flex items-center space-x-10">
                <a href="https://www.f2mede.ir/">
                    <Logo />
                </a>

                <ul className="items-center space-x-10 xl:flex hidden">
                    {ListItemDetails.map((item, index) => {
                        //آیتم دسته بندی ها‌
                        if (item.ListText === "دسته بندی ها") {
                            return (
                                <li
                                    key={index}
                                    className={`relative ${item.style ?? ""}`}
                                    // وقتی موس وارد کل ناحیه شد: تایمر رو پاک و منو باز می شه
                                    onMouseEnter={() => {
                                        clearCloseTimeout();
                                        setCatOpen(true);
                                    }}
                                    // وقتی موس خارج شد بعد تاخیر منو بسته می شه
                                    onMouseLeave={() => scheduleClose(300)}
                                >
                                    {/* خود لینک / دکمه */}
                                    <button
                                        onClick={() => setCatOpen((v) => !v)}
                                        className="flex items-center gap-2 px-3 py-2  rounded hover:text-[#96f207] text-white cursor-pointer"
                                        aria-haspopup="true"
                                        aria-expanded={catOpen}
                                    >
                                        {item.Svg}
                                        <span className="font-medium">{item.ListText}</span>
                                    </button>

                                    {/* منوی دسته‌بندی */}
                                    <div
                                        onMouseEnter={() => clearCloseTimeout()}
                                        onMouseLeave={() => scheduleClose(300)}
                                        className={`absolute right-0 top-[100%] mt-3 z-50 w-[800px] 2xl:w-[1000px] rounded p-5 bg-black/50
                      transition-all duration-300 origin-top
                      ${catOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}
                    `}
                                    >
                                        <div className="flex gap-6">
                                            {/* ستون تایتل‌ها (سمت چپ) */}
                                            <ul className="w-1/5 space-y-3">
                                                {categories.map((item, index) => (
                                                    <li key={index}>
                                                        <button
                                                            onClick={() => setActiveCategoryIndex(index)}
                                                            className={`w-full cursor-pointer text-center py-2 rounded font-semibold block transition-colors duration-200
                                ${activeCategoryIndex === index ? "bg-[#96f207] text-[#0d0d0d]" : "bg-[#121d01] text-[#96f207] hover:bg-[#96f207] hover:text-[#121d01]"}
                              `}
                                                        >
                                                            {item.title}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* ستون ساب‌آیتم‌ها (باقی فضا) */}
                                            <div className="flex-1">
                                                <ul className="flex flex-wrap space-y-3">
                                                    {categories[activeCategoryIndex].subItems.length > 0 ? (
                                                        categories[activeCategoryIndex].subItems.map((subItemValue, index) => (
                                                            <li key={index} className="w-1/4">
                                                                <a
                                                                    href="#"
                                                                    className="block text-white px-3 py-2 rounded hover:text-[#96f207] border-r"
                                                                >
                                                                    {subItemValue}
                                                                </a>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="text-gray-300">موردی برای نمایش وجود ندارد.</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        }

                        return (
                            <NavbarItem
                                key={index}
                                style={item.style}
                                Element={item.Element}
                                ListText={item.ListText}
                                LinkAddres={item.LinkAddres}
                                Style={item.Style}
                                Svg={item.Svg}
                            />
                        );
                    })}
                </ul>
            </div>

            <div className="flex items-center space-x-2">
                <div className="bg-[#484848] p-3 rounded-lg cursor-pointer">
                    <BellSvg />
                </div>
                <div className="bg-[#484848] rounded-lg  relative">
                    <div className="p-3 cursor-pointer" onClick={clickHandler}>
                        <SearchSvg />
                    </div>

                    <div
                        className={`absolute top-[100%] mt-3 left-0 bg-[#0D0D0D] p-2 rounded-xl
                                transition-all duration-500
                                ${search ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
                            `}
                    >
                        <input
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            type="text"
                            placeholder="جستجو براساس نام،بازیگر و..."
                            className="2xl:w-90 transition-shadow  focus:shadow focus:shadow-[#96f207] outline-0  border border-[#484848] focus:border-[#96f207] py-2 pr-4  pl-26 rounded-xl bg-[#1D1C21] text-[#9f9f9f]"
                        />
                    </div>
                </div>
                <a
                    href="#"
                    onClick={changePageHandler}
                    className="bg-[#96F207] p-3 xl:px-6 rounded-lg transition shadow hover:shadow-[#96F207]"
                >
                    <p className="text-[#1d1c21] font-medium">ورود/ثبت‌نام</p>
                </a>
            </div>
        </div>
    );
}
