import { useEffect, useState } from "react"
import CardGrid from "../../components/CatalogSection/CardGrid/CardGrid"
import Aside from "../../components/CatalogSection/Filters/Aside"
import MainPageLayout from "../MainPageLayout/MainPageLayout"

import style from "./Catalog.module.css"

const Catalog = () => {
    const [show, setShow] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        if (window.screen.width !== width) {
            setWidth(window.innerWidth)
            if (width >= 1000) {
                setShow(true);
            }
            if (width < 1000) {
                setShow(false);
            }
        }
    }

    useEffect(() => {
        if (width < 1000) {
            setShow(false);
        }
        
        window.addEventListener('resize', handleResize)

    }, [handleResize,width])

    const handleShow = () => show === true ? setShow(false) : setShow(true);
    return (

        <MainPageLayout>
            <div className={style.wrapper}>
                <button onClick={handleShow} className={style.btn}>Filters</button>
                <Aside show={show} />
                <CardGrid />
            </div>
        </MainPageLayout>
    )
}

export default Catalog