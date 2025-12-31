'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

interface StarShapeProps {
  path: string;
}

const StarShape = ({ path }: StarShapeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 4;
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );

    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Disable for performance
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    scene.add(hemisphereLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    directionalLight1.position.set(0, 12, 12);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(10, 8, 5);
    scene.add(directionalLight2);

    // Create stellated dodecahedron (star shape)
    const createStarGeometry = () => {
      const baseGeometry = new THREE.DodecahedronGeometry(0.6);
      
      // Check if geometry has index
      if (!baseGeometry.index) {
        baseGeometry.computeVertexNormals();
      }

      const positions = baseGeometry.attributes.position;
      const vertices: THREE.Vector3[] = [];

      for (let i = 0; i < positions.count; i++) {
        vertices.push(new THREE.Vector3(
          positions.getX(i),
          positions.getY(i),
          positions.getZ(i)
        ));
      }

      const faces: number[][] = [];
      const index = baseGeometry.index;
      
      if (index) {
        for (let i = 0; i < index.count; i += 3) {
          faces.push([
            index.getX(i),
            index.getX(i + 1),
            index.getX(i + 2)
          ]);
        }
      } else {
        // If no index, create faces from position array
        for (let i = 0; i < positions.count; i += 3) {
          faces.push([i, i + 1, i + 2]);
        }
      }

      const starVertices: number[] = [];
      faces.forEach(face => {
        const v0 = vertices[face[0]];
        const v1 = vertices[face[1]];
        const v2 = vertices[face[2]];

        const center = new THREE.Vector3()
          .add(v0).add(v1).add(v2)
          .divideScalar(3);

        const normal = new THREE.Vector3()
          .crossVectors(
            new THREE.Vector3().subVectors(v1, v0),
            new THREE.Vector3().subVectors(v2, v0)
          )
          .normalize();

        const spike = center.clone().add(normal.multiplyScalar(0.9));

        starVertices.push(v0.x, v0.y, v0.z);
        starVertices.push(v1.x, v1.y, v1.z);
        starVertices.push(spike.x, spike.y, spike.z);

        starVertices.push(v1.x, v1.y, v1.z);
        starVertices.push(v2.x, v2.y, v2.z);
        starVertices.push(spike.x, spike.y, spike.z);

        starVertices.push(v2.x, v2.y, v2.z);
        starVertices.push(v0.x, v0.y, v0.z);
        starVertices.push(spike.x, spike.y, spike.z);
      });

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      geometry.computeVertexNormals();
      
      // Clean up
      baseGeometry.dispose();
      
      return geometry;
    };

    const geometry = createStarGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0x0f0f1e,
      metalness: 0.6,
      roughness: 0.4,
      flatShading: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const previousMouse = new THREE.Vector2();
    let isDragging = false;
    let dragStartTime = 0;
    let dragStartMouse = new THREE.Vector2();
    let rotationOffset = { x: 0, y: 0 };

    const onMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = mouse.x - previousMouse.x;
        const deltaY = mouse.y - previousMouse.y;
        rotationOffset.y += deltaX * 3;
        rotationOffset.x += deltaY * 3;
        previousMouse.copy(mouse);
      } else {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(mesh);
        document.body.style.cursor = intersects.length > 0 ? 'grab' : 'default';
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(mesh);

      if (intersects.length > 0) {
        isDragging = true;
        previousMouse.copy(mouse);
        dragStartTime = Date.now();
        dragStartMouse.copy(mouse);
        document.body.style.cursor = 'grabbing';
      }
    };

    const onMouseUp = () => {
      if (isDragging) {
        const dragDuration = Date.now() - dragStartTime;
        const dragDistance = dragStartMouse.distanceTo(mouse);

        if (dragDuration < 200 && dragDistance < 0.1) {
          router.push(path);
        }
      }

      isDragging = false;
      document.body.style.cursor = 'default';
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Animation
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mesh.rotation.y = elapsedTime * 0.2 + rotationOffset.y;
      mesh.rotation.x = elapsedTime * 0.1 + rotationOffset.x;

      renderer.render(scene, camera);
    };

    animate();

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

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'default';
      if (container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [path, router]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ userSelect: 'none' }}
    />
  );
};

export default StarShape;

