import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import volcano from '../assets/3d/vol.glb';

const Volcano = ({
    isRotating,
    setIsRotating,
    setCurrentStage,
    currentFocusPoint,
    ...props
}) => {

    const volcanoRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(volcano);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;

            volcanoRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            if (!isRotating) setIsRotating(true);
            volcanoRef.current.rotation.y += 0.005 * Math.PI;
            rotationSpeed.current = 0.007;
        } else if (e.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true);
            volcanoRef.current.rotation.y -= 0.005 * Math.PI;
            rotationSpeed.current = -0.007;
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            setIsRotating(false);
        }
    };

    const handleTouchStart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }

    const handleTouchEnd = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }

    const handleTouchMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            volcanoRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchend", handleTouchEnd);
        canvas.addEventListener("touchmove", handleTouchMove);

        return () => {
            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchend", handleTouchEnd);
            canvas.removeEventListener("touchmove", handleTouchMove);
        };
    }, [gl,handlePointerDown, handlePointerUp, handlePointerMove]);

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
            volcanoRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = volcanoRef.current.rotation.y;
            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    });

    return (
        <a.group ref={volcanoRef} {...props} position={[-1, -1, -1]} scale={.00025}>
            <mesh
                geometry={nodes.Clouds_Clouds_0.geometry}
                material={materials.Clouds}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.hammock_hammock_0.geometry}
                material={materials.hammock}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
                material={materials.Tequila_Bottle}
                rotation={[-1.38, 0.112, -0.022]}
                scale={100}
            />
            <mesh
                geometry={nodes.skeleton_skeleton_0.geometry}
                material={materials.skeleton}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Pyramid_Pyramid_0.geometry}
                material={materials.Pyramid}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Island_Grass_Island_Grass_0.geometry}
                material={materials.Island_Grass}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100.041}
            />
            <mesh
                geometry={nodes.shrubbery_shrubbery_0.geometry}
                material={materials.shrubbery}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
                material={materials.Lava_bubble}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
                material={materials.Volcanic_lava}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
                material={materials.Palm_tree_2}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
                material={materials.Palm_tree_1}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
                material={materials.Volacano_Sand}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Ocean_Ocean_0.geometry}
                material={materials.Ocean}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
                material={materials.Volcano_Grass}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
                material={materials.Volcano_Base}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100.041}
            />
        </a.group>
    );
}

export default Volcano;
