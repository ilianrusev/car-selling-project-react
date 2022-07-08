import { Col, Row } from 'react-bootstrap'
import style from './Description.module.css'

const Description = () => {
    return (
        <Col className={`w-100 p-0 mb-5 ${style.wrapper}`}>
            <h3 className='font-weight-bold text-light mb-4'>Seller's Description</h3>
            <Col className={`p-0 ${style.body}`}>
                <p className='p-3 mb-5'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
            </Col>
        </Col>
    )
}

export default Description