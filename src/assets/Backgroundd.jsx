import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = (props) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null); // For tracking scene for theme switch

  // const controlsRef = useRef(null);

  useEffect(() => {
    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    // console.log(props.light);
    scene.background = new THREE.Color(props.light ? 0x0f0b0b : 0xffffff);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, (window.innerWidth) / (window.innerHeight), 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setSize(window.outerWidth, window.outerHeight);  
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, -1).normalize();
    scene.add(light);

    // Add orbit controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableZoom = false;
    // controls.enableRotate = false;
    // controls.enablePan = false;
    // controls.enableDamping = false;
    // controlsRef.current = controls;

    // Blob with ShaderMaterial
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };

    const vertexShader = `
    vec3 mod289(vec3 x)
    {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x)
    {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x)
    {
    return mod289(((x*34.0)+10.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r)
    {
    return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    float pnoise(vec3 P, vec3 rep)
    {
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
    }
    uniform float u_time;

    void main() {
    float noise = 5. * pnoise(position + u_time, vec3(10.));
    float displacement = noise / 10.;
    vec3 newPosition = position + normal * displacement;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
        `;

    const fragmentShader = `
    uniform vec2 u_resolution;
    uniform float u_time; // Time uniform for dynamic color effect

    void main() {
    // Normalize fragment coordinates
    vec2 st = gl_FragCoord.xy / u_resolution;

    // Define gold, blue, and off-white colors
    vec3 gold = vec3(0, 0.3, 0.5);   // Gold color
    vec3 blue = vec3(0.0, 0.0, 0.25);     // Blue color
    vec3 offWhite = vec3(1,1,1);  // Off-white color

    // Create a smooth color transition using sine/cosine based on fragment coordinates and time
    float blendFactor = 0.5 + 0.5 * sin(u_time + st.x * 6.0); // Time-dependent blend factor

    // Mix gold, blue, and off-white based on the blend factor
    vec3 color = mix(gold, blue, blendFactor); // Mix gold and blue
    color = mix(color, offWhite, 0.2); // Blend with off-white to lighten the effect

    // Set the final color of the fragment
    gl_FragColor = vec4(color, 1.0);
    }

    `;

    const mat = new THREE.ShaderMaterial({
      wireframe: true,
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const geo = new THREE.IcosahedronGeometry(8, 30);
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Create bubbles and position them at the sides
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

      uniforms.u_time.value = clock.getElapsedTime();
      const time = clock.getElapsedTime();

      mesh.rotation.x = Math.sin(time) * 0.5;
      mesh.rotation.y = Math.cos(time) * 0.5;

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
      uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight); /* */

    };
    // const handleDoubleClick = () => {
    //   if (controlsRef.current) {
    //     controlsRef.current.enabled = false;
    //   }
    // };

    window.addEventListener('resize', handleResize);
    // window.addEventListener('dblclick', handleDoubleClick);


    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('dblclick', handleDoubleClick);

      if (mountRef.current)
        mountRef.current.removeChild(renderer.domElement);

    };
  }, []);
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(props.light ? 0x0f0b0b : 0xffffff);
    }
  }, [props.light]);

  return <div ref={mountRef} className="absolute top-0 left-0 w-screen h-screen -z-10 pointer-events-none" id='bgCanvas' />;
};

export default ThreeScene;
