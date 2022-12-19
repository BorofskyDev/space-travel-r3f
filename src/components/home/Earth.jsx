import { useRef } from 'react'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import EarthDayMap from '../../assets/textures/Earth/8k_earth_daymap.jpg'
import EarthCloudsMap from '../../assets/textures/Earth/8k_earth_clouds.jpg'
import EarthNormalMap from '../../assets/textures/Earth/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../../assets/textures/Earth/8k_earth_specular_map.jpg'

function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  )
  const earthRef = useRef()
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 12
    cloudsRef.current.rotation.y = elapsedTime / 10
  })

  return (
    <>
      <pointLight color='#f6f3ea' position={[2, 0, 5]} intensity={1.2} />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[0.71, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[0.7, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  )
}

export default Earth
