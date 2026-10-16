
import { motion } from "framer-motion"

import { useState } from "react"


const CollapsableList = () => {
    const [ExpandState, setExpandState] = useState<null | number>(null)
    const items:number[] = [1,2,3]
  return (
    <div>
        {items.map((id) => (
            <motion.div 
            layout
            className="border bg-amber-800 text-white px-7 py-2"
            key={id}
            onClick={() => setExpandState((prev) => (prev === id ? null : id ))}>
                Item {id}

                {ExpandState === id && <motion.p>This is expanded content</motion.p>}
            </motion.div>
        ))}
    </div>
  )
}

export default CollapsableList