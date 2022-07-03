import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import userLogo from '../../assets/images/user2.png'
import mylogo from '../../assets/images/mylogo.png'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import style from './NavBar.module.css'
import SignModal from '../SIgnModal/SignModal'


const NavBar = () => {
    const [type, setType] = useState('')

    const [expanded, setExpanded] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <SignModal show={show} handleClose={handleClose} type={type} />
            <Navbar expanded={expanded} variant='dark' expand='lg' className={` mb-5 ${style.navbar}`} >
                <Container>
                    <Link to='/' >
                        <Navbar.Brand className='me-2 me-xl-4 m-0'>
                            <img src={mylogo} width={90} height={80} alt='car-logo' />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls='user-navbar-nav' className='ms-auto ' />

                    {/* User account dropdown */}
                    <Dropdown className='order-lg-3 ms-2 '>
                        <Dropdown.Toggle as={Nav.Link} className='dropdown-toggle-flush py-1 px-0'>
                            <img src={userLogo} width={55} height={55} className='rounded-circle' alt='User' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu renderOnMount align='end' className={style.menu}>
                            <div className='d-flex align-items-center  px-3 py-1 mb-2' style={{ width: '16rem', borderBottom: '1px solid rgb(102, 102, 102)' }}>
                                <img src={userLogo} width={60} height={60} className='rounded-circle mr-2' alt='User' />
                                <div className='ps-2'>
                                    <h6 className='fs-base mb-0'>Peter Peterson</h6>
                                    <div className='fs-xs py-2'>
                                        (+359) 883 456 7893<br />peter@abv.bg
                                    </div>
                                </div>
                            </div>
                            <Dropdown.Item as={Link} to='/personal-info'>
                                <i className='fi-lock opacity-60 me-2'></i>
                                Personal Info
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/pass-sec'>
                                <i className='fi-lock opacity-60 me-2'></i>
                                Password &amp; Security
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/my-listings'>
                                <i className='fi-list opacity-60 me-2'></i>
                                My Listings
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/wishlist' >
                                <i className='fi-heart opacity-60 me-2'></i>
                                Wishlist
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reviews' >
                                <i className='fi-star opacity-60 me-2'></i>
                                Reviews
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/notif' >
                                <i className='fi-bell opacity-60 me-2'></i>
                                Notifications
                            </Dropdown.Item>
                            <Dropdown.Divider style={{ borderTop: '1px solid rgb(102, 102, 102)' }} />
                            <Dropdown.Item as={Link} to='/sign-out' >Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Navbar nav */}
                    <Navbar.Collapse id='user-navbar-nav' className={`order-lg-2 mx-5 ${style.nav}`}>
                        <Nav className='align-items-center '>
                            <Nav.Item className=''>
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/' >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/catalog'>Catalog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/pricing'>Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to='/about' >About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    setType('login')
                                    console.log(type);
                                    setExpanded(false);
                                    handleShow()
                                }} as={Link} to='' >Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => {
                                    setType('register')
                                    console.log(type);

                                    setExpanded(false);
                                    handleShow()
                                }} as={Link} to='' >Register</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar