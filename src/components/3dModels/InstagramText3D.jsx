import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls, Environment, Center } from "@react-three/drei";
import * as THREE from "three";

const RotatingText = () => {
  const textRef = useRef();

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json" // فونت سه‌بعدی
        size={4} // متن بزرگ‌تر شده
        height={3} // افزایش ضخامت متن
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1} // افزایش ضخامت لبه‌ها
        bevelSize={0.04}
        bevelSegments={5}
        position={[12, 3, 0]} // تغییر موقعیت به سمت راست
        rotation={[0, Math.PI / 10, 0]}
      >
        @kalootmedia
        <meshStandardMaterial
          attach="material"
          color="#cf7777" // صورتی اینستاگرام
          emissive="#8134af" // نوردهی بنفش
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
      <Canvas camera={{ position: [0, 4, 15], fov: 50 }}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <OrbitControls enableZoom={false} enablePan={false} />

        <RotatingText />
      </Canvas>
    </div>
  );
};

export default InstagramText3D;
