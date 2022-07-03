import { Form, InputGroup } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import style from './SearchBar.module.css'

import search from '../../assets/images/search.png'


const SearchBar = () => {
    return (
        <Form action="/catalog" method="get" >
            <Row className='w-100 m-0 p-3 '>
                <Form.Group className={` p-2 mx-4 w-100 ${style.form}`}>
                    <Row className='ms-sm-n2 '>
                        <Col className='d-sm-flex '>
                            <InputGroup className='w-sm-100  align-items-center justify-content-center'>
                                <img width='25' height='25' src={search} className={style.img} alt='search' />
                                <Form.Control className={` border-right mr-2 ${style.input}`} placeholder='Find car ...' />
                                <Form.Select name='make' className={`${style['body-type']}`} aria-label="Make" >
                                    <option value='0'>Make</option>
                                    <option value='sedan'>Acura</option>
                                    <option value='suv'>Alfa Romeo</option>
                                    <option value='wagon'>Aston Martin</option>
                                    <option value='coupe'>Audi</option>
                                    <option value='pickup'>Bentley</option>
                                    <option value='hatchback'>BMW</option>
                                    <option value='convertible'>Bugatti</option>
                                    <option value='van'>Buick</option>
                                    <option value='van'>Cadillac</option>
                                    <option value='van'>Chevrolet</option>
                                    <option value='van'>Chrysler</option>
                                    <option value='van'>Citroen</option>
                                    <option value='van'>Daewoo</option>
                                    <option value='van'>Daihatsu</option>
                                    <option value='van'>Dacia</option>
                                    <option value='van'>Dodge</option>
                                    <option value='van'>Ferrari</option>
                                    <option value='van'>Fiat</option>
                                    <option value='van'>Ford</option>
                                    <option value='van'>Genesis</option>
                                    <option value='van'>GMC</option>
                                    <option value='van'>Honda</option>
                                    <option value='van'>Hummer</option>
                                    <option value='van'>Hyuindai</option>
                                    <option value='van'>Infiniti</option>
                                    <option value='van'>Isuzu</option>
                                    <option value='van'>Jaguar</option>
                                    <option value='van'>Jeep</option>
                                    <option value='van'>Koenigsegg</option>
                                    <option value='van'>Lamborghini</option>
                                    <option value='van'>Lancia</option>
                                    <option value='van'>Lincoln</option>
                                    <option value='van'>Lotus</option>
                                    <option value='van'>Maserati</option>
                                    <option value='van'>Maybach</option>
                                    <option value='van'>McLaren</option>
                                    <option value='van'>Mercedes-Benz</option>
                                    <option value='van'>Mini</option>
                                    <option value='van'>Mitsubishi</option>
                                    <option value='van'>Nissan</option>
                                    <option value='van'>Opel</option>
                                    <option value='van'>Peugeot</option>
                                    <option value='van'>Pontiac</option>
                                    <option value='van'>Reanult</option>
                                    <option value='van'>Rolls-Royce</option>
                                    <option value='van'>Saab</option>
                                    <option value='van'>Seat</option>
                                    <option value='van'>Subaru</option>
                                    <option value='van'>Tesla</option>
                                    <option value='van'>Toyota</option>
                                    <option value='van'>Volkswagen</option>
                                    <option value='van'>Volvo</option>
                                    <option value='van'>Tesla</option>
                                </Form.Select>
                                <Form.Select name='type' className={`ml-2 ${style['body-type']}`} aria-label="Body type" >
                                    <option value='0'>Body type</option>
                                    <option value='sedan'>Sedan</option>
                                    <option value='suv'>SUV</option>
                                    <option value='wagon'>Wagon</option>
                                    <option value='coupe'>Coupe</option>
                                    <option value='pickup'>Pickup</option>
                                    <option value='hatchback'>Hatchback</option>
                                    <option value='convertible'>Convertible</option>
                                    <option value='van'>Van</option>
                                </Form.Select>
                                <Form.Select name='fuel' className={`ml-2 ${style['body-type']}`} aria-label="Body type" >
                                    <option value='0'>Fuel type</option>
                                    <option value='diesel'>Diesel</option>
                                    <option value='gasoline'>Gasoline</option>
                                    <option value='gas'>Gas</option>
                                    <option value='hybrid'>Hybrid</option>
                                    <option value='electric'>Electric</option>
                                </Form.Select>
                                <button type="submit" className={`ml-2 ${style.search}`}>Search</button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
            </Row>
        </Form>
    )
}

export default SearchBar