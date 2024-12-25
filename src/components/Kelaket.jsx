import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

const ModelWithAnimation = ({ url }) => {
  const { scene, animations } = useGLTF(url);
  const mixer = useRef(null);

  // استفاده از useFrame برای آپدیت انیمیشن‌ها در هر فریم
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta); // بروزرسانی انیمیشن‌ها
    }
  });

  // برای اجرای انیمیشن‌ها
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play(); // اجرای انیمیشن
        action.setLoop(THREE.LoopRepeat, Infinity); // انیمیشن‌ها تکرار شوند
      });
    }
  }, [animations, scene]);

  return <primitive object={scene} scale={[2, 2, 2]} />;

};

const Kelaket = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} /> {/* نور محیطی برای روشن کردن کل صحنه */}
      <directionalLight position={[5, 10, 5]} intensity={1} /> {/* نور مستقیم */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      
      {/* کنترل‌های دوربین */}
      <OrbitControls enableZoom={false} /> {/* غیرفعال کردن زوم صفحه */}
      
      {/* بارگذاری مدل انیمیشنی Robot */}
      <ModelWithAnimation url="/kelaket.gltf" />
    </Canvas>
  );
};

export default Kelaket;
