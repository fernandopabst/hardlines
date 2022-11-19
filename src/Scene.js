import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera, Center, Float, Effects } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Back from "./Back";
import * as THREE from "three";
import { useMemo } from "react";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/nSIxqhxKRLMgTVMK/scene.splinecode"
  );
  const { size, scene, camera } = useThree();
  const resolution = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  );

  return (
    <>
      <Effects>
        <renderPixelatedPass args={[resolution, 4, scene, camera]} />
      </Effects>
      <Back />
      <color attach="background" args={["#787a7d"]} />
      <Center>
        <Float>
          <group
            name="hardlines"
            position={[134.17, 223.1, 186.87]}
            scale={[3.35, 3.46, 3.35]}
          >
            <mesh
              name="sweet nectar"
              geometry={nodes["sweet nectar"].geometry}
              material={materials["sweet nectar Material"]}
              castShadow
              receiveShadow
              position={[-17.64, 5.55, -3.87]}
              scale={[0.3, 0.29, 0.3]}
            />
            <mesh
              name="body-ody"
              geometry={nodes["body-ody"].geometry}
              material={nodes["body-ody"].material}
              castShadow
              receiveShadow
              position={[0, -4.34, -0.42]}
              scale={0.43}
            />
            <mesh
              name="pupil"
              geometry={nodes.pupil.geometry}
              material={materials["pupil Material"]}
              castShadow
              receiveShadow
              position={[-12.2, -9.02, 30.69]}
              scale={[0.3, 0.29, 0.3]}
            />
            <mesh
              name="nother pupil"
              geometry={nodes["nother pupil"].geometry}
              material={materials["nother pupil Material"]}
              castShadow
              receiveShadow
              position={[8.02, -6.02, 22.29]}
              scale={[0.3, 0.29, 0.3]}
            />
            <mesh
              name="browlies"
              geometry={nodes.browlies.geometry}
              material={nodes.browlies.material}
              castShadow
              receiveShadow
              position={[0, 0.61, -2.67]}
              scale={0.43}
            />
            <mesh
              name="shaft!"
              geometry={nodes["shaft!"].geometry}
              material={nodes["shaft!"].material}
              castShadow
              receiveShadow
              position={[0, -0.29, -0.87]}
              scale={0.43}
            />
            <mesh
              name="plaque"
              geometry={nodes.plaque.geometry}
              material={nodes.plaque.material}
              castShadow
              receiveShadow
              position={[-0.09, 5.07, 0.09]}
              scale={0.43}
            />
            <mesh
              name="left h"
              geometry={nodes["left h"].geometry}
              material={nodes["left h"].material}
              castShadow
              receiveShadow
              scale={0.43}
            />
            <mesh
              name="right a"
              geometry={nodes["right a"].geometry}
              material={nodes["right a"].material}
              castShadow
              receiveShadow
              scale={0.43}
            />
            <mesh
              name="$brand$"
              geometry={nodes.$brand$.geometry}
              material={nodes.$brand$.material}
              castShadow
              receiveShadow
              position={[0.89, 3.72, -0.23]}
              scale={0.43}
            />
            <mesh
              name="eye"
              geometry={nodes.eye.geometry}
              material={nodes.eye.material}
              castShadow
              receiveShadow
              scale={0.43}
            />
            <mesh
              name="nother eye"
              geometry={nodes["nother eye"].geometry}
              material={nodes["nother eye"].material}
              castShadow
              receiveShadow
              position={[-0.36, -0.08, 0.6]}
              scale={0.43}
            />
            <mesh
              name="plumpy snoot"
              geometry={nodes["plumpy snoot"].geometry}
              material={nodes["plumpy snoot"].material}
              castShadow
              receiveShadow
              position={[0.3, 0.87, 0]}
              scale={0.43}
            />
            <mesh
              name="filler"
              geometry={nodes.filler.geometry}
              material={nodes.filler.material}
              castShadow
              receiveShadow
              position={[0.63, -1.03, -1.09]}
              scale={0.43}
            />
            <mesh
              name="lippy"
              geometry={nodes.lippy.geometry}
              material={materials["lippy Material"]}
              castShadow
              receiveShadow
              position={[-1.87, -21.4, 27.26]}
              rotation={[2.96, -0.27, -1.63]}
              scale={[0.23, 0.36, 0.35]}
            />
            <mesh
              name="badonkadonk"
              geometry={nodes.badonkadonk.geometry}
              material={materials["badonkadonk Material"]}
              castShadow
              receiveShadow
              position={[-18.19, -48.71, -2.84]}
              scale={[0.3, 0.29, 0.3]}
            />
          </group>
        </Float>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.6}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          color="#fbf8f5"
          position={[37.43, 83.06, 842.06]}
          scale={[1, 1, 0.22]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={1.67}
          far={100000}
          near={-100000}
          position={[287.44, 290.9, 1035.09]}
          rotation={[-0.11, 0.2, 0.02]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.77}
          color="#f3e8c2"
        />
      </Center>
    </>
  );
}
