'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';


export default function Boxes({ className }: { className?: string }) {
  const rootElement = useRef<HTMLCanvasElement>(null);

  const threeState = useRef<ThreeState | null>(null);

  useEffect(() => {
    if (rootElement.current) {
      threeState.current = init(rootElement.current);
      window.addEventListener('resize', threeState.current.handleWindowResize);

      return () => {
        const { handleWindowResize } = threeState.current!;
        window.removeEventListener('resize', handleWindowResize);
      }
    }
  }, [rootElement]);


  const [rotationState, setRotationState] = useState<'rotating' | 'stopping' | 'stopped' | 'starting'>('rotating');
  const toggleAnimation = () => {
    if (rotationState === 'rotating' || rotationState === 'starting') {
      setRotationState('stopping');
      stopRotatingSlowly(threeState.current);
    }
    if (rotationState === 'stopped' || rotationState === 'stopping') {
      setRotationState('starting');
      startRotatingSlowly(threeState.current);
    }
  }

  function stopRotatingSlowly(threeState?: ThreeState | null) {
    if (!threeState) return;
    const { controls } = threeState;
    const interval = setInterval(() => {
      controls.autoRotateSpeed -= controls.autoRotateSpeed * 0.3
      console.log(controls.autoRotateSpeed);
      if (controls.autoRotateSpeed <= 0.1) {
        clearInterval(interval);
        controls.autoRotateSpeed = 0;
        setRotationState('stopped');
      }
    }, 100);
  }

  function startRotatingSlowly(threeState?: ThreeState | null) {
    if (!threeState) return;
    const { controls } = threeState;
    const interval = setInterval(() => {
      controls.autoRotateSpeed += 0.1;
      if (controls.autoRotateSpeed >= 1) {
        clearInterval(interval);
        setRotationState('rotating');
      }
    }, 100);
  }

  return <div className={className} onClick={toggleAnimation}>
    <canvas ref={rootElement}></canvas>
  </div>
}


type ThreeState = ReturnType<typeof init>;

function init(rootElement: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: rootElement });
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

  scene.background = new THREE.Color(0xdddddd);
  scene.fog = new THREE.FogExp2(0xdddddd, 0.002);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(() => animate(threeState));

  camera.position.set(0, 200, -400);

  const controls = new MapControls(camera);
  controls.autoRotate = true;

  const geometry = new THREE.BoxGeometry();
  geometry.translate(0, 0.5, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0xeebbbb,
    flatShading: true,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide
  });

  for (let i = 0; i < 500; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = Math.random() * 1600 - 800;
    mesh.position.y = Math.random() * 800 - 400;
    mesh.position.z = Math.random() * 1600 - 800;
    mesh.scale.x = 20;
    mesh.scale.y = Math.random() * 80 + 10;
    mesh.scale.z = 20;
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    scene.add(mesh);
  }


  const dirLight1 = new THREE.DirectionalLight(0xffffff, 3);
  dirLight1.position.set(1, 1, 1);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0x002288, 5);
  dirLight2.position.set(-1, -1, -1);
  scene.add(dirLight2);

  const ambientLight = new THREE.AmbientLight(0x555555);
  scene.add(ambientLight);

  const handleWindowResize = () => onWindowResize(threeState)
  window.addEventListener('resize', handleWindowResize);

  const threeState = { camera, controls, scene, renderer, handleWindowResize };

  return threeState;
}

function onWindowResize(threeState: ThreeState) {
  const { camera, renderer } = threeState;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate(threeState: ThreeState) {
  const { controls, scene, camera, renderer } = threeState;


  controls.update();

  renderer.render(scene, camera);

}


