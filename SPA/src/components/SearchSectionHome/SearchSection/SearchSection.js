import { Col, Image, Row } from 'react-bootstrap';
import style from './SearchSection.module.css';

import car from '../../../assets/images/home-car.png'
import SearchBar from '../SearchBar/SearchBar';


const SearchSection = () => {
    return (
        <section className={`mb-5 ${style.wrapper}`}>
            <Row className='d-grid '>
                <Col className='d-grid '>
                    <h1 className={`display-4 mt-5 ${style.heading}`}>
                        Easy way to find the right car
                    </h1>
                    <br />
                    <p className={`${style.underhead} mt-4`}>Leading digital marketplace for the automotive industry that connects car shoppers with sellers.</p>
                    <br />
                </Col>
                <Col xs={13} md={7} lg={7} xl={7} className={` ${style.col2}`}>
                    <Image className={` mw-100 ${style.img}`} src={car} />
                </Col>
            </Row>
            <SearchBar />
        </section >
    )
}

export default SearchSection