import CardGrid from "../../components/CatalogSection/CardGrid/CardGrid"
import Aside from "../../components/CatalogSection/Filters/Aside"
import MainPageLayout from "../MainPageLayout/MainPageLayout"

import style from "./Catalog.module.css"

const Catalog = (props) => {
    return (

        <MainPageLayout>
            <div className={style.wrapper}>
                <button className={style.btn}>Filters</button>
                <Aside />
                <CardGrid />
            </div>
        </MainPageLayout>
    )
}

export default Catalog