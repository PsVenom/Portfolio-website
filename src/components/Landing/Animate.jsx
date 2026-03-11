import { Canvas, useThree } from "@react-three/fiber";
import Experience from "./Lighting";
import { AsciiRenderer, useProgress } from "@react-three/drei";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useFrame } from "@react-three/fiber";
import { useState , useMemo} from "react";
import { useViewport } from "react-viewport-hooks";
// Component to detect when the canvas scene is ready
function SceneReadyDetector({ onSceneReady }) {
  const { scene, gl, camera } = useThree();
  const { progress, active } = useProgress();
  
  useFrame(() => {
    // Scene is ready when:
    // 1. Loading is complete (!active means no assets are loading)
    // 2. WebGL renderer is initialized
    // 3. Camera is ready
    if (!active && gl && camera && scene) {
      // Small delay to ensure AsciiRenderer has processed
      const timer = setTimeout(() => {
        onSceneReady();
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [active, gl, camera, scene, onSceneReady]);

  return null;
}

export function Anim({ onSceneReady }) {
    let { scrollY } = useScroll();
    let [scroll, setScroll] = useState(0);
    let {vh}= useViewport();
    
const processScrollValue = useMemo(() => {
  return (latest) => {
    let k = latest / vh;
    if (k > 0.84 && k < 4.3) {
      setScroll(0.84);
    } else if (k > 4.3) {
      setScroll(0.84 * Math.exp((k - 4.3) / 2));
    } else {
      setScroll(k);
    }
  };
}, [vh]);

useMotionValueEvent(scrollY, "change", processScrollValue);

  return (
    <>
      <Canvas camera={{fov:50,orthographic:false, flat:true}}>
        <color attach="background" args={["black"]} />
        <SceneReadyDetector onSceneReady={onSceneReady} />
        <Experience scroll={scroll}/>
        <AsciiRenderer resolution={0.35}/>
      </Canvas>
    </>
  );
}

// export default Anim;

