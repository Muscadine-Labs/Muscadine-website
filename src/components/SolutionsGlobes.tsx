import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

const SolutionsGlobes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    // Transparent background

    // Isometric camera setup
    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 14; // Increased to prevent cutoff
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

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const previousMouse = new THREE.Vector2();
    
    // Interaction state
    let isDragging = false;
    let selectedBlob: THREE.Mesh | null = null;
    let dragStartTime = 0;
    let dragStartMouse = new THREE.Vector2();
    const rotationOffsets = new Map<string, { x: number; y: number }>();

    // Renderer with better quality settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable for performance
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2 for performance
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Lighting - Consistent multi-directional setup
    // Hemisphere light for natural base lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    scene.add(hemisphereLight);

    // Main directional light from front-top (facing the camera view)
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    directionalLight1.position.set(0, 12, 12); // Front-top position
    directionalLight1.castShadow = false; // Disable shadows for performance
    scene.add(directionalLight1);

    // Secondary light from right side for dimension
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(10, 8, 5);
    scene.add(directionalLight2);

    // Fill light from left for even illumination
    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight3.position.set(-8, 5, 5);
    scene.add(directionalLight3);
    
    // Subtle back light for depth
    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight4.position.set(0, -3, -10);
    scene.add(directionalLight4);

    // Create icosahedron geometry (20 triangular faces)
    const createPolyhedronGeometry = () => {
      const geometry = new THREE.IcosahedronGeometry(0.8, 0); // 0 subdivisions for visible triangular faces
      return geometry;
    };

    const polyhedronGeometry = createPolyhedronGeometry();
    
    // Material with flat shading optimized for consistent lighting
    const polyhedronMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f0f1e, // Very dark blue-black
      metalness: 0.6,   // Balanced metalness
      roughness: 0.4,   // Balanced roughness for consistent reflections
      flatShading: true, // Flat shading to emphasize triangular faces
      emissive: 0x000000, // No emissive
      emissiveIntensity: 0,
      side: THREE.FrontSide, // Only render front faces
    });

    // Create four polyhedron shapes for each service - aligned vertically with more spacing
    const polyhedrons: THREE.Mesh[] = [];
    const basePositions = [
      { x: 0, y: 7, z: 0, path: '/bitcoin' },    // Top - Bitcoin Security
      { x: 0, y: 2.25, z: 0, path: '/defi' },    // Second - DeFi
      { x: 0, y: -2.25, z: 0, path: '/node' }     // Third - Bitcoin Node
    ];

    basePositions.forEach((pos, index) => {
      const polyhedron = new THREE.Mesh(polyhedronGeometry.clone(), polyhedronMaterial.clone());
      polyhedron.position.set(pos.x, pos.y, pos.z);
      // Set initial random rotation for variety
      polyhedron.rotation.x = index * 0.5;
      polyhedron.rotation.y = index * 0.7;
      // Store navigation path in userData
      polyhedron.userData = { path: pos.path };
      scene.add(polyhedron);
      polyhedrons.push(polyhedron);
    });

    // Create vertical connecting line that goes through the center of all polyhedrons
    // Extend line beyond the first and last polyhedron
    const topY = basePositions[0].y + 2; // Extend above top polyhedron
    const bottomY = basePositions[basePositions.length - 1].y - 2; // Extend below bottom polyhedron
    
    const linePoints = [
      new THREE.Vector3(0, topY, 0),
      new THREE.Vector3(0, bottomY, 0)
    ];
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x333333, // Lighter gray for visibility
      linewidth: 2,
      transparent: true,
      opacity: 0.6,
    });
    const connectionLine = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(connectionLine);

    // Mouse event handlers for rotation interaction
    const onMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Calculate mouse position in normalized device coordinates (-1 to +1)
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);

      if (isDragging && selectedBlob) {
        // Calculate rotation based on mouse movement
        const deltaX = mouse.x - previousMouse.x;
        const deltaY = mouse.y - previousMouse.y;
        
        const blobId = selectedBlob.uuid;
        const offset = rotationOffsets.get(blobId) || { x: 0, y: 0 };
        
        // Apply rotation offset (inverted for natural feel)
        offset.y += deltaX * 3; // Horizontal mouse movement rotates around Y axis
        offset.x += deltaY * 3; // Vertical mouse movement rotates around X axis
        
        rotationOffsets.set(blobId, offset);
        
        previousMouse.copy(mouse);
      } else {
        // Check for hover
        const intersects = raycaster.intersectObjects(polyhedrons);
        if (intersects.length > 0) {
          document.body.style.cursor = 'grab';
        } else {
          document.body.style.cursor = 'default';
        }
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(polyhedrons);

      if (intersects.length > 0) {
        isDragging = true;
        selectedBlob = intersects[0].object as THREE.Mesh;
        previousMouse.copy(mouse);
        dragStartTime = Date.now();
        dragStartMouse.copy(mouse);
        document.body.style.cursor = 'grabbing';
      }
    };

    const onMouseUp = () => {
      if (isDragging && selectedBlob) {
        const dragDuration = Date.now() - dragStartTime;
        const dragDistance = dragStartMouse.distanceTo(mouse);
        
        // If it was a short click with minimal movement, navigate
        if (dragDuration < 200 && dragDistance < 0.1) {
          const path = selectedBlob.userData.path;
          if (path) {
            navigate(path);
          }
        }
      }
      
      isDragging = false;
      selectedBlob = null;
      document.body.style.cursor = 'default';
    };

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Animation with smooth continuous time
    let animationFrameId: number;
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();

      // Apply rotation to all polyhedrons
      polyhedrons.forEach((polyhedron, index) => {
        const blobId = polyhedron.uuid;
        const offset = rotationOffsets.get(blobId) || { x: 0, y: 0 };
        
        // Use time-based rotation for perfectly smooth looping
        // Each polyhedron has a slightly different speed based on its index
        const baseRotationY = elapsedTime * (0.2 + index * 0.05);
        const baseRotationX = elapsedTime * (0.1 + index * 0.03);
        
        // Combine time-based rotation with user interaction offset
        polyhedron.rotation.y = baseRotationY + offset.y;
        polyhedron.rotation.x = baseRotationX + offset.x;
      });

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
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'default';
      if (container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      polyhedronGeometry.dispose();
      polyhedronMaterial.dispose();
      // Dispose cloned geometries and materials
      polyhedrons.forEach(polyhedron => {
        polyhedron.geometry.dispose();
        if (Array.isArray(polyhedron.material)) {
          polyhedron.material.forEach(m => m.dispose());
        } else {
          polyhedron.material.dispose();
        }
      });
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, [navigate]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px]"
      style={{ userSelect: 'none' }}
    />
  );
};

export default SolutionsGlobes;
