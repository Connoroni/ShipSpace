"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Image from "next/image";

import styles from "./home.module.css";
import FFragnarokmodel from "../components/FFragnarokmodel";
import SWstardestroyermodel from "../components/SWstardestroyermodel";
export default function HomePage() {
  return (
    <>

 <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Galactic Starship Database</h1>
                <p className={styles.subtitle}>Explore and upload starships from across the multiverse</p>
            </header>

      {/* <div className="canvas-container">
        <div className="canvas1">
          <Canvas>
            <ambientLight intensity={2} />
            <OrbitControls />
            <Suspense fallback={null}>
              <FFragnarokmodel />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div> */}

        <div className="canvas2">
          <Canvas>
            <ambientLight intensity={2} />
            <OrbitControls />
            <Suspense fallback={null}>
              <SWstardestroyermodel />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>

          <main className={styles.mainPanel}>
                <section className={styles.infoCard}>
                    <h2>Featured Starship</h2>
                    <p>Discover iconic vessels from your favorite universes.</p>
                    
                </section>
                </main>

 <section className={styles.controls}>
                    <button className={styles.uploadButton}>Upload Starship</button>
                    <button className={styles.exploreButton}>Explore Database</button>
                </section>
        
        </div>
        </div>
      {/* </div> */}
    </>
  );
}