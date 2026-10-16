import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { useState } from "react"


// const container = {
//   hidden : {opacity : 0},
//   visible : {opacity : 1 , transition : {staggerChildren : 0.15 , delayChildren : 1}}
// }
// const item = {
//   hidden : {opacity : 0 , y : 20},
//   visible : {opacity : 1 , y : 0 }
// }

const App = () => {
  // const features = ["fast","declarative" , "Powerful" , "Fun"]
  const [open, setopen] = useState<boolean>(true)
  // Basics 
  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      {/* <motion.div 
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
        </motion.button> */}

      {/* List items animation process */}
      {/* <motion.ul variants={container} initial="hidden" animate="visible">
        {features.map((feature) => (
      <motion.li variants={item}  key={feature}>
        {feature}
      </motion.li>
      ))}
      </motion.ul> */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96, y: 1 }}
        className="border p-2 m-2 bg-gray-600 text-white"
        onClick={() => setopen(!open)}>
        Toggle Alert
      </motion.button>
      <AnimatePresence mode="wait">
        {open && <motion.div
          className="border bg-amber-800 text-white p-4 "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{duration : 0.3 , ease : easeInOut}}
        >
          THis is an animation alert
        </motion.div>}
      </AnimatePresence>


    </div>
  )
}

export default App