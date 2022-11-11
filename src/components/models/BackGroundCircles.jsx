import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/BackgroundCircles.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials.BackCircles} position={[-5, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.2, 1]} />
    </group>
  )
}

useGLTF.preload("/models/BackgroundCircles.glb")
