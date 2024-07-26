import { anticipate, motion } from 'framer-motion'
import React from 'react'

const App = () => {
  const anim = {
    hidden : {
      x : 10,
      y : 50,
      scale : 0,
    },
    visible : {
      x : 350,
      y : 100,
      scale : 1,
      rotate : '360deg'
    }
  }
  return (
    <div id='main'>
      <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1,delay : 2, ease: anticipate }}
      variants={anim}
      id="box">

      </motion.div>
    </div>
  )
}

export default App