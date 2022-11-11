import { React, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import "./App.css"
import { Loader } from "@react-three/drei"

createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </>
)
