import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Navbar/NavBar"
import SignModal from "../../components/SIgnModal/SignModal";


const MainPageLayout = ({ children }) => {
    const [title, setTitle] = useState("Default Title");
    let { pathname } = useLocation()

    const [type, setType] = useState('')

    const handleType = (type) => setType(type);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            case '/add-listing':
                setTitle('Sell Car')
                break;
            default:
                setTitle('Home')
        }
        document.title = 'IR Finder | ' + title;
    }, [title, pathname]);

    return (
        <Fragment>
            <SignModal show={show} handleClose={handleClose} handleShow={handleShow} handleType={handleType} type={type} />
            <NavBar handleType={handleType} handleShow={handleShow} />
            {children}
            <Footer handleType={handleType} handleShow={handleShow} />
        </Fragment>
    )
}

export default MainPageLayout