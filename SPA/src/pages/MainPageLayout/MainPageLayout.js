import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Navbar/NavBar"


const MainPageLayout = ({ children }) => {
    const [title, setTitle] = useState("Default Title");
    let { pathname } = useLocation()

    useEffect(() => {
        switch (pathname) {
            case '/':
                setTitle('Home')
                break;
            case '/catalog':
                setTitle('Catalog List')
                break;
            case '/about':
                setTitle('About')
                break;
            case '/my-listings':
                setTitle('My Listings')
                break;
            case '/sell-car':
                setTitle('Sell Car')
                break;
            case '/details':
                setTitle('Details')
                break;
            default:
                setTitle('Home')
        }
        document.title = 'IR Finder | ' + title;
    }, [title, pathname]);

    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default MainPageLayout