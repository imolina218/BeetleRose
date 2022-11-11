import React, { Suspense, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import "./App.css"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import * as THREE from "three"
import Intersection from "./components/functions/IntersectObserv"
import BackGroundCircles from "./components/models/BackGroundCircles"
import BeachStage from "./components/models/BeachStage"
import Beetle from "./components/models/Beetle"
import Bootle from "./components/models/Bootle"
import Ground from "./components/models/Ground"
import HalfTorus from "./components/models/HalfTorus"
import RoseGuy from "./components/models/RoseGuy"

export const App = () => {
  gsap.registerPlugin(ScrollTrigger)

  // Camera properties
  // [0]:position [1]:rotation [2]:fov
  const cameraArrayProp = [
    [[2.7, 0.66, 0.0], [0.0, 1.58, 0.0], 70],
    [[3.0, 1.2, -0.1], [-1.58, 0.0, 0.0], 70],
    [[6.5, 0.4, 1.2], [0.1, 0.0, 0.0], 55],
    [[11.5, 0.28, 2.0], [0.0, 0.0, 0.0], 60],
    [[13.8, 0.9, 1.18], [-1.58, 0.0, 0.0], 55]
  ]

  // Point light position
  const pointLightArray = [
    [1.2, 1.0, 0.0],
    [2.4, 0.8, 0.0],
    [6.5, 1.0, 0.0],
    [11.2, 0.8, 0.8],
    [13.6, 0.8, 0.0]
  ]

  // Bootle properties
  // [0]:position [1]:rotation
  const bootleArrayProp = [
    [
      [2.67, 0.12, -0.21],
      [0.25, 0.0, 1.57]
    ],
    [
      [6.04, 0.63, -0.29],
      [1.58, 0.0, 1.62]
    ]
  ]

  // Rose properties
  // [0]:position [1]:rotation
  const roseArrayProp = [
    [
      [2.67, 0.12, -0.21],
      [0.25, 0.0, 1.57]
    ],
    [
      [6.44, -0.01, -0.19],
      [2.5, -0.01, -1.64]
    ],
    [
      [13.63, -0.15, 1.2],
      [1.57, 0.1, -0.43]
    ]
  ]

  // Beetle properties
  // [0]:position [1]:scale
  const beetleArrayProp = [
    [[-0.02, -0.01, 0], 0.61],
    [[6.8, -0.01, -0.45], 0.33],
    [[11.02, 0.0, 0.86], 0.33]
  ]

  // RoseGuy properties
  // [0]:position [1]:scale [2]:rose position [3]:rose rotation
  const roseGuyArrayProp = [
    [[0.07, 0.07, 0], 0.9, [-0.18, 1.18, 0.03], [Math.PI / 2, -0.53, 0]],
    [[11.67, -0.23, 0.9], 0.4, [-0.06, 1.18, 0.03], [Math.PI / 2, -0.02, 0]]
  ]

  // Camera
  const [cameraProperties, setCameraProperties] = useState(cameraArrayProp[0])
  // PointLight
  const [lightPosition, setLightPosition] = useState(pointLightArray[0])
  // Bootle
  const [bootleProperties, setBootleProperties] = useState(bootleArrayProp[0])
  // Rose
  const [roseProperties, setRoseProperties] = useState(roseArrayProp[0])
  // Beetle
  const [beetleProperties, setBeetleProperties] = useState(beetleArrayProp[0])
  //RoseGuy
  const [roseGuyProperties, setRoseGuyProperties] = useState(roseGuyArrayProp[0])

  const UpdateObjects = () => {
    let container = [...document.querySelectorAll(".wrap")]
    let o = { a: 0 }

    useFrame(({ camera }) => {
      gsap.to(o, {
        a: 1,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          /* snap: 1/5, */
          onUpdate: (self) => {
            return self.progress === 0
              ? (setCameraProperties(cameraArrayProp[0]), setBeetleProperties(beetleArrayProp[0]), setLightPosition(pointLightArray[0]))
              : self.progress <= 0.35
              ? (setCameraProperties(cameraArrayProp[1]),
                setBootleProperties(bootleArrayProp[0]),
                setRoseProperties(roseArrayProp[0]),
                setRoseGuyProperties(roseGuyArrayProp[0]),
                setLightPosition(pointLightArray[1]))
              : self.progress <= 0.58
              ? (setCameraProperties(cameraArrayProp[2]),
                setBootleProperties(bootleArrayProp[1]),
                setRoseProperties(roseArrayProp[1]),
                setBeetleProperties(beetleArrayProp[1]),
                setLightPosition(pointLightArray[2]))
              : self.progress <= 0.8
              ? (setCameraProperties(cameraArrayProp[3]), setBeetleProperties(beetleArrayProp[2]), setRoseGuyProperties(roseGuyArrayProp[1]), setLightPosition(pointLightArray[3]))
              : self.progress <= 1
              ? (setCameraProperties(cameraArrayProp[4]), setRoseProperties(roseArrayProp[2]), setLightPosition(pointLightArray[4]))
              : null
          }
        }
      })

      gsap.to(camera.position, {
        duration: 4,
        x: cameraProperties[0][0],
        y: cameraProperties[0][1],
        z: cameraProperties[0][2]
      })
      gsap.to(camera.rotation, {
        duration: 4,
        x: cameraProperties[1][0],
        y: cameraProperties[1][1],
        z: cameraProperties[1][2]
      })
      gsap.to(camera, {
        duration: 4,
        fov: cameraProperties[2]
      })
    })
  }

  const initialValues = { name: "", email: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.name) {
      errors.name = "Name is required!"
    } else if (values.name.length < 3 && values.name.length > 10) {
      errors.name = "Name must be more than 2 characters and less than 10 characters!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is a not valid email format!"
    }
    return errors
  }

  return (
    <>
      <div className="canvas">
        <Canvas
          dpr={[1, 2]}
          gl={{ toneMapping: THREE.NoToneMapping }}
          camera={{
            fov: cameraProperties[2],
            position: cameraProperties[0][0]
          }}
        >
          <Suspense fallback={null}>
            <UpdateObjects />
            <Intersection />
            <ambientLight />
            <directionalLight position={[5, 5, 0]} intensity={0.2} />
            <pointLight position={lightPosition} intensity={0.6} />
            <Ground />
            <BackGroundCircles />
            <Beetle
              customPosScal={{
                position: beetleProperties[0],
                scale: beetleProperties[1]
              }}
            />
            <RoseGuy
              customRoseGuyPosScal={{
                position: roseGuyProperties[0],
                scale: roseGuyProperties[1],
                rosePosition: roseGuyProperties[2],
                roseRotation: roseGuyProperties[3]
              }}
            />
            <Bootle
              customBootlePosRot={{
                position: bootleProperties[0],
                rotation: bootleProperties[1]
              }}
              customRosePosRot={{
                position: roseProperties[0],
                rotation: roseProperties[1]
              }}
            />
            <HalfTorus />
            <BeachStage />
          </Suspense>
        </Canvas>
      </div>

      <main className="container">
        <div className="wrap">
          <div className="hero">
            <h1>BeetleRose</h1>
            <h2>The fragrance that is a rose to your senses</h2>
          </div>

          <div className="about01 hidden">
            <p>BeetleRose is a fragance based on the best aromatic rose of the world</p>
            {/* <button>Learn More</button> */}
          </div>

          <div className="about02 hidden">
            <p>Genderless, Strong, Elegant and Fruity Scent of the Zephirine Drouhin Rose</p>
          </div>

          <div className="about03 hidden">
            <p>The Boldness of the Beetle to Create an Experience of Senses</p>
          </div>

          <div className="formContainer hidden">
            <form className="form" onSubmit={handleSubmit}>
              <label>Get a Chance to Win a BeetleRose at Launch</label>
              <p className="error">{formErrors.name}</p>
              <input className="inputText" type="text" name="name" placeholder="name" value={formValues.name} onChange={handleChange} />
              <p className="error">{formErrors.email}</p>
              <input className="inputText" type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
              {Object.keys(formErrors).length === 0 && isSubmit ? <p className="sent">Excellent {formValues.name}! you will receive news a few days before the launch.</p> : null}
              <button className="inputSubmit">Submit</button>
            </form>
          </div>

          <div className="footerContainer">
            <div className="footer">
              <div className="company">
                <p>
                  <span>BeetleRose</span>
                </p>
                <p>BeetleRoseInc©2022</p>
              </div>
              <div className="contact">
                <ul>
                  <li>
                    <p>1061 Av.Paris France</p>
                  </li>
                  <li>
                    <p>+54 011 5642-6548</p>
                  </li>
                  <li>
                    <p>BeetleRoseInfo@gmail.com</p>
                  </li>
                </ul>
              </div>
              <div className="about">
                <p>
                  <span>About The Company</span>
                </p>
                <p>Fragance company based on France that offers different fragrances all over the world.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
