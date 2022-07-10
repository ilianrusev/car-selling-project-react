import style from "./BodyCategoriesSection.module.css"

import SingleBodyCategory from "../SingleBodyCategory/SingleBodyCategory"

import hatchback from "../../../assets/images/compact.svg"
import convertible from "../../../assets/images/convertible.svg"
import coupe from "../../../assets/images/coupe.svg"
import pickup from "../../../assets/images/pickup.svg"
import sedan from "../../../assets/images/sedan.svg"
import suv from "../../../assets/images/suv.svg"
import van from "../../../assets/images/van.svg"
import wagon from "../../../assets/images/wagon.svg"
import { Row } from "react-bootstrap"



const BodyCategoriesSection = () => {
    return (
        <section className={style['body-type']}>
            <Row className='mb-4'>
                <h2 className='text-white font-weight-bold'>Popular car body types</h2>
            </Row>
            <Row className='justify-content-center'>
                <SingleBodyCategory type='Sedan' src={sedan} />
                <SingleBodyCategory type='SUV' src={suv} />
                <SingleBodyCategory type='Wagon' src={wagon} />
                <SingleBodyCategory type='Coupe' src={coupe} />
                <SingleBodyCategory type='Pickup' src={pickup} />
                <SingleBodyCategory type='Hatchback' src={hatchback} />
                <SingleBodyCategory type='Convertible' src={convertible} />
                <SingleBodyCategory type='Van' src={van} />
            </Row>

        </section>
    )
}

export default BodyCategoriesSection