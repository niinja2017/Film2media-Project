import { lazy, Suspense, useEffect, useState } from "react";
import LoadingItem from "./Loading/LoadingItem";

const Home = lazy(() => import(/* webpackChunkName : 'Home-page' */ './Pages/Home/Home'))
const FormLogin = lazy(() => import(/* webpackChunkName : 'From-Login' */'./Pages/Login/FormLogin'))

export default function AllSection() {

    const [changePage, setChangePage] = useState(() =>
        JSON.parse(localStorage.getItem('changePage')) ?? false
    );


    useEffect(() => {
        localStorage.setItem('changePage', JSON.stringify(changePage))
    }, [changePage])

    const changePageHandler = () => setChangePage(prev => !prev)
    return (
        <>
            <Suspense fallback={<LoadingItem/>}>
                {changePage
                    ? <FormLogin changePageHandler={changePageHandler} />
                    : <Home changePageHandler={changePageHandler} />}
            </Suspense>
        </>

    )
}
