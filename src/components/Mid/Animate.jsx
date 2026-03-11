import { Canvas } from "@react-three/fiber";
import Experience from "./Lighting";
import { AsciiRenderer } from "@react-three/drei";
export function Anim() {
  return (
    <>
    <div className="fixed h-full w-full">
      <Canvas camera={{ position: [-93.37603494555594, 64.92340105075874, 63.650019423527134], fov: 50 }} shadows>
        {/* <color attach="background" args={["transparent"]} /> */}
        <Experience />
        {/* <AsciiRenderer resolution={0.35}/> */}
      </Canvas>
    </div>
    </>
    
  );
}

// export default Anim;
