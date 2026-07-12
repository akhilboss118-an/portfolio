'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Sphere({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2
    meshRef.current.position.x += (mouse.x * 0.5 - meshRef.current.position.x) * 0.02
    meshRef.current.position.y += (-mouse.y * 0.5 - meshRef.current.position.y) * 0.02
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 4]} />
        <MeshDistortMaterial
          color="#7dd3fc"
          emissive="#60a5fa"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          wireframe={false}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 200 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const p = i / count
      const radius = 4 + ((p * 137) % 3)
      const theta = ((p * 283) % 1) * Math.PI * 2
      const phi = ((p * 173) % 1) * Math.PI * 2
      pos[i * 3] = Math.sin(theta) * Math.cos(phi) * radius
      pos[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * radius
      pos[i * 3 + 2] = Math.cos(theta) * radius
    }
    return pos
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#7dd3fc" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Rings() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.1
    groupRef.current.rotation.x += delta * 0.05
  })

  const ringData = [
    { radius: 2.8, color: '#7dd3fc', opacity: 0.3 },
    { radius: 3.2, color: '#60a5fa', opacity: 0.2 },
    { radius: 3.6, color: '#7dd3fc', opacity: 0.15 },
  ]

  return (
    <group ref={groupRef}>
      {ringData.map((ring, i) => (
        <mesh key={i} rotation-x={Math.PI / 2 + (i * 0.3)} rotation-y={i * 0.5}>
          <ringGeometry args={[ring.radius - 0.02, ring.radius, 64]} />
          <meshBasicMaterial color={ring.color} transparent opacity={ring.opacity} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#7dd3fc" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#60a5fa" />
      <Sphere mouse={mouse} />
      <Particles />
      <Rings />
    </>
  )
}

export function GlowingSphere({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <Scene mouse={mouse} />
    </Canvas>
  )
}
