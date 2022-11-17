import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { LayerMaterial, Depth } from "lamina";

export default function Back() {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += delta;
  });
  return (
    <mesh ref={mesh} scale={400}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial color="#f0aed2" attach="material" side={THREE.BackSide}>
        <Depth
          colorA="pink"
          colorB="#00aaff"
          alpha={0.25}
          mode="multiply"
          near={0}
          far={300}
          origin={[10, 10, 10]}
        />
        <Depth
          colorA="#ff0000"
          colorB="#00aaff"
          alpha={0.25}
          mode="multiply"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
}
