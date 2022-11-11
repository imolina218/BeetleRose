import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/RoseGuy.glb")
  return (
    <group ref={group} {...props} dispose={null} position={props.customRoseGuyPosScal.position} scale={props.customRoseGuyPosScal.scale}>
      <group position={[0.07, 0.65, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.06}>
        <group position={[-0.02, -0.22, -6.08]} rotation={[-2.23, 0.06, 0.16]}>
          <group position={[0, 1.27, -0.03]} rotation={[0.1, -0.02, -0.05]}>
            <group position={[0, 1.48, 0]} rotation={[0.26, -0.01, -0.05]}>
              <group position={[0, 1.7, 0]} rotation={[0.26, -0.01, -0.05]}>
                <group position={[0, 1.91, 0]} rotation={[0.19, 0.05, -0.09]}>
                  <group position={[0, 1.13, 0.28]} rotation={[-0.21, -0.12, 0.16]} />
                </group>
                <group position={[0.8, 1.56, -0.01]} rotation={[1.54, -0.53, -1.68]}>
                  <group position={[0, 1.69, 0]} rotation={[0.66, 0.16, 0.12]}>
                    <group position={[0, 3.23, 0]} rotation={[0.03, 0.12, 1.52]}>
                      <group position={[0, 3.63, 0]} rotation={[0.08, 1.37, 0.22]}>
                        <group position={[-0.37, 0.61, 0.16]} rotation={[0.68, -0.05, 0.58]}>
                          <group position={[0.03, 0.59, 0]} rotation={[-0.38, 0.46, -0.15]}>
                            <group position={[-0.02, 0.51, 0]} rotation={[0, 0, 0.01]} />
                          </group>
                        </group>
                        <group position={[-0.47, 1.79, -0.01]} rotation={[0.34, -0.08, 0.12]}>
                          <group position={[0, 0.42, 0]} rotation={[0.6, -0.01, 0.01]}>
                            <group position={[0, 0.39, 0]} rotation={[0, 0, 0.01]} />
                          </group>
                        </group>
                        <group position={[-0.11, 1.8, 0]} rotation={[0.25, 0.04, 0]}>
                          <group position={[0, 0.47, 0]} rotation={[0.41, 0, 0.02]}>
                            <group position={[0, 0.46, 0]} />
                          </group>
                        </group>
                        <group position={[0.17, 1.8, -0.04]} rotation={[0.12, -0.03, -0.04]}>
                          <group position={[0, 0.42, 0]} rotation={[0.38, 0.01, 0.03]}>
                            <group position={[0, 0.42, 0]} />
                          </group>
                        </group>
                        <group position={[0.41, 1.65, -0.01]} rotation={[-0.01, -0.07, -0.01]}>
                          <group position={[0, 0.34, 0]} rotation={[0.45, 0.03, 0.08]}>
                            <group position={[0, 0.3, 0]} rotation={[0, 0, -0.01]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group position={[-0.8, 1.56, -0.01]} rotation={[1.57, 0.52, 1.62]}>
                  <group position={[0, 1.69, 0]} rotation={[0.7, -0.42, -0.38]}>
                    <group position={[0, 3.23, 0]} rotation={[0.04, 0, -0.97]}>
                      <group position={[0, 3.57, 0]} rotation={[-0.65, -1.04, -0.7]}>
                        <group position={[0.38, 0.67, 0.14]} rotation={[0.56, -0.04, -0.61]}>
                          <group position={[-0.02, 0.62, 0]} rotation={[-0.09, 0.44, 0.28]}>
                            <group position={[0.03, 0.5, 0]} rotation={[0, 0, -0.09]} />
                          </group>
                        </group>
                        <group position={[0.47, 1.85, -0.01]} rotation={[0.78, 0.09, -0.11]}>
                          <group position={[0, 0.43, 0]} rotation={[0.79, 0.01, -0.01]}>
                            <group position={[0, 0.4, 0]} />
                          </group>
                        </group>
                        <group position={[0.12, 1.9, 0.01]} rotation={[0.45, -0.01, -0.12]}>
                          <group position={[0, 0.46, 0]} rotation={[0.76, -0.01, -0.04]}>
                            <group position={[0, 0.44, 0]} />
                          </group>
                        </group>
                        <group position={[-0.17, 1.87, -0.05]} rotation={[0.23, 0.02, -0.11]}>
                          <group position={[0, 0.43, 0]} rotation={[0.74, -0.02, -0.05]}>
                            <group position={[0, 0.4, 0]} />
                          </group>
                        </group>
                        <group position={[-0.42, 1.7, 0]} rotation={[0.1, 0, -0.09]}>
                          <group position={[0, 0.35, 0]} rotation={[0.63, -0.05, -0.1]}>
                            <group position={[0, 0.29, 0]} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group position={[1.23, -0.71, -0.07]} rotation={[-1, 0.25, -2.99]}>
            <group position={[0, 7.07, 0]} rotation={[-1.63, -0.18, -0.2]}>
              <group position={[0, 6.05, 0]} rotation={[0.97, 0.43, 0.06]}>
                <group position={[0, 2.29, 0]} rotation={[0.56, -0.14, 0.09]} />
              </group>
            </group>
          </group>
          <group position={[-1.23, -0.71, -0.11]} rotation={[-0.76, 0.09, 2.92]}>
            <group position={[0, 7.07, 0]} rotation={[-0.67, 0.14, 0.05]}>
              <group position={[0, 6.06, 0]} rotation={[1.18, -0.15, 0.02]}>
                <group position={[0, 2.25, 0]} rotation={[0.56, 0.14, -0.09]} />
              </group>
            </group>
          </group>
        </group>
        <mesh geometry={nodes.male_elegantsuit01obj003.geometry} material={materials.Suit} />
        <mesh geometry={nodes.male_genericobj003.geometry} material={materials.Skin} />
        <mesh geometry={nodes.shoes03obj003.geometry} material={materials.Shoes} />
      </group>
      <mesh
        geometry={nodes.Pink_rose_retopo008.geometry}
        material={materials.Pink_rose_retopo}
        position={props.customRoseGuyPosScal.rosePosition}
        rotation={props.customRoseGuyPosScal.roseRotation}
        scale={0.78}
      />
    </group>
  )
}

useGLTF.preload("/models/RoseGuy.glb")
