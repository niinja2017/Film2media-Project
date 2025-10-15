import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import FormLogin from "./Pages/Login/FormLogin";

export default function AllSection() {

    const [changePage , setChangePage] = useState(JSON.parse(localStorage.getItem('changePage')) ?? false)


    useEffect(() => {
        localStorage.setItem('changePage' , JSON.stringify(changePage))
    } , [changePage])

    const changePageHandler = () => setChangePage(prev => !prev)
    return (
        <>
            {changePage ? <FormLogin changePageHandler={changePageHandler}/> : <Home changePageHandler={changePageHandler}/>}
        </>

    )
}
