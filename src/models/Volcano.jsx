import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import volcano from '../assets/3d/unn.glb';

const Volcano = ({
    isRotating,
    setIsRotating,
    setCurrentStage,
    currentFocusPoint,
    setLightHouse,
    LIghtHouse,
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
            setLightHouse(LIghtHouse + 0.005 * Math.PI);
            rotationSpeed.current = 0.007;
        } else if (e.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true);
            volcanoRef.current.rotation.y -= 0.005 * Math.PI;
            setLightHouse(LIghtHouse - 0.005 * Math.PI);
            rotationSpeed.current = -0.007;
        }
        // setLightHouse(true);
    };

    const handleKeyUp = (e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            setIsRotating(false);
            // setLightHouse(false);
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
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

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
        <a.group ref={volcanoRef} {...props} position={[-0.5, -1.5, -0.8]} scale={.02}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.019}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Clouds_Clouds_0.geometry}
                        material={materials.Clouds}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.hammock_hammock_0.geometry}
                        material={materials.hammock}
                        position={[180.509, 1151.676, 5904.325]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
                        material={materials.Island_Grass}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100.041}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
                        material={materials.Lava_bubble}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ocean_Ocean_0.geometry}
                        material={materials.Ocean}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
                        material={materials.Palm_tree_1}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
                        material={materials.Palm_tree_2}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Pyramid_Pyramid_0.geometry}
                        material={materials.Pyramid}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.shrubbery_shrubbery_0.geometry}
                        material={materials.shrubbery}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.skeleton_skeleton_0.geometry}
                        material={materials.skeleton}
                        position={[3541.67, 1110.094, 3568.021]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
                        material={materials.Tequila_Bottle}
                        position={[3492.547, 1112.371, 3620.925]}
                        rotation={[-1.38, 0.112, -0.022]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
                        material={materials.Volacano_Sand}
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
                        castShadow
                        receiveShadow
                        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
                        material={materials.Volcano_Base}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100.041}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
                        material={materials.Volcano_Grass}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.blinn1SG}
                position={[122.45, -0.145, -46.256]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.19}
            />
            <group position={[2.052, 3.802, 158.036]} rotation={[-1.593, 0.003, -1.044]} scale={0.075}>
                <group scale={100}>
                    <group position={[0.293, 0.757, 1.876]} scale={0.047}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.FB_M1_Cabin_Boat_2_0.geometry}
                            material={materials.Boat_2}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Ladder_Boat_0.geometry}
                            material={materials.Boat}
                            position={[4.356, 9.628, -23.65]}
                            rotation={[0, 0.076, 0]}
                            scale={15.967}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Lifetorus_Boat_2_0.geometry}
                            material={materials.Boat_2}
                            position={[-6.198, 19.516, -15.467]}
                            rotation={[0.001, Math.PI / 2, 0]}
                            scale={4.376}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Marking_Lights001_Boat_2_0.geometry}
                            material={materials.Boat_2}
                            position={[-6.225, 9.061, -29.645]}
                            scale={21.169}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.RadarScanner_Boat_2_0.geometry}
                            material={materials.Boat_2}
                            position={[-6.225, 6.871, 14.109]}
                            scale={21.169}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FB_Medium_Hull_Boat_2_0.geometry}
                        material={materials.Boat_2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FB_Medium_Hull_Boat_0.geometry}
                        material={materials.Boat}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.BumpBuoy_Boat_0.geometry}
                        material={materials.Boat}
                        position={[0.674, 1.921, 0.975]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.BumpBuoy001_Boat_0.geometry}
                        material={materials.Boat}
                        position={[-0.416, 2.342, 0.975]}
                        rotation={[0, 0, -0.289]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exhaust_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[0.352, 0.725, 0.481]}
                        rotation={[0, 0.029, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.FishHole_Boat_2_0.geometry}
                        material={materials.Boat_2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lamp_Back_P_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[0.293, 0.758, 1.875]}
                        scale={0.047}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lamp_Back_S_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[-0.424, 0.774, 1.88]}
                        scale={0.047}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lamp_Front_P_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[0.319, -1.236, 2.321]}
                        rotation={[-0.328, 0, 0]}
                        scale={0.049}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lamp_Front_S_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[-0.319, -1.236, 2.321]}
                        rotation={[0.39, 0, -Math.PI]}
                        scale={0.049}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.MastLadder_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[0.882, -1.281, 1.632]}
                        rotation={[-0.072, -0.494, -0.039]}
                        scale={[0.695, 0.615, 0.754]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Propeller_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[0, 2.502, -0.689]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Rudder_Boat_2_0.geometry}
                        material={materials.Boat_2}
                        position={[0, 2.814, -0.034]}
                    />
                </group>
            </group>
        </a.group>
    );
}

export default Volcano;
