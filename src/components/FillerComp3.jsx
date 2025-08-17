import { Float, useGLTF } from '@react-three/drei'

const FillerComp3 = (props) => {


const { nodes, materials } = useGLTF('/models/agile_scrum_c.glb')
return (
    <Float floatIntensity={1} >
      <group position={[-11,0,0]} {...props} scale={.8} dispose={null} rotation={[-Math.PI / 2, 0, 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.006']}
        />
      </group>
    </Float>
  )
}
useGLTF.preload('/models/agile_scrum_c.glb')

export default FillerComp3
