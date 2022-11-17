import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import Scene from "./Scene";

export default function App() {
  return (
    <>
      <Canvas shadows flat linear>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
