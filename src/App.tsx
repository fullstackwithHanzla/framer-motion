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
    </>
  )
}

export default App