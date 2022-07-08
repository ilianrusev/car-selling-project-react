import { Accordion, Col, Row } from 'react-bootstrap'
import style from './FeaturesAccordion.module.css'

const Features = () => {
    return (
        <Accordion className={`w-100 ${style.wrapper}`} >
            <Accordion.Item className={style.item} eventKey="0">
                <Accordion.Header>Exterior</Accordion.Header>
                <Accordion.Body className={style.body}>
                    <Row className='text-light'>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Alloy Wheels
                                </li>
                                <li className='mb-2'>
                                    Sunroof
                                </li>
                                <li className='mb-2'>
                                    Tinted Glasses
                                </li>
                                <li className='mb-2'>
                                    LED Headlights
                                </li>
                                <li className='mb-2'>
                                    Foldable Roof
                                </li>

                            </ul>
                        </Col>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Tow Hitch
                                </li>
                                <li className='mb-2'>
                                    Fog Lights
                                </li>
                                <li className='mb-2'>
                                    Spoilers
                                </li>
                                <li className='mb-2'>
                                    2(3) Doors
                                </li>
                                <li className='mb-2'>
                                    Metalic color
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={style.item} eventKey="1">
                <Accordion.Header>Interior</Accordion.Header>
                <Accordion.Body className={style.body}>
                    <Row className='text-light'>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Adjustable Steering Wheel
                                </li>
                                <li className='mb-2'>
                                    Auto-Dimming Rearview Mirror
                                </li>
                                <li className='mb-2'>
                                    Adjustable Lumbar
                                </li>
                                <li className='mb-2'>
                                    Garage Door Opener
                                </li>
                                <li className='mb-2'>
                                    Steering Wheel Audio Controls
                                </li>
                                <li className='mb-2'>
                                    Heated Front Seats
                                </li>
                            </ul>
                        </Col>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Leather Seats
                                </li>
                                <li className='mb-2'>
                                    Leather Steering Wheel
                                </li>
                                <li className='mb-2'>
                                    Pass-Through Rear Seat
                                </li>
                                <li className='mb-2'>
                                    Cooled Front Seats
                                </li>
                                <li className='mb-2'>
                                    Heated Back Seats
                                </li>
                                <li className='mb-2'>
                                    Cooled Back Seats
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={style.item} eventKey="2">
                <Accordion.Header>Safety</Accordion.Header>
                <Accordion.Body className={style.body}>
                    <Row className='text-light'>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Airbag: Driver
                                </li>
                                <li className='mb-2'>
                                    Airbag: Passengers
                                </li>
                                <li className='mb-2'>
                                    Adaptive Cruise Control
                                </li>
                                <li className='mb-2'>
                                    Blind Spot Monitor
                                </li>
                                <li className='mb-2'>
                                    Alarm
                                </li>
                                <li className='mb-2'>
                                    ABS
                                </li>
                            </ul>
                        </Col>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Stability Control
                                </li>
                                <li className='mb-2'>
                                    Start/Stop System
                                </li>
                                <li className='mb-2'>
                                    Immobilizer
                                </li>
                                <li className='mb-2'>
                                    Parktronic
                                </li>
                                <li className='mb-2'>
                                    ISOFIX
                                </li>
                                <li className='mb-2'>
                                    GPS Tracking
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={style.item} eventKey="3">
                <Accordion.Header>Technology</Accordion.Header>
                <Accordion.Body className={style.body}>
                    <Row className='text-light'>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Multi-Zone A/C
                                </li>
                                <li className='mb-2'>
                                    Climate Control
                                </li>
                                <li className='mb-2'>
                                    Navigation System
                                </li>
                                <li className='mb-2'>
                                    Bluetooth
                                </li>
                                <li className='mb-2'>
                                    Remote Start
                                </li>
                                <li className='mb-2'>
                                    Apple CarPlay
                                </li>
                            </ul>
                        </Col>

                        <Col sm={6} md={12} lg={6} className=''>
                            <ul className='mb-0'>
                                <li className='mb-2'>
                                    Android Auto
                                </li>
                                <li className='mb-2'>
                                    Backup Camera
                                </li>
                                <li className='mb-2'>
                                    Premium Sound System
                                </li>
                                <li className='mb-2'>
                                    Airmatic
                                </li>
                                <li className='mb-2'>
                                    Rain sensor
                                </li>
                                <li className='mb-2'>
                                    Board computer
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion >
    )
}

export default Features