import { Col, Row } from 'react-bootstrap'
import style from './Specifications.module.css'

const Specifications = () => {
    return (
        <section className={`px-0 mx-0 mb-4 ${style.wrapper}`}>
            <h3 className='font-weight-bold text-light mb-4'>Specifications</h3>
            <Row className='text-light mx-0'>

                <Col xs={8} sm={6} className='px-0 h-50'>
                    <ul className='list-unstyled'>
                        <li className='mb-2'>
                            <strong>Manifacturing Year: </strong>
                            <span className=''>2018</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Mileage: </strong>
                            <span className=''>25k KM</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Body Type: </strong>
                            <span className=''>Convertible</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Drivetrain: </strong>
                            <span className=''>FWD</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Engine: </strong>
                            <span className=''>2.5L Turbo</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Transmission: </strong>
                            <span className=''>7-Speed Automatic</span>
                        </li>
                    </ul>
                </Col>

                <Col xs={8} sm={6} className='h-50 px-0'>
                    <ul className='list-unstyled'>
                        <li className='mb-2'>
                            <strong>Fuel Type: </strong>
                            <span className=''>Gasoline</span>
                        </li>
                        <li className='mb-2'>
                            <strong>City L/100km: </strong>
                            <span className=''>15</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Highway L/100km: </strong>
                            <span className=''>10</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Exterior Color: </strong>
                            <span className=''>Aspen White</span>
                        </li>
                        <li className='mb-2'>
                            <strong>Interior Color: </strong>
                            <span className=''>Gray</span>
                        </li>
                        <li className='mb-2'>
                            <strong>VIN: </strong>
                            <span className=''>2VW821AU9JM754284</span>
                        </li>
                    </ul>
                </Col>
            </Row>
        </section>
    )
}

export default Specifications