import { easing } from 'maath';
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const CursorCam = ({children}) => {
  
  const grouprRef = useRef();

  
  useFrame((state ,delta) => {
    // easing.damp3(state.camera.position, [0,0,20] ,0.25 , delta);
    easing.dampE(grouprRef.current.rotation , [-state.pointer.y/3 , -state.pointer.x/5 , 0], 0.25, delta);
    })


    return (
    <group ref={grouprRef}>
        {children}
    </group>
  )
}

export default CursorCam
