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