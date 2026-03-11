import { useState } from "react";
import {motion} from 'framer-motion'
import { Anim } from "../../components/Mid/Animate";
export function Page(props){
    const scroll = props.scroll;
    const text3Y = props.y;
    const text3Opacity = props.opacity
    return (
        <>
        <div className="fixed top-1/12 bottom-0 w-full h-full z-40 font-monospace font-extrabol place-items-center text-[11dvh] text-center">
          <motion.div
            style={{
              translateY: text3Y,
              opacity: text3Opacity,

            }}
            className="absolute w-12/12 place-items-center"
          >
            <div className="-order-1 w-10/12">
              Welcome to my digital life.
            </div>
          </motion.div>
          <div className="absolute left-0 bottom-0 w-12/12 h-12/12 order-2">
          <motion.div
            style={{
              translateY: text3Y,
              opacity: text3Opacity,
            }}>
              <Anim/>
          </motion.div>
          </div>


          
      </div>
    
</>
    )

    
};

