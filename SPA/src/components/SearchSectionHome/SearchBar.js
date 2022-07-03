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
                                    <option value='acura'>Acura</option>
                                    <option value='alfa-romeo'>Alfa Romeo</option>
                                    <option value='aston-martin'>Aston Martin</option>
                                    <option value='audi'>Audi</option>
                                    <option value='bentley'>Bentley</option>
                                    <option value='bmw'>BMW</option>
                                    <option value='bugatti'>Bugatti</option>
                                    <option value='buick'>Buick</option>
                                    <option value='cadillac'>Cadillac</option>
                                    <option value='chevrolet'>Chevrolet</option>
                                    <option value='chrysler'>Chrysler</option>
                                    <option value='citroen'>Citroen</option>
                                    <option value='daewoo'>Daewoo</option>
                                    <option value='daihatsu'>Daihatsu</option>
                                    <option value='dacia'>Dacia</option>
                                    <option value='dodge'>Dodge</option>
                                    <option value='ferrari'>Ferrari</option>
                                    <option value='fiat'>Fiat</option>
                                    <option value='ford'>Ford</option>
                                    <option value='genesis'>Genesis</option>
                                    <option value='gmc'>GMC</option>
                                    <option value='honda'>Honda</option>
                                    <option value='hummer'>Hummer</option>
                                    <option value='hyundai'>Hyuindai</option>
                                    <option value='infiniti'>Infiniti</option>
                                    <option value='isuzu'>Isuzu</option>
                                    <option value='jaguar'>Jaguar</option>
                                    <option value='jeep'>Jeep</option>
                                    <option value='koenigsegg'>Koenigsegg</option>
                                    <option value='lamborghini'>Lamborghini</option>
                                    <option value='lancia'>Lancia</option>
                                    <option value='lincoln'>Lincoln</option>
                                    <option value='lotus'>Lotus</option>
                                    <option value='maserati'>Maserati</option>
                                    <option value='maybach'>Maybach</option>
                                    <option value='mclaren'>McLaren</option>
                                    <option value='mercedess-benz'>Mercedes-Benz</option>
                                    <option value='mini'>Mini</option>
                                    <option value='mitsubishi'>Mitsubishi</option>
                                    <option value='nissan'>Nissan</option>
                                    <option value='opel'>Opel</option>
                                    <option value='peugeot'>Peugeot</option>
                                    <option value='pontiac'>Pontiac</option>
                                    <option value='renault'>Reanult</option>
                                    <option value='rolls-royce'>Rolls-Royce</option>
                                    <option value='saab'>Saab</option>
                                    <option value='seat'>Seat</option>
                                    <option value='subaru'>Subaru</option>
                                    <option value='tesla'>Tesla</option>
                                    <option value='toyota'>Toyota</option>
                                    <option value='volkswagen'>Volkswagen</option>
                                    <option value='volvo'>Volvo</option>
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