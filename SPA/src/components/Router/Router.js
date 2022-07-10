import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingSpinner from "../Spinner/Spinner";

import AddListing from "../../pages/AddListing/AddListing";
import Catalog from "../../pages/Catalog/Catalog";
import Details from "../../pages/Details/Details";

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
                <Route path='/details' element={<Details />} />
                <Route path='/add-listing' element={<AddListing />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter