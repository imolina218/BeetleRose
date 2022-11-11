import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/Bootle.glb")
  return (
    /* position={[2.67, 0.12, -0.21]} rotation={[0.25, 0, 1.57]} scale={0.46} */
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Pink_rose_retopo003.geometry}
        material={materials.Bootle}
        position={props.customBootlePosRot.position}
        rotation={props.customBootlePosRot.rotation}
        scale={0.46}
      />
      <mesh
        geometry={nodes.Pink_rose_retopo004.geometry}
        material={materials.Pink_rose_retopo}
        position={props.customRosePosRot.position}
        rotation={props.customRosePosRot.rotation}
        scale={0.5}
      />
    </group>
  )
}

