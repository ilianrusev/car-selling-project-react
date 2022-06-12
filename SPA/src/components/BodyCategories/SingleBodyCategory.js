import style from "./SingleBodyCategory.module.css"

import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const SingleBodyCategory = (props) => {
    return (
        <Nav.Link as={Link} to='/car-info'>
            <Card bg='transparent' className={`text-center ${style.hovering} `}>
                <Card.Body>
                    <img style={{ width: '11rem' }} src={props.src} alt='car' />
                    <Card.Text className='fs-sm'>{props.type}</Card.Text>
                </Card.Body>
            </Card>
        </Nav.Link>
    )
}

export default SingleBodyCategory