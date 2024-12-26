import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

const ModelWithAnimation = ({ url, playAnimation }) => {
  const { scene, animations } = useGLTF(url);
  const mixer = useRef(null);
  const actions = useRef([]);

  // استفاده از useFrame برای بروزرسانی انیمیشن‌ها
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  // مقداردهی اولیه انیمیشن‌ها
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      actions.current = animations.map((clip) =>
        mixer.current.clipAction(clip)
      );
    }
  }, [animations, scene]);

  // کنترل پخش یا توقف انیمیشن
  useEffect(() => {
    if (playAnimation && actions.current.length > 0) {
      actions.current.forEach((action) => action.play());
    } else if (actions.current.length > 0) {
      actions.current.forEach((action) => action.stop());
    }
  }, [playAnimation]);

  return <primitive object={scene} scale={[5, 5, 5]} position={[0, -4, 0]} />;
};

const Kelaket = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  const toggleAnimation = () => {
    setPlayAnimation((prev) => !prev);
  };

  return (
      <Canvas  camera={{ position: [0, 2, 10], near: 0.1, far: 1000 }}>
        {/* نور محیطی */}
        <ambientLight intensity={0.5} />
        {/* نور مستقیم */}
        <directionalLight position={[5, 5, 5]} intensity={15} />
        <directionalLight position={[-5, 5, -5]} intensity={15} />
        {/* نور از طرفین */}
        <pointLight position={[10, 0, 0]} intensity={0.5} />
        <pointLight position={[-10, 0, 0]} intensity={0.5} />
        {/* نور از بالا */}
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
        />
        {/* کنترل‌های دوربین */}
        <OrbitControls enableZoom={false} />
        {/* بارگذاری مدل انیمیشنی */}
        <ModelWithAnimation url="/kelaket.gltf" playAnimation={playAnimation} />
              {/* دکمه برای کنترل انیمیشن */}
      {/* <div className="absolute top-5 left-5"> */}
        {/* <button onClick={toggleAnimation} style={{ padding: '10px 20px', fontSize: '16px' }}>
          {playAnimation ? 'توقف انیمیشن' : 'اجرای انیمیشن'}
        </button> */}
      {/* </div> */}
      </Canvas>
  
  );
};

export default Kelaket;
