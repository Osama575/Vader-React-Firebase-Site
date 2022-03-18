import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ParticleBackground from './particleBackground';
import portal from "../images/portal1.svg";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';


const Landing = () => {

  const [isAnimating, setIsAnimating] = useState(false);
  
  return (
    <>

    <Container fluid  className='landBackground'>
        <motion.div
          initial={{opacity:1}}
          exit={{
            scale: 1,
            }}
          transition={{type:"tween", duration:1, stiffness:50, ease:"linear"}}>
        
       <ParticleBackground />
        <motion.h1 
         initial={{opacity:0, y:10}}
        animate={{y:-10, opacity: isAnimating ? 0 : 1}}
        transition={{type:"spring", delay:isAnimating ? 0 : 3}}
        className='landText'>
            VADERVERSE
        </motion.h1>


       <div
        className='vortex'>
            <motion.img
            initial={{ rotate:360}}
            animate={{rotate: isAnimating ? [-170, 260, 360 ] : 0, scale: isAnimating ? 5 : 1,  opacity: isAnimating ? 0 :  1}}
            transition={{type:"tween", duration: isAnimating ? 1 : .9, stiffness: isAnimating ? 800 : 100, damping: isAnimating ? 8 : 0,  repeat:  Infinity, ease: isAnimating ? 'linear' :'linear' }}
           
            className="landImg"
            width={200}
            height={200}
            src={portal} 
            alt={portal} 
            />
       </div>

        <Link to="home">

       <motion.button 
       initial={{opacity:0, x:-100}}
       animate={{x:-80, opacity: isAnimating ? 0 : 1}}
       transition={{type:"spring", stiffness:400, delay:isAnimating ? 0 : 4}}
       className='btn landBtn' 
       onClick={() => setIsAnimating(!isAnimating)}>
           Explore 
       </motion.button>
        </Link>

        </motion.div>
    </Container>
    
    </>
  )
}

export default Landing