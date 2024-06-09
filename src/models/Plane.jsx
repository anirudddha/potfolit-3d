import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from '../assets/3d/bird.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const action = actions["Take 001"];
    action.play();
    
    // Set the effective time scale based on isRotating
    if (isRotating) {
      action.setEffectiveTimeScale(1); // Increase speed
    } else {
      action.setEffectiveTimeScale(0.5); // Decrease speed
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref} scale={0.0013} position={[-0.5, -0.5, 3]} rotation={[Math.PI * 2, Math.PI * 2, Math.PI * 2]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
