import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

const ModelWithAnimation = ({ url, playAnimation, onAnimationEnd }) => {
  const { scene, animations } = useGLTF(url);
  const mixer = useRef(null);
  const actions = useRef([]);
  const modelRef = useRef(); // مرجع برای چرخش مدل
  const [animationLength, setAnimationLength] = useState(0);

  // چرخش مداوم
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // سرعت چرخش (0.01 را می‌توانید تغییر دهید)
    }
    if (mixer.current) {
      mixer.current.update(0.01); // آپدیت انیمیشن‌ها
    }
  });

  // مقداردهی اولیه انیمیشن‌ها
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      actions.current = animations.map((clip) => mixer.current.clipAction(clip));
      if (animations[0]) {
        setAnimationLength(animations[0].duration);
      }
    }
  }, [animations, scene]);

  // کنترل پخش یا توقف انیمیشن
  useEffect(() => {
    if (playAnimation && actions.current.length > 0) {
      actions.current.forEach((action) => action.reset().play());
      const timer = setTimeout(() => {
        actions.current.forEach((action) => action.stop());
        onAnimationEnd();
      }, animationLength * 1000);
      return () => clearTimeout(timer);
    }
  }, [playAnimation, animationLength, onAnimationEnd]);

  return (
    <primitive
      ref={modelRef} // افزودن مرجع به مدل
      object={scene}
      scale={[4, 4, 4]}
      position={[0, -5, 0]}
    />
  );
};

const Kelaket = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  const handleAnimationEnd = () => {
    setPlayAnimation(false);
  };

  const handleClick = () => {
    if (!playAnimation) {
      setPlayAnimation(true);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="rounded-3xl w-[50%] h-72 animated-background bg-gradient-to-r from-[#ffb71b] via-[#ffae00] to-[#ff8521] shadow-[0_0_20px_5px_rgb(255,174,0)] mt-2 mb-12"
        onClick={handleClick}
      >
        <Canvas camera={{ position: [0, 2, 10], near: 0.1, far: 1000 }}>
          {/* نور محیطی */}
          <ambientLight intensity={0.5} />
          {/* نور مستقیم */}
          <directionalLight position={[5, 5, 5]} intensity={25} />
          <directionalLight position={[-5, 5, -5]} intensity={25} />
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
          <ModelWithAnimation
            url="/kelaket.gltf"
            playAnimation={playAnimation}
            onAnimationEnd={handleAnimationEnd}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Kelaket;