import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0b0b);

    const camera = new THREE.PerspectiveCamera(75, (window.innerWidth) / (window.innerHeight), 0.1, 1000);
    camera.position.z = -10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, -1).normalize();
    scene.add(light);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableDamping = false;
    controlsRef.current = controls;
    
const bubbles = [];
    for (let i = 0; i < 20; i++) {
      const bubbleGeometry = new THREE.SphereGeometry(Math.random() * 0.5 + 0.1, 32, 32);
      const bubbleMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.15 });
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.position.set((Math.random() - 0.5) * 40, -10, (Math.random() - 0.5) * 20);
      bubble.userData.speed = Math.random() * 0.01 + 0.05;
      scene.add(bubble);
      bubbles.push(bubble);
    }
    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
 // Animate bubbles to move upwards
 bubbles.forEach((bubble) => {
    bubble.position.y += bubble.userData.speed;
    if (bubble.position.y > 5) {
      bubble.position.y = -5;
      bubble.position.x = (Math.random() - 0.5) * 30;
      bubble.position.z = (Math.random() - 0.5) * 20;
    }
  });

  renderer.render(scene, camera);
};

animate();
// Handle window resize
const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  const handleDoubleClick = () => {
    if (controlsRef.current) {
      controlsRef.current.enabled = false;
    }
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('dblclick', handleDoubleClick);


  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('dblclick', handleDoubleClick);

    if (mountRef.current)
      mountRef.current.removeChild(renderer.domElement);

  };
}, []);

return <div ref={mountRef} className=" absolute top-0 left-0" />;
};

export default ThreeScene;
