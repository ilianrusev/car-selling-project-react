import style from './Seller.module.css';

import userPhoto from '../../assets/images/user2.png'
import phone from '../../assets/images/phone.png'

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Seller = () => {
    const [hidden, setHidden] = useState(true)

    return (
        <section className={`p-4 text-light ${style.wrapper}`}>
            <p className='mb-2'>Private Seller</p>
            <div className='d-flex mb-5' >
                <img src={userPhoto} alt='user' />
                <span className='pl-2'>
                    <h4>Devon Lane</h4>
                    <Link to='/user' className={`${style.link}`}>Other ads by this seller</Link>
                </span>
            </div>
            <span onClick={() => hidden == true ? setHidden(false) : null} className={`${style.phone} align-items-center justify-content-center`}>
                <img src={phone} alt='phone' />
                <span className={`${hidden == true ? style.shown : style.hidden}`}>(+359) *** - reveal</span>
                <span className={`${hidden == true ? style.hidden : style.shown}`}>(+359) 892 952 955</span>

            </span>
        </section>
    )
}

export default Seller