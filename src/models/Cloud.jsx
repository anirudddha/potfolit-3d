import { act, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/cloud_test.glb";

const Cloud = () => {

    const birdRef = useRef();
  
    const { scene, animations } = useGLTF(birdScene);
  
    const { actions } = useAnimations(animations, birdRef);

    console.log(actions);
  
  return (
    <mesh ref={birdRef} position={[2,0,3.5]} scale={.2}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Cloud
