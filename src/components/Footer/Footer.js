import { Link } from 'react-router-dom'

import style from './Footer.module.css'

import facebook from '../../assets/images/facebook.svg'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import mail from '../../assets/images/mail.svg'
import mylogo from '../../assets/images/mylogo.png'
import phone from '../../assets/images/phone2.svg'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const Footer = () => {
    return (

        <footer className={style.footer}>
            {/* <section className={style.wrapper}> */}
            <Row className='mx-0 w-100 mt-3'>
                <Col className={style.company}>
                    <h5>Company</h5>
                    <Link to='/about'>About us</Link>
                    <Link to='/advertising'>Advertising</Link>
                    <Link to='/support'>FAQs</Link>
                </Col>
                <Col className={style.dealer}>
                    <h5>Dealer</h5>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/add'>Add Listing</Link>
                    <Link to='/catalog'>Catalog</Link>
                </Col>
                <Col className={style.contacts}>
                    <h5>Contacts</h5>
                    <span>
                        <img src={phone} height={20} />&nbsp;&nbsp;
                        <span>(+359)892 952 955</span>
                        <br />
                        <img src={mail} height={18} />&nbsp;&nbsp;
                        <span>ilianrusev@gmail</span>
                    </span>
                </Col>
                <Col className={style.lastcol}>
                    <span className={style.social}>
                        <a href='https://www.facebook.com/ilianN.RuseV/'>
                            <img src={facebook} height={24} alt='facebook' />
                        </a>
                        <a href='https://github.com/ilianrusev'>
                            <img src={github} height={24} alt='github' />
                        </a>
                        <a href='https://www.linkedin.com/in/ilian-rusev-871945186/'>
                            <img src={linkedin} height={24} alt='linkedin' />
                        </a>
                    </span>
                    <img width={70} height={70} src={mylogo} />
                </Col>
                <Row className={`${style.rights} justify-content-center`}>© All rights reserved. Made by Ilian Rusev</Row>

            </Row>
            {/* </section> */}
        </footer>
    )
}



export default Footer