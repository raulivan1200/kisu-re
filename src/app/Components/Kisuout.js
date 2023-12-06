import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three'

export default function Kisuout(props) {
  const { nodes, materials } = useGLTF('/kisuout-transformed.glb')

  // Create a custom pink glow material
  const pinkGlowMaterial = useRef()
  const glowColor = '#ff00ff' // Pink color

  if (pinkGlowMaterial.current) {
    pinkGlowMaterial.current.emissive.set(glowColor)
  }

  return (
    <group {...props} dispose={null}>
      <group position={[-0.08, 0, -0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Curve003.geometry} material={materials.Material} />
        <mesh geometry={nodes.Curve003_1.geometry} material={pinkGlowMaterial.current} />
      </group>
    </group>
  )
}

useGLTF.preload('/kisuout-transformed.glb')
