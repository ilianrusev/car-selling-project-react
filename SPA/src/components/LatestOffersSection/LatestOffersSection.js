import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import MyCarousel from "../Carousel/Carousel"


const LatestOffersSection = () => {
    return (
        <Container fluid className='mb-3'  >

            <Row style={{ margin: '0 11%' }} className='mb-5 align-items-center justify-content-between'>
                <div className='text-white font-weight-bold h2 '>Latest cars</div>
                <Link to='/catalog' className='text-white h6 text-decoration-none'>View all offers -></Link>
            </Row>
            <div className='mx-sm-5'>
                <MyCarousel />
            </div>
        </Container>

    )
}

export default LatestOffersSection