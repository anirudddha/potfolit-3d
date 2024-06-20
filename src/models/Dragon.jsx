import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import boat from '../assets/3d/skyflux.glb';

const Dragon = () => {
    const ref = useRef();
    const { scene, animations } = useGLTF(boat);
    const { actions } = useAnimations(animations, ref);

    // Define the angle variable for circular motion
    const angle = useRef(0);
    
    return (
        <mesh ref={ref} scale={.03} >
            <primitive object={scene} />
        </mesh>
    );
};

export default Dragon;
