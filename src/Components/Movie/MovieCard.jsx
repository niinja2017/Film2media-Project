import ButtonCardMore from "../Ui/ButtonCardMore";

import { Swiper } from "swiper/react";
// import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";



export default function MovieCard({ title, children }) {

    return (
        <>
            <section className="w-[85%] mx-auto mt-[3.5rem] mb-[7.5rem] relative select-none">
                <div>
                    <div className="flex justify-between">
                        <h3 className="text-white font-bold text-2xl">{title}</h3>
                        <ButtonCardMore />
                    </div>


                    <Swiper
                        // modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={8}
                        navigation
                        dir="rtl"
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                            1280: { slidesPerView: 8 },
                        }}
                    >
                        {children}
                    </Swiper>
                </div>
            </section >
        </>
    )
}
