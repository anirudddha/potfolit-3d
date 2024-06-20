
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import birds from '../assets/3d/birds.glb'


const Birds_together = () => {
    const ref = useRef();
    const angleRef = useRef(0);  // Ref to keep track of the angle
    const radiusX = 7;  // Radius of the ellipse on the x-axis
    const radiusZ = 5;  // Radius of the ellipse on the z-axis

    // Load the 3D model and its animations
    const { scene, animations } = useGLTF(birds);
    // Get animation actions associated with the boat
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        // Play the animation when the component mounts
        if (actions) {
            const action = actions["Scene"];  // Replace "Action" with the actual name of your animation
            if (action) {
                action.play();
            }
        }
    }, [actions]);
    
    // console.log(actions);
    useFrame(() => {
        // Increment the angle
        angleRef.current -= 0.003;

        // Calculate new position based on the angle for elliptical motion
        const x = radiusX * Math.cos(angleRef.current);
        const z = radiusZ * Math.sin(angleRef.current);
        ref.current.position.set(x+3, 1.5, z); // y-axis (height) is set to 1

        // Update rotation to always face outward from the center
        ref.current.rotation.y = -angleRef.current;
    });

    return (
        <mesh ref={ref} scale={1}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Birds_together
