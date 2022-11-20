import { Suspense, createContext, useContext, useRef } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import Scene from "./Scene";
import { RenderPixelatedPass } from "three-stdlib";
import Donut from "./Donut";
import { proxy } from "valtio";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const state = useRef(proxy({ pixels: 4, ascii: false })).current;
  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};

extend({ RenderPixelatedPass });

export default function App() {
  return (
    <MyProvider>
      <Canvas shadows flat linear>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
      <div style={{ width: "100vw", position: "fixed", top: "80%" }}>
        <center>
          <Donut />
        </center>
      </div>
    </MyProvider>
  );
}
