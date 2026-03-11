import { Canvas } from "@react-three/fiber";
import Experience from "./Lighting";
import { AsciiRenderer } from "@react-three/drei";

export function Anim() {
  return (
    <>
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <color attach="background" args={["black"]} />

        <Experience />
        <AsciiRenderer resolution={0.35}/>
      </Canvas>
    </div>
    </>
    
  );
}

// export default Anim;
