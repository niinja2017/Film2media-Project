import { SwiperSlide } from "swiper/react";
import MovieCardItem from "../../Components/Movie/MovieCardItem";
import MovieCard from "../../Components/Movie/MovieCard";

import war2 from "./../../Assets/Image/content/tHUEGjexjpTDO3ggla9JQ6CojxU-180x280.webp";
import Astronaut from "./../../Assets/Image/content/souvvkJHYhztC1UqZ8lEVUiJa3J-180x280.webp";
import Adulthood from "./../../Assets/Image/content/a40Gi0Zq4Ecqu3obmOp6TSgEne1-180x280.webp";
import UnderNinja from "./../../Assets/Image/content/48zyIwzJ6rBjsvBNzUl9wkWQ9dS-180x280.webp";
import StolenGirl from "./../../Assets/Image/content/fZlNXEHZsBp7unqw009MeBbMv87-180x280.webp";
import Steve from "./../../Assets/Image/content/wmLoMyofbseLfxiGgk1Iz5H97c3-180x280.webp";
import FreakierFriday from "./../../Assets/Image/content/0111-180x280.jpg";
import Rewrite from "./../../Assets/Image/content/022-180x280.jpg";
import Wait from "./../../Assets/Image/content/uPcqiq0SQwsWYoRSbGDgtSN1gxD-180x280.webp";
import LondonCalling from "./../../Assets/Image/content/cpQ4VxBJO7vGV3IUdKzSNf4tH9V-180x280.webp";

export default function Movie() {
  const movieCardDetails = [
    { src: war2, title: "War 2", movieDate: 2025, movieScore: "5.8/10", genre1: "اکشن", genre2: "ماجراجویی", genre3: "هیجان انگیز" },
    { src: Astronaut, title: "The Astronaut", updateMovie: "زیرنویس فارسی آپدیت شد", movieDate: 2025, movieScore: "5.9/10", genre1: "ترسناک", genre2: "علمی تخیلی", genre3: "هیجان انگیز" },
    { src: Adulthood, title: "Adulthood", updateMovie: "دوبله فارسی آپدیت شد", movieDate: 2025, movieScore: "5.5/10", genre1: "جنایی", genre2: "درام", genre3: "کمدی" },
    { src: UnderNinja, title: "Under Ninja", updateMovie: "دوبله فارسی اضافه شد", movieDate: 2025, movieScore: "6.6/10", genre1: "اکشن", genre3: "کمدی" },
    { src: StolenGirl, title: "Stolen Girl", updateMovie: "دوبله فارسی آپدیت شد", movieDate: 2025, genre1: "اکشن", genre3: "کمدی" },
    { src: Steve, title: "Steve", updateMovie: "دوبله فارسی آپدیت شد", movieDate: 2025, movieScore: "6.9/10", genre1: "درام", genre3: "کمدی" },
    { src: FreakierFriday, title: "Freakier Friday", updateMovie: "دوبله فارسی اضافه شد", movieDate: 2025, movieScore: "6.8/10", genre1: "خانوادگی", genre2: "فانتزی", genre3: "کمدی" },
    { src: Rewrite, title: "Rewrite", movieDate: 2025, genre1: "درام" },
    { src: Wait, title: "The Wait", updateMovie: "دوبله فارسی اضافه شد", movieDate: 2023, movieScore: "6.1/10", genre1: "ترسناک", genre2: "درام", genre3: "فانتزی" },
    { src: LondonCalling, title: "London Calling", movieDate: 2025, genre1: "اکشن", genre2: "درام", genre3: "کمدی" },
  ];

  const movieCategories = [
    "فیلم‌های به روز شده",
    "سریال های بروز شده",
    "سریال‌های ترکی",
    "انیمه",
    "فیلم های دوبله",
    "به زودی",
  ];

  return (
    <>
      {movieCategories.map((category, index) => (
        <MovieCard key={index} title={category}>
          {movieCardDetails.map((item, index) => (
            <SwiperSlide key={index}>
              <MovieCardItem {...item} />
            </SwiperSlide>
          ))}
        </MovieCard>
      ))}
    </>
  );
}
