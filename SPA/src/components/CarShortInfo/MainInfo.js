import { Col, Row } from 'react-bootstrap'
import InfoBox from '../Badge/Badge'

import style from './MainInfo.module.css'

import speedometer from '../../assets/images/speedometer.png'
import location from '../../assets/images/location.png'

const MainInfo = () => {
    return (
        <section className='mb-4' >
            <Row className={`ml-0 w-100 text-light d-flex align-items-center`}>
                <h3 className='font-weight-bold mb-0 mr-3'>$31,900</h3>
                <InfoBox property={'Used'} />
                <InfoBox property={'Certified'} />
            </Row>
            <Row className={`ml-0 w-100 mt-4 text-light ${style.footer}`}>
                <Col className={`ml-0 align-items-center p-0 ${style.date}`}>
                    <span><img src={speedometer} alt='speedometer' />25K KM</span>
                </Col>
                <Col className={`align-items-center`}>
                    <span><img src={location} alt='location' />Chicago</span>
                </Col>
            </Row>
        </section>
    )
}

export default MainInfo