import { motion } from 'framer-motion';
import React from 'react'
import { Col, Row, Container} from 'react-bootstrap';
// import hero from "../images/hero.png";
import demo from "../images/demo.mp4";


const Hero = () => {
  return (
      <>
<Container  >

    <Row className='heroWrap' id='hero'>
            <Col xs={12} md={6}>
            <motion.h1
            initial={{opacity:0, x:100}} 
            animate={{x:0, opacity:1}}
            transition={{delay:4, type:"spring", stiffness:50}}
            className='heroText'>
            Let’s Take <span style={{color:"#8010F1"}}>Crypto Earnings</span>  <br/>
            To The Next Level
            </motion.h1>

             <motion.p
                initial={{opacity:0, Y:100}} 
                animate={{Y:0, opacity:1}}
                transition={{delay:5, type:"spring", stiffness:100}}
              className='heroText1'>
             Vader is a next level gaming platform that gives<br/> financial benefits to users for their love of gaming. <br/> <br/> 
             It’s cutting edge because other than normal fiat<br/> currency,it also supports Crypto currency, <br/> Encouraging people to earn in crypto.<br/> <br/> 
             Basically, You depend on your skills rather than <br/>luck in playing games and wining Crypto Currency,<br/> the leading currency in the world.

            </motion.p>

            <motion.button
                initial={{opacity:0, Y:100}} 
                animate={{Y:0, opacity:1}}
                transition={{delay:5, type:"spring", stiffness:100}}
                className='heroBtn'>
                COMING SOON!!!
            </motion.button>
            </Col>


            <Col xs={12} md={6}>
                <motion.video 
                initial={{opacity:0, x:-100}}
                animate={{x:0, opacity:1}}
                transition={{delay:3, type:"spring", stiffness:200}}
                 height={450} style={{marginTop:"60px", width:"100%"}} className="heroImg"  alt={demo}
                 loop muted autoPlay
                 > 
                 <source src={demo} type="video/mp4" />

                 </motion.video>
            </Col>
    </Row>
</Container>
      </>
  )
}

export default Hero