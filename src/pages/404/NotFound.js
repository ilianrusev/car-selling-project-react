
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './NotFound.module.css'

import notfound from '../../assets/images/404.svg'
import astronaut from '../../assets/images/astronaut.svg'
import spaceship from '../../assets/images/spaceship.svg'

const NotFound = () => {
    return (
        <Fragment className={style.body}>
            <div className={style.mars}></div>
            <img src={notfound} className={style['logo-404']} />
            <p className={style.title}>Oh no!!</p>
            <p className={style.subtitle}>
                You’re either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div className='d-flex justify-content-center align-items-center mb-2'>
                <Link to='/'>
                    <button className={style['btn-back']} >Back to Home page</button>
                </Link>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <a href='https://www.youtube.com/watch?v=G3AfIvJBcGo'>
                    <button className={style['btn-back']} >Deny ?</button>
                </a>
            </div>
            <img src={astronaut} className={style.astronaut} />
            <img src={spaceship} className={style.spaceship} />
        </Fragment >
    )
}

export default NotFound