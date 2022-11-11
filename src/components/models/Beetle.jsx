import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/Beetle.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={props.customPosScal.position} rotation={[0, Math.PI / 2, 0]} scale={props.customPosScal.scale}>
        <mesh geometry={nodes.Plane030.geometry} material={materials.Beetle} />
        <mesh geometry={nodes.Plane030_1.geometry} material={materials["Headlight Glass.001"]} />
        <mesh geometry={nodes.Plane030_2.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Plane030_3.geometry} material={materials["Chrome.Rough"]} />
        <mesh geometry={nodes.Plane030_4.geometry} material={materials.Windows} />
      </group>
    </group>
  )
}
