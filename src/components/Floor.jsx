import { useGLTF } from '@react-three/drei'



const Floor = (props) => {



const { nodes, materials } = useGLTF('/models/round_platform.glb')
return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder1_defaultPolygonShader1_0.geometry}
        material={materials.defaultPolygonShader1}
        scale={0.01}
      />
    </group>
  )
}


useGLTF.preload('/models/round_platform.glb')

export default Floor
