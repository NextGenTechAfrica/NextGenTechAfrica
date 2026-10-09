import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SpinningEarthCanvasProps {
  theme?: 'light' | 'dark' | 'system';
}

export const SpinningEarthCanvas: React.FC<SpinningEarthCanvasProps> = ({ theme = 'dark' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rotationSpeed = prefersReducedMotion ? 0.0001 : 0.0008;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    // Camera positioned to view the top horizon of the large Earth sphere
    camera.position.set(0, 2.2, 8.5);
    camera.lookAt(0, -0.2, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = theme === 'light' ? 1.4 : 1.1;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, theme === 'light' ? 3.5 : 2.6);
    sunLight.position.set(6, 6, 5);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(
      theme === 'light' ? 0xffffff : 0x0d1b2a, 
      theme === 'light' ? 1.2 : 0.6
    );
    scene.add(ambientLight);

    // Cyan rim accent light
    const rimLight = new THREE.DirectionalLight(0x00c4d4, theme === 'light' ? 2.5 : 1.8);
    rimLight.position.set(-8, 4, -4);
    scene.add(rimLight);

    // 4. Earth Sphere
    // Large radius placed lower so only the upper curved arc appears across the viewport
    const earthRadius = 7.5;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth-map.jpg');
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    earthTexture.wrapS = THREE.RepeatWrapping;

    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.7,
      metalness: 0.1,
    });

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    // Center lower down so only horizon is visible
    earthMesh.position.set(0, -6.6, 0);
    // Initial tilt on Earth's axial inclination (approx 23.4 degrees)
    earthMesh.rotation.z = -0.15;
    earthMesh.rotation.x = 0.22;
    scene.add(earthMesh);

    // 5. Atmospheric Cyan Fresnel Rim Glow (Matching NextGen Cyan #00c4d4)
    const atmosphereRadius = earthRadius + 0.08;
    const atmosphereGeometry = new THREE.SphereGeometry(atmosphereRadius, 64, 64);

    // Custom Fresnel Shader for Electric Cyan Rim Lighting
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = 1.0 - max(dot(viewDir, vNormal), 0.0);
          fresnel = pow(fresnel, 3.2);

          // Electric cyan gradient from deep turquoise to bright sky cyan
          vec3 cyanColor = vec3(0.0, 0.768, 0.831); // #00c4d4
          vec3 skyColor = vec3(0.133, 0.827, 0.933);  // #22d3ee
          vec3 color = mix(cyanColor, skyColor, fresnel);

          gl_FragColor = vec4(color, fresnel * 0.95);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });

    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphereMesh.position.copy(earthMesh.position);
    scene.add(atmosphereMesh);

    // Outer Soft Glow Halo
    const outerHaloGeometry = new THREE.SphereGeometry(earthRadius + 0.24, 48, 48);
    const outerHaloMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = 1.0 - max(dot(viewDir, vNormal), 0.0);
          fresnel = pow(fresnel, 4.8);
          gl_FragColor = vec4(0.0, 0.768, 0.831, fresnel * 0.65);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const outerHaloMesh = new THREE.Mesh(outerHaloGeometry, outerHaloMaterial);
    outerHaloMesh.position.copy(earthMesh.position);
    scene.add(outerHaloMesh);

    // 6. Deep Space Background Starfield (Only show strongly in dark mode)
    const starCount = 350;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      // Scatter in upper space
      starPositions[i * 3] = (Math.random() - 0.5) * 40;
      starPositions[i * 3 + 1] = Math.random() * 18 - 2; // above the horizon
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10;

      // Slight cyan tint for some stars
      const isCyan = Math.random() > 0.8;
      if (isCyan) {
        starColors[i * 3] = 0.0;
        starColors[i * 3 + 1] = 0.8;
        starColors[i * 3 + 2] = 0.9;
      } else {
        const brightness = Math.random() * 0.5 + 0.5;
        starColors[i * 3] = brightness;
        starColors[i * 3 + 1] = brightness;
        starColors[i * 3 + 2] = brightness * 1.1;
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: theme === 'light' ? 0.05 : 0.85, // Fade stars completely in light mode
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 7. Mouse Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;

      // Responsive adjustments: on mobile, raise Earth slightly to keep horizon balanced
      if (width < 640) {
        camera.position.set(0, 2.5, 9.5);
        earthMesh.position.set(0, -6.4, 0);
      } else if (width < 1024) {
        camera.position.set(0, 2.3, 8.8);
        earthMesh.position.set(0, -6.5, 0);
      } else {
        camera.position.set(0, 2.2, 8.5);
        earthMesh.position.set(0, -6.6, 0);
      }
      atmosphereMesh.position.copy(earthMesh.position);
      outerHaloMesh.position.copy(earthMesh.position);

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // 9. Continuous Animation Loop ("ALWAYS SPINNING")
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Continual Rotation: The Earth spins always!
      earthMesh.rotation.y += rotationSpeed;

      // Smooth mouse parallax damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX;
      camera.position.y = (width < 640 ? 2.5 : 2.2) + currentMouseY * 0.4;
      camera.lookAt(0, -0.2, 0);

      // Subtle starfield twinkling
      if (theme !== 'light') {
        starMaterial.opacity = 0.75 + Math.sin(Date.now() * 0.002) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      earthGeometry.dispose();
      earthMaterial.dispose();
      earthTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      outerHaloGeometry.dispose();
      outerHaloMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-transparent"
      aria-hidden="true"
    />
  );
};
