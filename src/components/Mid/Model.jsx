import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Portfolio-website/models/L Drago.glb");
  const { actions, names } = useAnimations(animations, group);

  // Start the first available animation (none run until you call .play())
  useEffect(() => {
    if (!names.length) return;

    names.map((name) => {
      const action = actions[name];
      if (action) action.play();
    });
  }, [actions, names]);



return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="obj_0"
          castShadow
          receiveShadow
          geometry={nodes.obj_0.geometry}
          material={nodes.obj_0.material}
          position={[-39.627, -12.963, -45.831]}
          rotation={[-3.1, 1.029, -0.453]}
        />
        <mesh
          name="obj_1"
          castShadow
          receiveShadow
          geometry={nodes.obj_1.geometry}
          material={nodes.obj_1.material}
          position={[-46.829, 19.112, -59.227]}
          rotation={[-0.463, 0.317, 0.238]}
        />
        <mesh
          name="obj_2"
          castShadow
          receiveShadow
          geometry={nodes.obj_2.geometry}
          material={nodes.obj_2.material}
          position={[-50.452, 29.358, -64.399]}
          rotation={[2.707, -0.318, 2.9]}
        />
        <mesh
          name="obj_0001"
          castShadow
          receiveShadow
          geometry={nodes.obj_0001.geometry}
          material={nodes.obj_0001.material}
          position={[-53.921, 46.531, -71.351]}
          rotation={[-0.24, -0.575, -2.872]}
        />
        <mesh
          name="obj_0002"
          castShadow
          receiveShadow
          geometry={nodes.obj_0002.geometry}
          material={nodes.obj_0002.material}
          position={[-45.194, 7.302, -55.402]}
          rotation={[2.625, -0.375, -0.274]}
        />
        <mesh
          name="rubik_cubepCube1"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube1.geometry}
          material={nodes.rubik_cubepCube1.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube10"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube10.geometry}
          material={nodes.rubik_cubepCube10.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube11"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube11.geometry}
          material={nodes.rubik_cubepCube11.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube12"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube12.geometry}
          material={nodes.rubik_cubepCube12.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube13"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube13.geometry}
          material={nodes.rubik_cubepCube13.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube14"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube14.geometry}
          material={nodes.rubik_cubepCube14.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube15"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube15.geometry}
          material={nodes.rubik_cubepCube15.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube16"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube16.geometry}
          material={nodes.rubik_cubepCube16.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube17"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube17.geometry}
          material={nodes.rubik_cubepCube17.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube18"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube18.geometry}
          material={nodes.rubik_cubepCube18.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube19"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube19.geometry}
          material={nodes.rubik_cubepCube19.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube2"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube2.geometry}
          material={nodes.rubik_cubepCube2.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube20"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube20.geometry}
          material={nodes.rubik_cubepCube20.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube21"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube21.geometry}
          material={nodes.rubik_cubepCube21.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube22"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube22.geometry}
          material={nodes.rubik_cubepCube22.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube23"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube23.geometry}
          material={nodes.rubik_cubepCube23.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube24"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube24.geometry}
          material={nodes.rubik_cubepCube24.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube25"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube25.geometry}
          material={nodes.rubik_cubepCube25.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube26"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube26.geometry}
          material={nodes.rubik_cubepCube26.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube27"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube27.geometry}
          material={nodes.rubik_cubepCube27.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube3"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube3.geometry}
          material={nodes.rubik_cubepCube3.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube4"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube4.geometry}
          material={nodes.rubik_cubepCube4.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube5"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube5.geometry}
          material={nodes.rubik_cubepCube5.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube6"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube6.geometry}
          material={nodes.rubik_cubepCube6.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube7"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube7.geometry}
          material={nodes.rubik_cubepCube7.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube8"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube8.geometry}
          material={nodes.rubik_cubepCube8.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
        <mesh
          name="rubik_cubepCube9"
          castShadow
          receiveShadow
          geometry={nodes.rubik_cubepCube9.geometry}
          material={nodes.rubik_cubepCube9.material}
          position={[-33.564, 7.425, 54.351]}
          rotation={[1.58, 0.001, 0.001]}
          scale={[5.737, 5.397, 5.264]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/Portfolio-website/models/L Drago.glb");
