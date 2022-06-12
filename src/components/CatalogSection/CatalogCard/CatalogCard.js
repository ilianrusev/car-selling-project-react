import style from './CatalogCard.module.css'

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

import fuel from "../../../assets/images/fuel.png"
import gearbox from "../../../assets/images/gearbox.png"
import speedometer from "../../../assets/images/speedometer.png"
import location from "../../../assets/images/location.png"

const CatalogCard = () => {
    return (
        <Card className={`${style.wrapper}`}>
            <Col sm={5} className={`m-0 p-0`}>
                <div className={`${style['img-wrapper']}`}>
                    <img src='https://nastarta-shop.com/wp-content/uploads/2022/03/eng_pl_front-splitter-v-2-bmw-3-e90-14956_5.jpg' alt='car' />
                </div>
            </Col>
            <Col className={`py-2 ${style['card-body']}`}>
                <div className={`${style.year}`}>
                    <span>1995</span>
                </div>
                <h4 className={style.name}>
                    <Link to="/catalog" className="">BMW e91 330i</Link>
                </h4>
                <div className={`${style.price}`}>
                    <span>$ 10 000</span>
                </div>
                <div className={`${style.location}`}>
                    <img src={location} alt='location' className={style['location-icon']} />
                    <p>Sofia</p>
                </div>
                <div className={`${style.footer}`}>
                    <Col xs={3} md={3} lg={4} className={`justify-content-center align-items-center py-2 px-1 ${style['dist-wrapper']} `}>
                        <Row className='align-items-center justify-content-center '><img src={speedometer} alt='speedometer' className={style['dist-img']} /></Row>
                        <Row className='align-items-center justify-content-center'><span className={style.dist}>155K km</span></Row>
                    </Col>

                    <Col xs={3} md={3} lg={4} className={`justify-content-center  align-items-center  py-2 px-1 ${style['trans-wrapper']} `}>
                        <Row className='align-items-center justify-content-center'> <img src={gearbox} alt='gearbox' className={style['trans-img']} /></Row>
                        <Row className='align-items-center justify-content-center'>   <span className={style.trans}>Manual</span></Row>
                    </Col>

                    <Col xs={3} md={3} lg={4} className={` justify-content-center align-items-center  py-2 px-1 ${style['fuel-wrapper']}`}>
                        <Row className='align-items-center justify-content-center'>  <img src={fuel} alt='fuelcan' className={style['fuel-img']} /></Row>
                        <Row className='align-items-center justify-content-center'> <span className={style.fuel}>Gasoline</span></Row>
                    </Col>
                </div>
            </Col>
        </Card>
    )
}

export default CatalogCard