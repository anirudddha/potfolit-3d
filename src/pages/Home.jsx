import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../componets/Loader'
import Island from '../models/Island'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Sky from '../models/Sky'
import HomeInfo from '../componets/HomeInfo'
import { soundoff, soundon } from "../assets/icons";
import Volcano from '../models/Volcano'
import sakura from "../assets/sakura.mp3";
import { Environment, OrbitControls, SpotLight } from '@react-three/drei'
import Boat from '../models/Boat'
import LIghtHouse from '../models/LIghtHouse'
import Cloud from '../models/Cloud'
import Dragon from '../models/Dragon'
import Birds_together from '../models/Birds_together'

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(3);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const [isLightHouse,setLightHouse] = useState(0);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);


  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5}  />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          {/* <SpotLight position={[-5,-2,-1]} intensity={5} angle={3.14*2}/> */}
          {/* <OrbitControls/> */}
          {/* <Bird rotationStarted={rotationStarted}/> */}
          <Sky isRotating={isRotating} />
          {/* <Loader/> */}
          <Volcano LIghtHouse={LIghtHouse} setLightHouse={setLightHouse} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} position={islandPosition} rotation={[0.1, 3.14*2*1.13, 0]} scale={islandScale} />
          {/* <LIghtHouse isLightHouse={isLightHouse}/> */}
          <Boat />
          {/* <Dragon isRotating={isRotating}/> */}
          {/* <Island  isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} position={islandPosition} rotation={[0.1, 4.7077, 0]} scale={islandScale} />  */}
          <Plane isRotating={isRotating} /> 
          <Birds_together/>
          {/* <Environment preset='sunset'/> */}
          {/* <Cloud/> */}
          
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home
