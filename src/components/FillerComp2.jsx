import { Float, useGLTF } from '@react-three/drei'

const FillerComp2 = (props) => {

const { nodes, materials } = useGLTF('/models/stackoverflow_keyboard.glb')
return (
  <Float floatIntensity={1} >
    <group position={[-14,7,0]} rotation={[1.8,Math.PI/64,-0.5]} {...props} scale={.8} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Matte_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Off_White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Base_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.Outline}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Cable}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.Metal_Case}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.USB_Black}
      />
    </group>
  </Float>
)
}
useGLTF.preload('/models/stackoverflow_keyboard.glb')

export default FillerComp2
