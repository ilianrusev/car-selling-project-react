import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import LatestOfferCard from "./LatestOfferCard"

import style from "./LatestOffersSection.module.css"

const LatestOffersSection = () => {
    return (
        // <section className={style.wrapper}>
        <Container fluid className='mb-5'  >

            <Row className='mb-5 mx-4 px-2 align-items-center justify-content-between'>
                <div className='text-white font-weight-bold h2'>Latest cars</div>
                <Link to='/catalog' className='text-white h6 text-decoration-none'>View all offers </Link>
            </Row>

            <Row className='justify-content-around mx-3' >

                <LatestOfferCard
                    src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                    year='1995'
                    price='25 000'
                    name='Ford Truck Lift'
                    town='Chicago'
                    dist='270K'
                    trans='Manual'
                    fuel='Diesel'
                />
                <LatestOfferCard
                    src='https://www.nastarta.com/wp-content/uploads/2018/02/mclaren-f1-1.jpg'
                    year='2001'
                    price='150 000'
                    name='McLaren F1'
                    town='Chicago'
                    dist='22k'
                    trans='Manual'
                    fuel='Gasoline'
                />
                <LatestOfferCard
                    src='https://automedia.investor.bg//media/files/resized/article/w1200x630/7a2/a602b621d6f4851747f0acb1b99f07a2-09-1.jpg'
                    year='2000'
                    price='2 000'
                    name='VW Golf IV'
                    town='Sliven'
                    dist='150k'
                    trans='Manual'
                    fuel='Diesel'
                />
                <LatestOfferCard
                    src='https://nastarta-shop.com/wp-content/uploads/2022/03/eng_pl_front-splitter-v-2-bmw-3-e90-14956_5.jpg'
                    year='2006'
                    price='15 000'
                    name='BMW e91 330i'
                    town='Sofia'
                    dist='130k'
                    trans='Auto'
                    fuel='Gasoline'
                />
            </Row>
        </Container>

        // </section>
    )
}

export default LatestOffersSection