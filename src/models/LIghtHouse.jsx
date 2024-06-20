import React, { useState, useEffect, useCallback, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import lighthouse from '../assets/3d/lighthouse.glb';

const LIghtHouse = ({ isLightHouse }) => {
    const ref = useRef();
    const radius = 5; // Adjust the radius as needed

    // Load the 3D model and its animations
    const { scene, animations } = useGLTF(lighthouse);
    // Get animation actions associated with the plane
    const { actions } = useAnimations(animations, ref);

    // Define the angle variable for circular motion
    

    return (
        <mesh ref={ref} scale={0.1} position={[-.3, -1.5, 2]}>
            <primitive object={scene} />
        </mesh>
    );
};

export default LIghtHouse;
