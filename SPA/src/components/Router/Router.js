import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "../../pages/Catalog/Catalog";
import SignModal from "../SIgnModal/SignModal";
import LoadingSpinner from "../Spinner/Spinner";

const NotFound = lazy(() => import("../../pages/404/NotFound"));
const About = lazy(() => import("../../pages/About/About"));
const Home = lazy(() => import('../../pages/Home/Home.js'));


const AppRouter = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter