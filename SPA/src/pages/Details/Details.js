import { Col, Row } from "react-bootstrap"

import style from './Details.module.css'

import MainInfo from "../../components/CarShortInfo/MainInfo"
import Description from "../../components/Description/Description"
import Carousel from "../../components/DetailsPageCarousel/Carousel/Carousel"
import Features from "../../components/Features/FeaturesAccordion"
import Seller from "../../components/Seller/Seller"
import Specifications from "../../components/Specifications/Specifications"
import MainPageLayout from "../MainPageLayout/MainPageLayout"


const Details = () => {
    return (
        <MainPageLayout>
            <div className={style.wrapper}>
                <h2 className='text-light font-weight-bold mb-4 '>Mercedes-Benz E 400 Cabriolet</h2>
                <Col className='m-0 p-0'>
                    <Row className='m-0  justify-content-center'>
                        <Carousel />
                        <Col className={`p-0 ${style.column}`}>
                            <MainInfo />
                            <Seller />
                        </Col>
                    </Row>
                    <div className={style['bottom-wrapper']}>
                        <Col className='p-0  align-items-center '>
                            <Specifications />
                        </Col>
                        <Col className='p-0 '>
                            <Features />
                        </Col>
                    </div>
                </Col>

            </div>
        </MainPageLayout>
    )
}

export default Details