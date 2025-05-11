import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const IntersectingSquaresScene = () => {
  const mountRef = useRef(null);
  const [redCoords, setRedCoords] = useState({ x: 0, y: 0, z: 0 });
  const [blueCoords, setBlueCoords] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    let renderer, scene, camera, animationId;

    // Camera Setup
    const setupCamera = () => {
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 500);
      camera.position.z = 200;
    };

    // Scene Setup
    scene = new THREE.Scene();

    // Line materials with only colors specified
    const material1 = new THREE.LineBasicMaterial({
      color: 0xff0000,
    });

    const material2 = new THREE.LineBasicMaterial({
      color: 0x0000ff,
    });

    // Generate square points
    const generateSquarePoints = (size, offsetX = 0, offsetY = 0) => [
      new THREE.Vector3(-size + offsetX, size + offsetY, 0),
      new THREE.Vector3(size + offsetX, size + offsetY, 0),
      new THREE.Vector3(size + offsetX, -size + offsetY, 0),
      new THREE.Vector3(-size + offsetX, -size + offsetY, 0),
      new THREE.Vector3(-size + offsetX, size + offsetY, 0),
    ];

    // Create two intersecting squares
    const square1 = new THREE.BufferGeometry().setFromPoints(generateSquarePoints(30));
    const square2 = new THREE.BufferGeometry().setFromPoints(generateSquarePoints(30));

    // Offset for intersection
    square1.translate(-15, 0, 0);
    square2.translate(15, 0, 0);

    const line1 = new THREE.Line(square1, material1);
    const line2 = new THREE.Line(square2, material2);

    scene.add(line1);
    scene.add(line2);

    // Renderer Setup
    const setupRenderer = () => {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }
    };

    // Handle Resize
    const handleResize = () => {
      if (renderer && camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initialize Scene
    setupCamera();
    setupRenderer();

    // Animation Loop
    const animate = () => {
      line1.rotation.x += 0.01;
      line1.rotation.y += 0.01;
      line2.rotation.x -= 0.01;
      line2.rotation.y -= 0.01;

      // Update coordinates
      const redPos = line1.position;
      const bluePos = line2.position;
      setRedCoords({ x: redPos.x.toFixed(2), y: redPos.y.toFixed(2), z: redPos.z.toFixed(2) });
      setBlueCoords({ x: bluePos.x.toFixed(2), y: bluePos.y.toFixed(2), z: bluePos.z.toFixed(2) });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      scene.clear();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
<div ref={mountRef} className="w-full h-full relative">
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-5 justify-center">
    <div className="text-red-500">Red Square: Tech</div>
    <div className="text-blue-500">Blue Square: Life</div>
  </div>
</div>
  );
};

export default IntersectingSquaresScene;
