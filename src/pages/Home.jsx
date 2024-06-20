import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../componets/Loader'
import Plane from '../models/Plane'
import Sky from '../models/Sky'
import HomeInfo from '../componets/HomeInfo'
// import { soundoff, soundon } from "../assets/icons";
import Volcano from '../models/Volcano'
import { OrbitControls } from '@react-three/drei'
import Boat from '../models/Boat'

import Birds_together from '../models/Birds_together'
import gifImage from '../assets/swipe.gif'; 

const Home = () => {
  // const audioRef = useRef(new Audio(sakura));
  // audioRef.current.volume = 0.4;
  // audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(3);
  const [isRotating, setIsRotating] = useState(false);
  // const [isPlayingMusic, setIsPlayingMusic] = useState(false);


  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }

  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 5000); // Hide GIF after 3 seconds

    return () => clearTimeout(timer);
  }, []);

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

      {showGif && (
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center mt-28'>
          <img src={gifImage} alt='GIF Image' className='max-h-20' />
        </div>
      )}

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5}  />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <OrbitControls/>
          <Sky isRotating={isRotating} />
          <Volcano isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} position={islandPosition} rotation={[0.1, 3.14*2*1.13, 0]} scale={islandScale} />
          <Boat /> 
          {/* Boat is actually a plane */}
          <Plane isRotating={isRotating} /> 
          <Birds_together/>

          
        </Suspense>
      </Canvas>
      {/* <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div> */}
    </section>
  )
}

export default Home
