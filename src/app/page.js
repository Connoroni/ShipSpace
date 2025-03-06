"use client"

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Image from "next/image";
import FFragnarokmodel from "../components/FFragnarokmodel";
import SWstardestroyermodel from "../components/SWstardestroyermodel";


export default function HomePage() {
  return (
    <>
      <div className="info">
        <h1>Home page</h1>
        <p>some info</p>
      </div>

      <div className="canvas-container">
        <div className="canvas1">
          <Canvas>
            <ambientLight intensity={2} />
            <OrbitControls />
            <Suspense fallback={null}>
              <FFragnarokmodel />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>

        <div className="canvas2">
          <Canvas>
            <ambientLight intensity={2} />
            <OrbitControls />
            <Suspense fallback={null}>
              <SWstardestroyermodel />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      </div>
    </>
  );
}