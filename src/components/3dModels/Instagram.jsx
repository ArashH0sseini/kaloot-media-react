import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import { useInView } from "react-intersection-observer";
import instagramModel from "../../assets/models/instagram.gltf";

const AnimatedModel = ({ url, playAnimation }) => {
  const { scene, animations } = useGLTF(url);
  const mixer = useRef(null);

  useEffect(() => {
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

  return <primitive object={scene} scale={[3, 3, 3]} position={[0, 0, -2]} />;
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
    <div ref={ref} className="h-60">
      <Canvas camera={{ position: [0, 2, 5], near: 0.1, far: 1000 }}>
        <Environment preset="city" />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <AnimatedModel url={instagramModel} playAnimation={playAnimation} />
      </Canvas>
    </div>
  );
};

export default Instagram;
