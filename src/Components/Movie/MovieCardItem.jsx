import { useState } from "react";
import Date from "../../Assets/Svg/Date";

export default function MovieCardItem({ title, src, alt, updateMovie, movieDate, movieScore, genre1, genre2, genre3 }) {

    const [imageDetails, setImageDetails] = useState(false)
    const genres = [genre1, genre2, genre3].filter(Boolean)

    return (
        <>
            <a href="#" className="inline-flex flex-col mt-8 items-center space-y-2">
                <div className="relative hover:scale-105 duration-300" onMouseEnter={() => setImageDetails(true)} onMouseLeave={() => setImageDetails(false)}>
                    <img className={`rounded-2xl duration-300 shadow-[inset_1px_1px_1px_black]  ${imageDetails ? 'brightness-50' : ''}`} src={src} alt={alt} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    {
                        imageDetails
                            ? <div className={`absolute rounded-2xl inset-0 flex flex-col justify-center items-center bg-black/50 transition-opacity duration-300 `}>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {genres.map((genre, index) => (
                                        <p key={index} className="text-white text-sm border border-white px-2 py-1 rounded-xl">
                                            {genre}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            : ''
                    }
                    <div className="flex justify-between items-center w-full absolute bottom-0">
                        <p className="text-white text-sm m-2 flex items-center">
                            {movieDate}
                            <Date />
                        </p>
                        <p className="text-white text-sm m-2">{movieScore}</p>
                    </div>
                </div>
                <p className="text-white font-bold ">{title}</p>
                <p className="text-[#757576] text-sm font-bold">{updateMovie}</p>
            </a>
        </>
    )
}
