import { Float, useGLTF } from '@react-three/drei'

const FillerComp4 = (props) => {


const { nodes, materials } = useGLTF('/models/graduation.glb')
return (
    <Float floatIntensity={1} >
      <group position={[14.1,-.9,0]} {...props} scale={.31} dispose={null} rotation={[Math.PI /64, Math.PI , Math.PI / 64]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['Material.003']}
        />
        </group>
      <group position={[12,0,0]} rotation={[Math.PI / 16, Math.PI / 2, 0]} scale={.26}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        position={[0, 1.167, 0]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[3.33, 1.243, 3.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['Material.002']}
        position={[0, 3.642, 0]}
        scale={[5.968, 1, 0.481]}
      />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/graduation.glb')

export default FillerComp4
