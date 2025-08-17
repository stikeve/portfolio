import { useGLTF, useTexture } from '@react-three/drei'




const HeroLanding = (props) => {



const moniter1Texture = useTexture('/texture/Moniter1.png')
const moniter2Texture = useTexture('/texture/Moniter2.png')
const { nodes, materials } = useGLTF('/models/gaming_setup_low-poly.glb')
return (
  <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]} scale={0.349}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[-0.003, 2.671, -2.527]} rotation={[Math.PI / 2, 0, 0]} scale={0.506}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group
          position={[-0.766, 2.587, -0.992]}
          rotation={[Math.PI / 2, 0, 0.153]}
          scale={1.552}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            >
            <meshStandardMaterial attach="material" map={moniter1Texture} side={2} toneMapped={false} emissive={"white"} emissiveIntensity={.01}/>
          </mesh>
        </group>
        <group
          position={[-0.567, 2.587, 1.437]}
          rotation={[Math.PI / 2, 0, -0.324]}
          scale={1.552}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            >
            <meshStandardMaterial attach="material" map={moniter2Texture} side={2} toneMapped={false} emissive={"white"} emissiveIntensity={.01}/>
            </mesh>
        </group>
        <group position={[2.387, 0, -0.364]} rotation={[Math.PI / 2, 0, 2.27]} scale={0.82}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials['Material.013']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.002']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials['Material.006']}
          position={[-0.766, 2.587, -0.992]}
          rotation={[Math.PI / 2, 0, 0.153]}
          scale={1.552}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials['Material.006']}
          position={[-0.567, 2.587, 1.437]}
          rotation={[Math.PI / 2, 0, -0.324]}
          scale={1.552}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials['Material.007']}
          position={[0.528, 2.599, 0.413]}
          rotation={[Math.PI / 2, 0, -1.607]}
          scale={0.782}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials['Material.008']}
          position={[0.527, 2.609, -1.063]}
          rotation={[Math.PI / 2, 0, -1.405]}
          scale={0.187}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Material}
          position={[0.457, 2.595, 0]}
          scale={[0.582, 1, 1.832]}
        />
      </group>
    </group>
  </group>
)
}

useGLTF.preload('/models/gaming_setup_low-poly.glb')

export default HeroLanding
