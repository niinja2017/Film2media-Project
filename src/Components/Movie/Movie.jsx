// images
import war2 from "./../../Assets/Image/tHUEGjexjpTDO3ggla9JQ6CojxU-180x280.webp";
import Astronaut from "./../../Assets/Image/souvvkJHYhztC1UqZ8lEVUiJa3J-180x280.webp";
import Adulthood from "./../../Assets/Image/a40Gi0Zq4Ecqu3obmOp6TSgEne1-180x280.webp";
import UnderNinja from "./../../Assets/Image/48zyIwzJ6rBjsvBNzUl9wkWQ9dS-180x280.webp";
import StolenGirl from "./../../Assets/Image/fZlNXEHZsBp7unqw009MeBbMv87-180x280.webp";
import Steve from "./../../Assets/Image/wmLoMyofbseLfxiGgk1Iz5H97c3-180x280.webp";
import FreakierFriday from "./../../Assets/Image/0111-180x280.jpg";
import Rewrite from "./../../Assets/Image/022-180x280.jpg";
import Wait from "./../../Assets/Image/uPcqiq0SQwsWYoRSbGDgtSN1gxD-180x280.webp";
import LondonCalling from "./../../Assets/Image/cpQ4VxBJO7vGV3IUdKzSNf4tH9V-180x280.webp";

import MovieCardItem from "./../../Components/Movie/MovieCardItem";
import MovieCard from "../../Components/Movie/MovieCard";

import { SwiperSlide } from "swiper/react";


export default function Movie() {

    const movieCardDetails = [
        {
            src: war2,
            alt: war2,
            title: 'War 2',
            movieDate: 2025,
            movieScore: '5.8/10',
            genre1: 'اکشن',
            genre2: 'ماجراجویی',
            genre3: 'هیجان انگیز',
        },
        {
            src: Astronaut,
            alt: 'The Astronaut',
            title: 'The Astronaut',
            updateMovie: 'زیرنویس فارسی آپدیت شد',
            movieDate: 2025,
            movieScore: '5.9/10',
            genre1: 'ترسناک',
            genre2: 'علمی تخیلی',
            genre3: 'هیجان انگیز',
        },
        {

            src: Adulthood,
            alt: 'Adulthood',
            title: 'Adulthood',
            updateMovie: 'دوبله فارسی آپدیت شد',
            movieDate: 2025,
            movieScore: '5.5/10',
            genre1: 'جنایی',
            genre2: 'درام',
            genre3: 'کمدی',

        },
        {
            src: UnderNinja,
            alt: 'Under Ninja',
            title: 'Under Ninja',
            updateMovie: 'دوبله فارسی اضافه شد',
            movieDate: 2025,
            movieScore: '6.6/10',
            genre1: 'اکشن',
            genre3: 'کمدی',
        },
        {
            src: StolenGirl,
            alt: 'Stolen Girl',
            title: 'Stolen Girl',
            updateMovie: 'دوبله فارسی آپدیت شد',
            movieDate: 2025,
            genre1: 'اکشن',
            genre3: 'کمدی',
        },
        {
            src: Steve,
            alt: 'Steve',
            title: 'Steve',
            updateMovie: 'دوبله فارسی آپدیت شد',
            movieDate: 2025,
            movieScore: '6.9/10',
            genre1: 'درام',
            genre3: 'کمدی',
        },
        {
            src: FreakierFriday,
            alt: 'Freakier Friday',
            title: 'Freakier Friday',
            updateMovie: 'دوبله فارسی اضافه شد',
            movieDate: 2025,
            movieScore: '6.8/10',
            genre1: 'خانوادگی',
            genre2: 'فانتزی',
            genre3: 'کمدی',
        },
        {
            src: Rewrite,
            alt: 'Rewrite',
            title: 'Rewrite',
            movieDate: 2025,
            genre1: 'درام',
        },
        {
            src: Wait,
            alt: 'The Wait',
            title: 'The Wait',
            updateMovie: 'دوبله فارسی اضافه شد',
            movieDate: 2023,
            movieScore: '6.1/10',
            genre1: 'ترسناک',
            genre2: 'درام',
            genre3: 'فانتزی',
        },
        {
            src: LondonCalling,
            alt: 'London Calling',
            title: 'London Calling',
            movieDate: 2025,
            genre1: 'اکشن',
            genre2: 'درام',
            genre3: 'کمدی',
        }
    ]

    return (
        <>
            <MovieCard title={'فیلم‌های به روز شده'}>
                {movieCardDetails.map((item, index) => <SwiperSlide>
                    <MovieCardItem
                        key={index}
                        src={item?.src}
                        alt={item?.alt}
                        title={item?.title}
                        updateMovie={item?.updateMovie}
                        movieDate={item?.movieDate}
                        movieScore={item?.movieScore}
                        genre1={item?.genre1}
                        genre2={item?.genre2}
                        genre3={item?.genre3}
                    />
                </SwiperSlide>)}
            </MovieCard>
            <MovieCard title={'سریال های بروز شده'}>

                <SwiperSlide>
                    <MovieCardItem
                        src={war2}
                        alt={'war 2'}
                        title={'War 2'}
                        movieDate={2025}
                        movieScore={'5.8/10'}
                        genre1={'اکشن'}
                        genre2={'ماجراجویی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Astronaut}
                        alt={'The Astronaut'}
                        title={'The Astronaut'}
                        updateMovie={'زیرنویس فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.9/10'}
                        genre1={'ترسناک'}
                        genre2={'علمی تخیلی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Adulthood}
                        alt={'Adulthood'}
                        title={'Adulthood'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.5/10'}
                        genre1={'جنایی'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={UnderNinja}
                        alt={'Under Ninja'}
                        title={'Under Ninja'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.6/10'}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={StolenGirl}
                        alt={'Stolen Girl'}
                        title={'Stolen Girl'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Steve}
                        alt={'Steve'}
                        title={'Steve'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'6.9/10'}
                        genre1={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={FreakierFriday}
                        alt={'Freakier Friday'}
                        title={'Freakier Friday'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.8/10'}
                        genre1={'خانوادگی'}
                        genre2={'فانتزی'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Rewrite}
                        alt={'Rewrite'}
                        title={'Rewrite'}
                        movieDate={2025}
                        genre1={'درام'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Wait}
                        alt={'The Wait'}
                        title={'The Wait'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2023}
                        movieScore={'6.1/10'}
                        genre1={'ترسناک'}
                        genre2={'درام'}
                        genre3={'فانتزی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={LondonCalling}
                        alt={'London Calling'}
                        title={'London Calling'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>

            </MovieCard>
            <MovieCard title={'سریال‌های ترکی'}>

                <SwiperSlide>
                    <MovieCardItem
                        src={war2}
                        alt={'war 2'}
                        title={'War 2'}
                        movieDate={2025}
                        movieScore={'5.8/10'}
                        genre1={'اکشن'}
                        genre2={'ماجراجویی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Astronaut}
                        alt={'The Astronaut'}
                        title={'The Astronaut'}
                        updateMovie={'زیرنویس فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.9/10'}
                        genre1={'ترسناک'}
                        genre2={'علمی تخیلی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Adulthood}
                        alt={'Adulthood'}
                        title={'Adulthood'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.5/10'}
                        genre1={'جنایی'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={UnderNinja}
                        alt={'Under Ninja'}
                        title={'Under Ninja'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.6/10'}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={StolenGirl}
                        alt={'Stolen Girl'}
                        title={'Stolen Girl'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Steve}
                        alt={'Steve'}
                        title={'Steve'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'6.9/10'}
                        genre1={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={FreakierFriday}
                        alt={'Freakier Friday'}
                        title={'Freakier Friday'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.8/10'}
                        genre1={'خانوادگی'}
                        genre2={'فانتزی'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Rewrite}
                        alt={'Rewrite'}
                        title={'Rewrite'}
                        movieDate={2025}
                        genre1={'درام'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Wait}
                        alt={'The Wait'}
                        title={'The Wait'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2023}
                        movieScore={'6.1/10'}
                        genre1={'ترسناک'}
                        genre2={'درام'}
                        genre3={'فانتزی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={LondonCalling}
                        alt={'London Calling'}
                        title={'London Calling'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>

            </MovieCard>
            <MovieCard title={'انیمه'}>

                <SwiperSlide>
                    <MovieCardItem
                        src={war2}
                        alt={'war 2'}
                        title={'War 2'}
                        movieDate={2025}
                        movieScore={'5.8/10'}
                        genre1={'اکشن'}
                        genre2={'ماجراجویی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Astronaut}
                        alt={'The Astronaut'}
                        title={'The Astronaut'}
                        updateMovie={'زیرنویس فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.9/10'}
                        genre1={'ترسناک'}
                        genre2={'علمی تخیلی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Adulthood}
                        alt={'Adulthood'}
                        title={'Adulthood'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.5/10'}
                        genre1={'جنایی'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={UnderNinja}
                        alt={'Under Ninja'}
                        title={'Under Ninja'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.6/10'}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={StolenGirl}
                        alt={'Stolen Girl'}
                        title={'Stolen Girl'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Steve}
                        alt={'Steve'}
                        title={'Steve'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'6.9/10'}
                        genre1={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={FreakierFriday}
                        alt={'Freakier Friday'}
                        title={'Freakier Friday'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.8/10'}
                        genre1={'خانوادگی'}
                        genre2={'فانتزی'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Rewrite}
                        alt={'Rewrite'}
                        title={'Rewrite'}
                        movieDate={2025}
                        genre1={'درام'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Wait}
                        alt={'The Wait'}
                        title={'The Wait'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2023}
                        movieScore={'6.1/10'}
                        genre1={'ترسناک'}
                        genre2={'درام'}
                        genre3={'فانتزی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={LondonCalling}
                        alt={'London Calling'}
                        title={'London Calling'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>

            </MovieCard>
            <MovieCard title={'فیلم های دوبله'}>

                <SwiperSlide>
                    <MovieCardItem
                        src={war2}
                        alt={'war 2'}
                        title={'War 2'}
                        movieDate={2025}
                        movieScore={'5.8/10'}
                        genre1={'اکشن'}
                        genre2={'ماجراجویی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Astronaut}
                        alt={'The Astronaut'}
                        title={'The Astronaut'}
                        updateMovie={'زیرنویس فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.9/10'}
                        genre1={'ترسناک'}
                        genre2={'علمی تخیلی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Adulthood}
                        alt={'Adulthood'}
                        title={'Adulthood'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.5/10'}
                        genre1={'جنایی'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={UnderNinja}
                        alt={'Under Ninja'}
                        title={'Under Ninja'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.6/10'}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={StolenGirl}
                        alt={'Stolen Girl'}
                        title={'Stolen Girl'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Steve}
                        alt={'Steve'}
                        title={'Steve'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'6.9/10'}
                        genre1={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={FreakierFriday}
                        alt={'Freakier Friday'}
                        title={'Freakier Friday'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.8/10'}
                        genre1={'خانوادگی'}
                        genre2={'فانتزی'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Rewrite}
                        alt={'Rewrite'}
                        title={'Rewrite'}
                        movieDate={2025}
                        genre1={'درام'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Wait}
                        alt={'The Wait'}
                        title={'The Wait'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2023}
                        movieScore={'6.1/10'}
                        genre1={'ترسناک'}
                        genre2={'درام'}
                        genre3={'فانتزی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={LondonCalling}
                        alt={'London Calling'}
                        title={'London Calling'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>

            </MovieCard>
            <MovieCard title={'به زودی'}>

                <SwiperSlide>
                    <MovieCardItem
                        src={war2}
                        alt={'war 2'}
                        title={'War 2'}
                        movieDate={2025}
                        movieScore={'5.8/10'}
                        genre1={'اکشن'}
                        genre2={'ماجراجویی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Astronaut}
                        alt={'The Astronaut'}
                        title={'The Astronaut'}
                        updateMovie={'زیرنویس فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.9/10'}
                        genre1={'ترسناک'}
                        genre2={'علمی تخیلی'}
                        genre3={'هیجان انگیز'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Adulthood}
                        alt={'Adulthood'}
                        title={'Adulthood'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'5.5/10'}
                        genre1={'جنایی'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={UnderNinja}
                        alt={'Under Ninja'}
                        title={'Under Ninja'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.6/10'}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={StolenGirl}
                        alt={'Stolen Girl'}
                        title={'Stolen Girl'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Steve}
                        alt={'Steve'}
                        title={'Steve'}
                        updateMovie={'دوبله فارسی آپدیت شد'}
                        movieDate={2025}
                        movieScore={'6.9/10'}
                        genre1={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={FreakierFriday}
                        alt={'Freakier Friday'}
                        title={'Freakier Friday'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2025}
                        movieScore={'6.8/10'}
                        genre1={'خانوادگی'}
                        genre2={'فانتزی'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Rewrite}
                        alt={'Rewrite'}
                        title={'Rewrite'}
                        movieDate={2025}
                        genre1={'درام'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={Wait}
                        alt={'The Wait'}
                        title={'The Wait'}
                        updateMovie={'دوبله فارسی اضافه شد'}
                        movieDate={2023}
                        movieScore={'6.1/10'}
                        genre1={'ترسناک'}
                        genre2={'درام'}
                        genre3={'فانتزی'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCardItem
                        src={LondonCalling}
                        alt={'London Calling'}
                        title={'London Calling'}
                        movieDate={2025}
                        genre1={'اکشن'}
                        genre2={'درام'}
                        genre3={'کمدی'}
                    />
                </SwiperSlide>

            </MovieCard>
        </>
    )
}
