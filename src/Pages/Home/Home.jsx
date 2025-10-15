import Footer from "../../Components/Layouts/Footer/Footer";
import Navbar from "../../Components/layouts/Header/navbar";
import Movie from "../../Components/Movie/Movie";
import Slider from "../../Components/Ui/Slider/Slider";



export default function Home({changePageHandler}) {
    return (
        <>
            <Slider />
            <div className="pt-8 w-[85%] mx-auto absolute top-0 z-50 left-0 right-0">
                <Navbar changePageHandler={changePageHandler}/>
            </div>
            <Movie/>
            <Footer/>
        </>
    )
}
