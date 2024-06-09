import React, { useState, useEffect, useCallback, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import boat from '../assets/3d/zefiro.glb';

const Boat = () => {
    const ref = useRef();
    const [angle, setAngle] = useState(0);  // Angle in radians
    const radius = 5;  // Radius of the circular path

    // Load the 3D model and its animations
    const { scene, animations } = useGLTF(boat);
    // Get animation actions associated with the plane
    const { actions } = useAnimations(animations, ref);

    const handleKeyDown = useCallback((event) => {
        setAngle((prevAngle) => {
            switch (event.key) {
                case 'a':
                case 'A':
                    return prevAngle + 0.1;  // Increase angle to move counterclockwise
                case 'd':
                case 'D':
                    return prevAngle - 0.1;  // Decrease angle to move clockwise
                default:
                    return prevAngle;
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    useFrame(() => {
        // Calculate new position based on the angle
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        ref.current.position.set(x, -1.2, z);

        // Optionally, update rotation to always face outward from the center
        ref.current.rotation.y = -angle;
    });

    return (
        <mesh ref={ref} scale={5}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Boat;
