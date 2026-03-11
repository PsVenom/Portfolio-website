import {  Stats, OrbitControls } from "@react-three/drei";
import Woman from "./Model";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
const Experience = () => {

    const controlsRef = useRef();
    const groupRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    
    useFrame((state) => {
      if (groupRef.current) {
        // Create floating animation when hovered
        const time = state.clock.getElapsedTime();
        const baseY = -1;
        const floatAmplitude = 0.3;
        const floatSpeed = 2;
        
        if (isHovered) {
          // Smooth floating animation
          groupRef.current.position.y = baseY + Math.sin(time * floatSpeed) * floatAmplitude;
        } else {
          // Smoothly return to original position
          groupRef.current.position.y = THREE.MathUtils.lerp(
            groupRef.current.position.y,
            baseY,
            0.05
          );
        }
      }
    });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={50}
        maxDistance={200}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
      <Stats/>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group
        ref={groupRef}
        position={[0, -1, 0]}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <Woman />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>
    </>
  );
};

export default Experience;
