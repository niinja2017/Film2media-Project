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

import caught from "./../../../Assets/Image/slider/05-3.jpg";
import wallKingDead from "./../../../Assets/Image/slider/1the-walking-dead-daryl-dixon-seaso.jpg";
import alien from "./../../../Assets/Image/slider/25g7mthXoJFcNZhAKz0evk17Bsx.webp";
import alice from "./../../../Assets/Image/slider/2gFbvyd3gy1tXOBWgQQnYRnkI2B.jpg";
import peacemarker from "./../../../Assets/Image/slider/G5Je3Q5OqsPtYoWFe8EhDvJ21F-scaled.jpg";
import fantastic from "./../../../Assets/Image/slider/hBvaanw3RfMEs1m1blY7xwRXzul.jpg";
import tulsaKing from "./../../../Assets/Image/slider/mNHRGO1gFpR2CYZdANe72kcKq7G.jpg";
import marvelZombie from "./../../../Assets/Image/slider/ou1bLjE6ecN1sKA64aCYMKQQPqR.jpg";
import genV from "./../../../Assets/Image/slider/ScaVfT5IkwVC3Edhmxqyl0GbK0.jpg";
import darkWolf from "./../../../Assets/Image/slider/yQw23xxmVBFVHPCF6V68TAIIfno.jpg";

// thumb image
import caughtthumb from "./../../../Assets/Image/thumb/04-8-180x280.jpg";
import wallKingDeadthumb from "./../../../Assets/Image/thumb/sP5QdW9FN18XWcA4ROz3MPAQBTx2-180x280.jpg";
import alienthumb from "./../../../Assets/Image/thumb/22UuIMbiLoLFwgUKQLGfVaGdeaR-180x280.jpg";
import alicethumb from "./../../../Assets/Image/thumb/20mOwAAPwZ1vLQkw0fvuQHiG7bO-180x280.jpg";
import peacemarkerthumb from "./../../../Assets/Image/thumb/6UdyzOhmZUX186NEIFGm1Qhpnwq-180x280.jpg";
import fantasticthumb from "./../../../Assets/Image/thumb/l8277LMyj9AkugkbmPRVO4B07yh-180x280.jpg";
import tulsaKingthumb from "./../../../Assets/Image/thumb/zcYttxSeeZHQJiXdqyqc5QvydZr-180x280.jpg";
import marvelZombiethumb from "./../../../Assets/Image/thumb/wofiHMsXxmp0lTafcBrgciSxBVx-180x280.jpg";
import genVthumb from "./../../../Assets/Image/thumb/tEv842Nd5uMSavURG4aQO1pNtst-180x280.jpg";
import darkWolfthumb from "./../../../Assets/Image/thumb/9mYeRoWguq5etbwJRdF8BXFKiF-180x280.jpg";


export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const sliderImages = [
        alice,
        tulsaKing,
        caught,
        marvelZombie,
        wallKingDead,
        peacemarker,
        genV,
        alien,
        darkWolf,
        fantastic,
    ];
    const thumbImage = [
        alicethumb,
        tulsaKingthumb,
        caughtthumb,
        marvelZombiethumb,
        wallKingDeadthumb,
        peacemarkerthumb,
        genVthumb,
        alienthumb,
        darkWolfthumb,
        fantasticthumb,

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
