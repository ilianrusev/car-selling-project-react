import { Col, Form, FormGroup, Row } from 'react-bootstrap'
import style from './Aside.module.css'

const Aside = () => {
    return (
            <aside className={`${style.aside}`}>
                <span className={style.title}>
                    <h3 >Refine Search</h3>
                </span>

                <form className={style.form}>

                    <span className={style['make-wrapper']}>
                        <h5 for='make'>Make</h5>
                        <select id='make' className={style['make']}  >
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
                        </select>
                    </span>
                    <span className={style['type-wrapper']}>
                        <h5>Body type</h5>
                        <select className={style['body-type']}  >
                            <option value='0'>Body type</option>
                            <option value='sedan'>Sedan</option>
                            <option value='suv'>SUV</option>
                            <option value='wagon'>Wagon</option>
                            <option value='coupe'>Coupe</option>
                            <option value='pickup'>Pickup</option>
                            <option value='hatchback'>Hatchback</option>
                            <option value='convertible'>Convertible</option>
                            <option value='van'>Van</option>
                        </select>
                    </span>
                    <span className={style['year-wrapper']}>
                        <h5>Year</h5>
                        <div className={style['input-wrapper']}>
                            <input className={style.min} name="min-year" type="number" min='0' placeholder="min" />
                            <span className={style['input-divider']}></span>
                            <input className={style.max} name="max-year" type="number" max='2022' placeholder="max" />
                        </div>
                    </span>
                    <span className={style['price-wrapper']}>
                        <h5>Price</h5>
                        <div className={style['input-wrapper']}>
                            <input className={style.min} name="min-price" type="number" min='0' placeholder="min" />
                            <span className={style['input-divider']}></span>
                            <input className={style.max} name="max-price" type="number" min='1' placeholder="max" />
                        </div>
                    </span>
                    <span className={style['fuel-wrapper']}>
                        <h5>Fuel type</h5>
                        <select className={style['fuel-type']}>
                            <option value='0'>Any</option>
                            <option value='diesel'>Diesel</option>
                            <option value='gasoline'>Gasoline</option>
                            <option value='gas'>Gas</option>
                            <option value='hybrid'>Hybrid</option>
                            <option value='electric'>Electric</option>
                        </select>
                    </span>
                    <span className={style['color-wrapper']}>
                        <h5>Color</h5>
                        <select className={style.color}>
                            <option value='0'>Any</option>
                            <option value='diesel'>Black</option>
                            <option value='gasoline'>Blue</option>
                            <option value='gas'>Brown</option>
                            <option value='hybrid'>Gold</option>
                            <option value='electric'>Gray</option>
                            <option value='electric'>Green</option>
                            <option value='electric'>Orange</option>
                            <option value='electric'>Pink</option>
                            <option value='electric'>Purple</option>
                            <option value='electric'>Red</option>
                            <option value='electric'>Silver</option>
                            <option value='electric'>White</option>
                            <option value='electric'>Yellow</option>
                        </select>
                    </span>
                    <span className={style['trans-wrapper']}>
                        <h5>Transmission</h5>
                        <div className={style.radios}>
                            <label className={`${style['radio-wrapper']} ${style.first}`}>
                                <input
                                    type="radio"
                                    value="Any"
                                    name="transmission"
                                />
                                <p>Any</p>
                            </label>

                            <label className={`${style['radio-wrapper']} ${style.second}`}>
                                <input
                                    type="radio"
                                    value="Manual"
                                    name="transmission"
                                />
                                <p>Manual</p>
                            </label>

                            <label className={`${style['radio-wrapper']} ${style.third}`}>
                                <input
                                    type="radio"
                                    value="Auto"
                                    name="transmission"
                                />
                                <p>Auto</p>
                            </label>
                        </div>
                    </span>

                    <button className={style.submit}>Submit</button>

                </form>
            </aside >
    )
}

export default Aside