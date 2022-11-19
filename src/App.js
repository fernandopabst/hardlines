import { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import Scene from "./Scene";
import { RenderPixelatedPass } from "three-stdlib";

extend({ RenderPixelatedPass });

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
