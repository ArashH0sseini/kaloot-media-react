import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import whiteboard from "../../assets/models/whiteboard.glb";

useGLTF.preload(whiteboard);

const ModelWithAnimation = ({ url, triggerAnimation, isPlaying, initialFrame }) => {
  const { scene, animations } = useGLTF(url);
  const mixer = useRef(null);
  const actions = useRef([]);
  const modelRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      actions.current = animations.map((clip) => mixer.current.clipAction(clip));

      actions.current.forEach((action) => {
        action.stop();
        action.reset();
      });

      if (actions.current[0] && initialFrame !== undefined) {
        actions.current[0].reset();
        actions.current[0].play();
        actions.current[0].paused = true;
        actions.current[0].time = initialFrame;
      }
    }
  }, [animations, scene, initialFrame]);

  useEffect(() => {
    if (isPlaying && actions.current.length > 0) {
      const currentAction = actions.current[currentAnimation];
      currentAction.paused = false;
    } else if (!isPlaying && actions.current.length > 0) {
      const currentAction = actions.current[currentAnimation];
      currentAction.paused = true;
    }
  }, [isPlaying, currentAnimation]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[3.6, 3.6, 3.6]}
      position={[0, -3, 0]}
      rotation={[0, Math.PI / -7, 0]}
    />
  );
};

const WhiteBoard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8">
      <div className="w-full h-[440px]">
        <Canvas camera={{ position: [0, 3, 15], near: 0.1, far: 1000 }}>
          <ambientLight intensity={0.7} />
          <Environment preset="sunset" />
          <directionalLight position={[5, 5, 5]} intensity={20} />
          <directionalLight position={[-5, 5, -5]} intensity={20} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[0, 20, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          <ModelWithAnimation
            url={whiteboard}
            isPlaying={isPlaying}
            initialFrame={0}
          />
        </Canvas>
      </div>

      <div
        onClick={handleButtonClick}
        className="w-4/5 flex items-center justify-center p-1 rounded-xl hover:scale-110 transform 
        transition duration-300 animated-background bg-gradient-to-r from-[#ffb71b] via-[#ffae00] to-[#ff7301] shadow-[0_0_20px_5px_rgb(255,174,0)]"
      >
        <button
          className="w-full p-2 space-x-reverse border-4 rounded-xl bg-black/20 backdrop-blur-lg
          text-white flex items-center justify-center overflow-hidden border-t-transparent 
          border-r-transparent border-b-transparent border-l-transparent"
        >
          <span className="font-semibold text-xl font-staatliches">
            {isPlaying ? "Stop Animation" : "Start Animation"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhiteBoard;
