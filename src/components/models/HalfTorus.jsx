import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/HalfTorus.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Torus003.geometry} material={materials.HalfTorus} position={[0, 0, 1.4]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload("/models/HalfTorus.glb")
