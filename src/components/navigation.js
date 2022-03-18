import React, { useState } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import vader from "../images/Vader.png";



const Navigation = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = ()=> {
        setClick(!click);
    }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className='navBackground' variant="dark" fixed='top'>
        <Container >
            <Navbar.Brand> <Link to="/home"> <img src={vader} alt={vader} width={140}/> </Link> </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

            <Navbar.Collapse id="responsive-navbar-nav">
                <div className='wrapNav'>
                    <Nav className={click ? 'navLinks active' : 'navLinks'}>
                        <Nav.Link href="#hero" className = 'me-5' onClick={handleClick}> About Us</Nav.Link>
                        <Nav.Link href="#mission" className= 'me-5' onClick={handleClick}> Our Mission</Nav.Link>
                        <Nav.Link href="#vision" className= 'me-5' onClick={handleClick}>Our Vision</Nav.Link>
                        <Nav.Link href="#contact" className= 'me-5' onClick={handleClick}>Contact Us</Nav.Link>
                    </Nav>

                    <Nav className=''>
                        <Nav.Link href="#contact"> 
                            <Button variant="outline-primary" className='subscribe'>
                                Subscribe
                            </Button>
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
            </Container>
    </Navbar>
    </>
  )
}

export default Navigation