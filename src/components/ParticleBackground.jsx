// src/components/ParticleBackground.jsx
// No explicit React import needed if React is globally available in this context
import * as THREE from 'three';
import React from 'react';

const ParticleBackground = () => {
  const mountRef = React.useRef(null); // Access React directly

  React.useEffect(() => { // Access React directly
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Particle geometry and material
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x8B5CF6); // Purple
    const color2 = new THREE.Color(0xEC4899); // Pink

    for (let i = 0; i < particleCount; i++) {
      // Position particles randomly in a cube
      positions[i * 3] = (Math.random() * 2 - 1) * 500; // x
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * 500; // y
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 500; // z

      // Assign random color mix
      const color = new THREE.Color();
      color.lerpColors(color1, color2, Math.random());
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true, // Use colors from geometry
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending, // For glowing effect
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles slightly
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleMaterial.dispose();
      particles.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'transparent' }} />;
};

export default ParticleBackground;