import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, Environment, Center } from "@react-three/drei";
import * as THREE from "three";

const RotatingText = () => {
  const textRef = useRef();

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={3}
        height={3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.04}
        bevelSegments={5}
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 10, 0]}
      >
        @kalootmedia
        <meshStandardMaterial
          attach="material"
          color="#cf7777"
          emissive="#8134af"
          roughness={0.4}
          metalness={0.8}
        />
      </Text3D>
    </Center>
  );
};

const InstagramText3D = () => {
  return (
    <div className="w-full">
      <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <RotatingText />
      </Canvas>
    </div>
  );
};

export default InstagramText3D;
