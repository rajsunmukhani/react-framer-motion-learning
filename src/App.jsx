import { anticipate, motion } from 'framer-motion'
import React from 'react'

const App = () => {
  
  return (
    <div id='main'>
      <motion.div
      initial = {{
        top : 0,
        left : 0
      }}
      animate ={{
        top : [0,300,0,300,600],
        left : [0,400,800,400,400]
      }}
      transition={{
        duration : 2,
        delay : 1,
        ease : anticipate
      }}
      id="box">

      </motion.div>
    </div>
  )
}

export default App