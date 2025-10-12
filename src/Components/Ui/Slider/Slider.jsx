import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const sliderImages = [
        "https://www.f2mede.ir/wp-content/uploads/2025/09/2gFbvyd3gy1tXOBWgQQnYRnkI2B.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2024/11/mNHRGO1gFpR2CYZdANe72kcKq7G.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/05-3.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/ou1bLjE6ecN1sKA64aCYMKQQPqR.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/1the-walking-dead-daryl-dixon-seaso.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2022/02/G5Je3Q5OqsPtYoWFe8EhDvJ21F-scaled.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/ScaVfT5IkwVC3Edhmxqyl0GbK0.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/08/25g7mthXoJFcNZhAKz0evk17Bsx.webp",
        "https://www.f2mede.ir/wp-content/uploads/2025/08/yQw23xxmVBFVHPCF6V68TAIIfno.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/hBvaanw3RfMEs1m1blY7xwRXzul.jpg"
    ];
    const thumbImage = [
        "https://www.f2mede.ir/wp-content/uploads/2022/12/20mOwAAPwZ1vLQkw0fvuQHiG7bO-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2024/11/zcYttxSeeZHQJiXdqyqc5QvydZr-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/04-8-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/wofiHMsXxmp0lTafcBrgciSxBVx-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2024/11/sP5QdW9FN18XWcA4ROz3MPAQBTx2-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2022/02/6UdyzOhmZUX186NEIFGm1Qhpnwq-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2023/11/tEv842Nd5uMSavURG4aQO1pNtst-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/22UuIMbiLoLFwgUKQLGfVaGdeaR-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/08/9mYeRoWguq5etbwJRdF8BXFKiF-180x280.jpg",
        "https://www.f2mede.ir/wp-content/uploads/2025/09/l8277LMyj9AkugkbmPRVO4B07yh-180x280.jpg"
    ]

    return (
        <header className='relative h-[800px]'>
            {/* اسلایدر اصلی */}
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={false}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2 h-[800px]"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {sliderImages.map((src, index) => (
                    <SwiperSlide className="overflow-hidden" key={index}>
                        <img
                            className='w-full cursor-pointer h-full sm:scale-100 scale-110 object-cover'
                            src={src}
                            alt={`slide-${index}`}
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/*  اسلایدر سینک با اصلی */}
            <div className='absolute bottom-0 left-0 w-3/4 sm:w-11/12 xl:w-1/2 px-5 ml-10'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={false}
                    spaceBetween={10}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    dir="rtl"
                    breakpoints={{
                        0: { slidesPerView: 1.3 },
                        400: { slidesPerView: 2.3 },
                        760: { slidesPerView: 3.3 },
                        1024: { slidesPerView: 4.3 },
                    }}
                >
                    {thumbImage.map((src, index) => (
                        <SwiperSlide className="overflow-hidden rounded-2xl" key={index}>
                            <img
                                className='rounded-2xl cursor-pointer'
                                src={src}
                                alt={`thumb-${index}`}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1D1C21]/80 via-[#1D1C21]/40 to-transparent z-20"></div>
        </header>
    );
}
