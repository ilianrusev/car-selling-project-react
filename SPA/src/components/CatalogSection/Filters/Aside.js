import style from './Aside.module.css'

const Aside = () => {
    return (
        <aside className={`${style.aside}`}>
            <span className={style.title}>
                <h3 >Refine Search</h3>
            </span>

            <form action='/catalog' method='get' className={style.form}>

                <span className={style['make-wrapper']}>
                    <h5 htmlFor='make'>Make</h5>
                    <select name='make' id='make' className={style['make']}  >
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
                    </select>
                </span>
                <span className={style['type-wrapper']}>
                    <h5>Body type</h5>
                    <select name='type' className={style['body-type']}  >
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
                    <select name='fuel' className={style['fuel-type']}>
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
                    <select name='color' className={style.color}>
                        <option value='0'>Any</option>
                        <option value='black'>Black</option>
                        <option value='blue'>Blue</option>
                        <option value='brown'>Brown</option>
                        <option value='gold'>Gold</option>
                        <option value='gray'>Gray</option>
                        <option value='green'>Green</option>
                        <option value='orange'>Orange</option>
                        <option value='pink'>Pink</option>
                        <option value='purple'>Purple</option>
                        <option value='red'>Red</option>
                        <option value='silver'>Silver</option>
                        <option value='white'>White</option>
                        <option value='yellow'>Yellow</option>
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