import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect, useRef } from 'react';
import {  PerspectiveCamera } from '@react-three/drei';
import HeroLanding from '../components/HeroLanding';
import CanvasLoader from '../components/CanvasLoader';
import FillerComp1 from '../components/FillerComp1';
// import { calculateSizes } from '../constants';
// import { Leva, useControls } from 'leva';
import Floor from '../components/Floor';
import FillerComp2 from '../components/FillerComp2';
import FillerComp3 from '../components/FillerComp3';
import FillerComp4 from '../components/FillerComp4';
import CursorCam from '../components/CursorCam';
import Button from '../components/Button';


const Hero = () => {

    // const controls = useControls('HeroLoading', 
    //     {
    //         rotationX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         positionX: {
    //             value: 0,
    //             min: -50,
    //             max: 50
    //         },
    //         positionY: {
    //             value: 0,
    //             min: -50,
    //             max: 50
    //         },
    //         positionZ: {
    //             value: 0,
    //             min: -50,
    //             max: 50
    //         },
    //         scale: {
    //             value: 100,
    //             min: 1,
    //             max: 200
    //         }
    //     }
    // );

  
    return (
      <section id='home' className="min-h-screen w-full flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="text-2xl sm:text-3xl font-generalsans text-white text-center">
            Hi, I'm <span className="font-bold">Ashutosh</span>
          </p>
          <p className="text-2xl text-gray_gradient text-center"> 
            Software Engineer | Masters Graduate
          </p>
          {/* Resume Links */}
          {/* <div className="flex justify-center items-center gap-3 text-white z-10"  >
            <span className="text-sm sm:text-base">Resume :</span>
            <a 
              href="https://drive.google.com/file/d/1SlyqehVuhxRIKKp5z7yK17zNWXhvMjTc/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base hover:text-gray_gradient transition-colors"
            >
              View
            </a>
            <span className="text-sm sm:text-base">/</span>
            <a 
              href="https://drive.usercontent.google.com/u/0/uc?id=1SlyqehVuhxRIKKp5z7yK17zNWXhvMjTc&export=download" 
              download
              className="text-sm sm:text-base hover:text-gray_gradient transition-colors"
            >
              Download
            </a>
          </div> */}
        </div>
      <div className='w-full h-full absolute inset-0'> 
      {/* <Leva /> */}
      <Canvas className='w-full h-full'>
      <Suspense fallback={<CanvasLoader/>}>
      <PerspectiveCamera makeDefault position={[0, 3, 25]}  />
      <CursorCam>
      <HeroLanding 
      scale={4} 
      position ={[0, -1, 0]} //index not working 
      rotation= {[-3.5, 4.7 ,2.5]}

      // scale={controls.scale}
      // position={[controls.positionX, controls.positionY, controls.positionZ]}
      // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
      />
      <Floor 
      scale={4}
      position={[0,-1,-5]}
      rotation={[1.3,4.7,1.1]}
      />
      </CursorCam>
      <group>
      <FillerComp1 />
      <FillerComp2 />
      <FillerComp3 />
      <FillerComp4 />
      </group>
      {/* <OrbitControls enableZoom enablePan /> */}
      <ambientLight intensity={1} />
      <directionalLight intensity={.7} position={[0, 4 ,-4]} color={"#0000FF"}/>?
      <directionalLight intensity={.7} position={[0 ,2 ,-5]} color={"#FF5733"}/>
      {/* <directionalLight intensity={3} position={[-44, -12, 32]} /> */}

      </Suspense>
      </Canvas> 
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
      <a href="#about" className="w-fit">
      <Button 
      name="Let's grow together" 
      isBeam 
      containerClass="sm:w-fit w-full sm:min-w-96 hover:shadow-[0_0_10px_green] active:shadow-[0_0_10px_red]"
      />
      </a>
      </div>

    </section>
    );
}

export default Hero;