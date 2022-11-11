import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/Models/Ground.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane_1.geometry} material={materials.Ground02} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials.GroundBase} />
    </group>
  )
}

useGLTF.preload("/Models/Ground.glb")
