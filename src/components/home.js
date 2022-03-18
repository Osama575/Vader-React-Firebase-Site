import React from 'react'
import About from './about';
import Footer from './footer';
import Hero from './hero';
import Navigation from './navigation';
import Newsletter from './newsletter';
import { motion } from 'framer-motion';





const Home = () => {
  return (
    <>
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{type:"tween", duration:4, stiffness:100, ease:[0.6, 0.01, -0.5, 0.9] }}
            className='homeWrap'>
            <Navigation />
            <Hero />
            <About />
            <Newsletter />
            <Footer />
        </motion.div>
    </>
  )
}

export default Home