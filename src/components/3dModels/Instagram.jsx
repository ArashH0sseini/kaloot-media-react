import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import { useInView } from "react-intersection-observer";
import instagramModel from "../../assets/models/insta.gltf";

const AnimatedModel = ({ url, playAnimation }) => {
  const { scene, animations } = useGLTF(url);
  const mixer = useRef(null);
  const modelRef = useRef();
  const [shouldRotate, setShouldRotate] = useState(false);

  useEffect(() => {
    const applyMaterials = () => {
      const gradientTexture = new THREE.CanvasTexture(createInstagramGradient());
      gradientTexture.needsUpdate = true;

      scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name.toLowerCase().includes("insta")) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              emissive: 0x000000,
              roughness: 0.5,
              metalness: 0.5,
            });
          } else {
            child.material = new THREE.MeshStandardMaterial({
              map: gradientTexture,
              emissiveMap: gradientTexture, // گرادیانت برای نوردهی
              emissive: 0x222222, // شدت نوردهی
              roughness: 0.5,
              metalness: 0.5,
            });
          }
        }
      });
    };

    applyMaterials();

    if (playAnimation && animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
      });
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [playAnimation, animations, scene]);

  useEffect(() => {
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer.current) mixer.current.update(clock.getDelta());
    };
    animate();

    return () => clock.stop();
  }, []);

  useFrame(() => {
    if (shouldRotate && modelRef.current) {
      modelRef.current.rotation.y += 0.03;
    }
  });

  useEffect(() => {
    if (playAnimation) {
      setShouldRotate(true);
    }
  }, [playAnimation]);

  return <primitive ref={modelRef} object={scene} scale={[3, 3, 3]} position={[0, 0, -2]} />;
};

const createInstagramGradient = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");


  const gradient = ctx.createRadialGradient(
    canvas.width / 3, 
    canvas.height / 3, 
    0, 
    canvas.width / 3, 
    canvas.height / 3, 
    canvas.width / 3
  );


  gradient.addColorStop(0.5, "#dd2a7b");
  gradient.addColorStop(1, "#8134af");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return canvas;
};


const Instagram = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setPlayAnimation(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="h-80">
      <Canvas camera={{ position: [0, 2, 5], near: 0.1, far: 1000 }}>
        <Environment preset="city" />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <AnimatedModel url={instagramModel} playAnimation={playAnimation} />
      </Canvas>
    </div>
  );
};

export default Instagram;