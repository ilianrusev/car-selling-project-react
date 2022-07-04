import { useEffect, useState } from "react"
import CardGrid from "../../components/CatalogSection/CardGrid/CardGrid"
import Aside from "../../components/CatalogSection/Filters/Aside"
import MainPageLayout from "../MainPageLayout/MainPageLayout"

import style from "./Catalog.module.css"

const Catalog = () => {
    const [show, setShow] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth)
        if (width >= 1000) {
            setShow(false);
        }
        if (width < 1000) {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

    }, [handleResize])

    const handleShow = () => show == true ? setShow(false) : setShow(true);
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