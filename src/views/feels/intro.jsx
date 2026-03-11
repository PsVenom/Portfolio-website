// import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useState } from "react";
import { useViewport } from "react-viewport-hooks";
import {Page} from "../pages/Digital"
function Slide(props) {
  let scrollYProgress = props.scrollYProgress;
  let {vw,vh} = useViewport();
  const trigger = vw<=1438?false:true
  let roles = ["a Developer", "a Founder", "an Engineer", "an Artist"];
  let [role, setRole] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setRole((role + 1) % 4);
    }, 2000);
  });
  return trigger?(
          <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.7 }}
        key={role}
        className="justify-left items-start"
      >
        {roles[role]}
      </motion.div>
    </AnimatePresence>
    ):<>
        <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.7 }}
        key={role}
        className="justify-left items-start"
      >
        {roles[role]}
      </motion.div>
    </AnimatePresence>
    </>


}

export default function Intro() {
  const { scrollYProgress } = useScroll();
  let {vw,vh} = useViewport();
  const trigger = vw<=1438?false:true
  // let yScroll = props.yscroll;
  const text1Y = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    ["50px", "0px", "-50px"],
  );
  const text1Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.35, 0.4],
    ["0%", "100%", "100%", "0%"],
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    ["50px", "0px", "-50px"],
  );
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.55, 0.6],
    ["0%", "100%", "80%", "0%"],
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8],
    ["50px", "0px", "0px"],
  );
  const text3Opacity = useTransform(
    scrollYProgress,
    [0.6,0.7, 1],
    ["0%", "100%","100%"],
  );
  return (
    <>
      <div className="fixed top-0 left-1/24 bottom-0 w-8/12 z-40 font-monospace font-extrabol">
        <div className="absolute flex top-[33dvh] left-6 bottom-[33dvh] w-full items-center text-center text-[11dvh]">
          <motion.p
            style={{
              translateY: text1Y,
              opacity: text1Opacity,
            }}
            className="absolute text-center"
          >
            Hi, I am Parth.
          </motion.p>
          <motion.div
            style={{
              translateY: text2Y,
              opacity: text2Opacity,
            }}
            className={`absolute flex ${trigger?'flex-row':'flex-col'} w-full items-start`}
          >
            <div>I am </div>
            <>{trigger?(<>
             <Slide scrollYProgress={scrollYProgress}></Slide>
            </>): 
            <div>
            <Slide scrollYProgress={scrollYProgress}></Slide>
            </div>
            }</>
           
          </motion.div>

        </div>
      </div>
      {/* <Page scroll={scrollYProgress} opacity={text3Opacity} y={text3Y}/> */}
    </>
  );
}
