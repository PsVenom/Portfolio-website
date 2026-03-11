import { OrbitControls } from "@react-three/drei";
import Woman from "./Model";
import { useScroll, useMotionValueEvent } from "motion/react"
import { useEffect, useMemo, useState } from "react";
import { useViewport } from "react-viewport-hooks";
const Experience = (props) => {
  let scroll = props.scroll;
  let x = -1
  x = useMemo(
   ()=> {return -1+10*scroll}
  ,[scroll])
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <group position={[x, 1, -1]}>
        <Woman props={scroll}/>
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

export default Experience;
