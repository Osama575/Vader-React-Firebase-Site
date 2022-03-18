import React from 'react'
import { Container } from 'react-bootstrap';
import {FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <Container>

    <div className='footWrap'>
        <p style={{color:"#fff"}}> Copyright &copy;{(new Date().getFullYear())} Vaderverse Limited. All Rights Reserved</p>
    
    <hr className='hRule'/>
        <div className='footIcons'>
          <a href='https://instagram.com/_vader_gaming?utm_medium=copy_link'> <FaInstagram style={{width:"24px", height:"24px", color:"#fff"}} /></a>  
           <a href='https://twitter.com/_Vader_Gaming?s=09'> <FaTwitter  style={{width:"24px", height:"24px", color:"#fff"}} /> </a> 
        </div>

    </div>

    </Container>
    </>
  )
}

export default Footer