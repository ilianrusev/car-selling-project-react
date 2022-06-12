import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Navbar/NavBar"


const MainPageLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default MainPageLayout