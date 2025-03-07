/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 shipmodel.gltf 
Author: dandruffkielbasa (https://sketchfab.com/dandruffkielbasa)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/final-fantasy-ship-lowpoly-test-1ae838ac25474e07abaa208c39a79d70
Title: Final Fantasy Ship Lowpoly Test
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/LOWRESfinal_fantasy_ship_lowpoly_test.glb");
  return (
    <group {...props} dispose={null} scale={[0.1, 0.1, 0.1]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.ffship1_lq}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.ffship1_lq}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.ffship1_lq}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.ffship1_lq}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.ffship1_lq}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.ffship1_lq}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.ffship1_lq}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.ffship1_lq}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/LOWRESfinal_fantasy_ship_lowpoly_test.glb");
