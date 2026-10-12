import {  motion } from "framer-motion"



const App = () => {
  // Basics 
  return (
    <>
      <motion.div 
      initial={{ opacity : 0 , y : 10}}
      animate={{opacity : 1 , y : 0}}
      transition={{duration : 0.5 , ease : "easeInOut"}}
      >
        <h1>Hello World</h1>

      </motion.div>
        <motion.button
        className="border p-2 m-2 bg-gray-600 text-white"
        whileHover={{scale : 1.02 , y : -2}}
        whileTap={{scale : 0.98 , y : 1}}
        transition={{type : "spring",stiffness : 300 , damping : 15}}
        >
          Get Started
        </motion.button>
    </>
  )
}

export default App