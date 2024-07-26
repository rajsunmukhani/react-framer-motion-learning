Framer Motion is a animation library that helps in creating various types of animation in React, or Next. This library is dedicated to make animations in React based librabries easier and more efficient.

To use Framer Motion in your project :
## Step 1: get to the project using terminal
## Step 2: run following command : *npm i framer-motion*
## Step 3: import the motion from framer-motion.
## Step 4: select the element(div/h1/p/nav/h3/h2/or any other) and add *motion.* to it,it will be seem as (motion.div/motion.h1/motion.p/motion.nav/etc);
## Step 5: to define animation simply use a attribute named *animate={{}}* in the div to be animated and define the animation inside it.
## Step 6:to manage the timing function, delay or duration of the animation use the attribute named *transition={{}}*

**just like *animate={{}}* and *transition={{}}* there are some more prosp or attribute as:**

*initial={{}}* : this helps in defining the initial or first position of the element from where it has to start to animate.

# Also, we may need to define a single animation in many elements for that we undertake the use of variants as:
Step 1: we define a animation with our own named variable and inside it we define the initial and final position of the element so as to use during animation.
Step 2: we can now simply use the animation just by using the variant prop or attribute with animate and initial prop directly in the animating element.

# Note : this time the animate and initial will hold the data in '' or "" and not in {{}};

## multi movements in one code : 
    'Z' pattern

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
                    top : [0,0,600,600],
                    left : [0,500,0,500]
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

    Y pattern

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

## NOTE : Don't forget to make position of box absolute.
To use percentage in array write them in inverted quotes as : '50%' or "50%" to undertake animation

***drag* keyword can be used as prop to fix the div wtih mouse to click and move as:**

import { anticipate, motion } from 'framer-motion'
import React from 'react'

const App = () => {
  
  return (
    <div id='main'>
      <motion.div
      drag
      id="box">

      </motion.div>
    </div>
  )
}

export default App

***whileHover* keyword can be used to give animation while cursor hovers on the div**
import { anticipate, motion } from 'framer-motion'
import React from 'react'

const App = () => {
  
  return (
    <div id='main'>
      <motion.div
      whileHover={{
        scale : 0.8,
      }}
      id="box">

      </motion.div>
    </div>
  )
}

export default App


***whileDrag* keyword can be used to give animation while cursor hovers on the div**
## works only when drag also present

import { anticipate, motion } from 'framer-motion'
import React from 'react'

const App = () => {
  
  return (
    <div id='main'>
      <motion.div
      whileHover={{
        scale : 0.8,
      }}
      drag
      whileDrag={{
        backgroundColor : 'royalblue'
      }}
      id="box">

      </motion.div>
    </div>
  )
}

export default App

## Now in drag we can see that the element gets far away on leaving the drag with speed to fix it we have a another prop named *dragConstraint* which helps in fixing limit for the movement of drag. As:

import { anticipate, motion } from 'framer-motion'
import React from 'react'

const App = () => {
  
  return (
    <div id='main'>
      <motion.div
      whileHover={{
        scale : 0.8,
      }}
      drag
      whileDrag={{
        backgroundColor : 'royalblue'
      }}
      dragConstraints={{
        top : 0,
        left : 0,
        right : 0
      }}
      id="box">

      </motion.div>
    </div>
  )
}

export default App


## Animation on the basis of button click: 
    import { anticipate, motion } from 'framer-motion'
import React, { useState } from 'react'

const App = () => {
  const [moveX, setMoveX] = useState(null)
  const eventHandler = () => {
    setMoveX(moveX + 200);
  }
  
  return (
    <div id='main'>
      <motion.div
      animate={{
        x : moveX
      }}
      id="box">

      </motion.div>
      <button onClick={eventHandler}>click</button>
    </div>
  )
}

export default App


## Scrolling on the basis of animation:

use the predetermined function *useScroll* to get the animation on scroll and under it scrollYProgress gives the progress done under scrolling in y axis which will set the value of scaleX for nav classed div which has position to be fixed and transform origin 0.
