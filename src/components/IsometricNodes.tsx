'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const IsometricNodes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    // Transparent background (no background color)

    // Isometric camera setup
    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 10; // Increased to provide more space
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    
    // Set isometric view angle
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    // Renderer with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable antialiasing for performance
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2 for performance
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Create octagon geometry (8-sided cylinder acts as 3D octagon)
    const octagonGeometry = new THREE.CylinderGeometry(0.8, 0.8, 1.0, 8);
    
    const blockMaterial1 = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.2,
      roughness: 0.4,
    });
    const blockMaterial2 = new THREE.MeshStandardMaterial({
      color: 0x374151,
      metalness: 0.2,
      roughness: 0.4,
    });
    const blockMaterial3 = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.2,
      roughness: 0.4,
    });

    // Create three octagonal nodes in a line
    const node1 = new THREE.Mesh(octagonGeometry, blockMaterial1);
    node1.position.set(-3, 0, 0); // Closer together
    node1.rotation.set(0, Math.PI / 8, 0); // Rotate to show octagonal shape in isometric view
    scene.add(node1);

    const node2 = new THREE.Mesh(octagonGeometry, blockMaterial2);
    node2.position.set(0, 0, 0);
    node2.rotation.set(0, Math.PI / 8, 0); // Rotate to show octagonal shape in isometric view
    scene.add(node2);

    const node3 = new THREE.Mesh(octagonGeometry, blockMaterial3);
    node3.position.set(3, 0, 0); // Closer together
    node3.rotation.set(0, Math.PI / 8, 0); // Rotate to show octagonal shape in isometric view
    scene.add(node3);

    // Add edge highlights to octagonal blocks
    const edgeGeometry = new THREE.EdgesGeometry(octagonGeometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x6b7280 });
    
    const edges1 = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    node1.add(edges1);
    
    const edges2 = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    node2.add(edges2);

    const edges3 = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    node3.add(edges3);

    // Create connecting lines
    const line1Geometry = new THREE.BufferGeometry().setFromPoints([
      node1.position,
      node2.position,
    ]);
    const line2Geometry = new THREE.BufferGeometry().setFromPoints([
      node2.position,
      node3.position,
    ]);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9ca3af,
      linewidth: 2,
    });
    const line1 = new THREE.Line(line1Geometry, lineMaterial);
    const line2 = new THREE.Line(line2Geometry, lineMaterial);
    scene.add(line1);
    scene.add(line2);

    // Add subtle glow spheres at connection midpoints
    const glowGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const glowMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.6,
    });
    const glowMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.6,
    });
    
    const glowSphere1 = new THREE.Mesh(glowGeometry, glowMaterial1);
    glowSphere1.position.set(-1.5, 0, 0); // Adjusted for closer nodes
    scene.add(glowSphere1);

    const glowSphere2 = new THREE.Mesh(glowGeometry, glowMaterial2);
    glowSphere2.position.set(1.5, 0, 0); // Adjusted for closer nodes
    scene.add(glowSphere2);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Pulse the glow spheres with slight offset
      const time = Date.now() * 0.003;
      const scale1 = 1 + Math.sin(time) * 0.3;
      const scale2 = 1 + Math.sin(time + Math.PI / 2) * 0.3;
      
      glowSphere1.scale.set(scale1, scale1, scale1);
      glowSphere2.scale.set(scale2, scale2, scale2);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const aspect = width / height;

      camera.left = (frustumSize * aspect) / -2;
      camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      octagonGeometry.dispose();
      blockMaterial1.dispose();
      blockMaterial2.dispose();
      blockMaterial3.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      line1Geometry.dispose();
      line2Geometry.dispose();
      lineMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial1.dispose();
      glowMaterial2.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px]"
      style={{ touchAction: 'none' }}
    />
  );
};

export default IsometricNodes;

