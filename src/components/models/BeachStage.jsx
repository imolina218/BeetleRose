import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/Models/BeachStage.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[11.52, 0.95, -1.71]}>
        <mesh geometry={nodes["maarten-van-den-heuvel-7RyfX2BHoXU-unsplash001_1"].geometry} material={materials["Chrome.003"]} />
        <mesh geometry={nodes["maarten-van-den-heuvel-7RyfX2BHoXU-unsplash001_2"].geometry} material={materials["maarten-van-den-heuvel-7RyfX2BHoXU-unsplash"]} />
      </group>
    </group>
  )
}

useGLTF.preload("/Models/BeachStage.glb")
