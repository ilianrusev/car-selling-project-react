import { Col, Row } from 'react-bootstrap'
import style from './Description.module.css'

const Description = () => {
    return (
        <Col className={`w-100 p-0 mb-5 ${style.wrapper}`}>
            <h3 className='font-weight-bold text-light mb-4'>Seller's Description</h3>
            <Col className={`p-0 ${style.body}`}>
                <p className='p-3 mb-5'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
            </Col>
            <Row className={`ml-0 mt-4 ${style.footer}`}>
                <Col className={` p-0 ${style.date}`}>
                    <span>Published: <strong>May 9, 2021</strong></span>

                </Col>
                <Col className={`ml-0 ${style.views}`}>
                    <span>Views: <strong>57</strong></span>

                </Col>
            </Row>
        </Col>
    )
}

export default Description