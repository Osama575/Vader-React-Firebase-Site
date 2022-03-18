import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import about from "../images/about.svg";

const About = () => {
  return (
    <Container >

    <Row className='aboutWrap' id='mission'>
            <Col xs={12} md={6} id='vision'>
                <img src={about} height={780} alt={about} className="aboutImg" style={{width:"100%"}} />
            </Col>


            <Col xs={12} md={6}>
                <h2 className='aboutTitle' style={{marginTop:"15rem", color:"#8010F1"}}>
                Our Mission & Our Vision
                </h2>


                    <p className='aboutText'>
                    Vader intends to be one of the first African based <br /> companies to pioneer Africa into the Metaverse<br /> Space making it easy and possible for the African<br /> market to benefit from the Metaverse and also<br /> making it easy and possible for at least every<br /> African, focusing majorly on West-Africa to easily<br /> possess Crypto.

                    </p>
            </Col>
    </Row>
</Container>
  )
}

export default About